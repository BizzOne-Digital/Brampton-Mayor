import type { VercelRequest, VercelResponse } from '@vercel/node'
import { handleContactPost } from '../server/handleContactPost'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const result = await handleContactPost(req.body)
  if (!result.ok) {
    return res.status(result.status).json({ error: result.message })
  }

  return res.status(200).json({ success: true })
}
