import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { IncomingMessage } from 'node:http'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : null)
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

function contactApiDevPlugin(): Plugin {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0]
        if (url !== '/api/contact') {
          return next()
        }

        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          const body = await readJsonBody(req)
          const { handleContactPost } = await import('./lib/handleContactPost.js')
          const result = await handleContactPost(body)
          res.setHeader('Content-Type', 'application/json')
          if (!result.ok) {
            res.statusCode = result.status
            res.end(JSON.stringify({ error: result.message }))
            return
          }
          res.statusCode = 200
          res.end(JSON.stringify({ success: true }))
        } catch {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Server error' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, '')
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) {
      process.env[key] = value
    }
  }

  return {
  plugins: [react(), tailwindcss(), contactApiDevPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
      '@config': path.resolve(rootDir, './config'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react-router')) return 'router'
            if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor'
            if (id.includes('@fontsource')) return 'fonts'
            return 'vendor'
          }
        },
      },
    },
  },
  }
})
