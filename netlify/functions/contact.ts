import type { Handler, HandlerEvent } from '@netlify/functions'
import { handleContactPost } from '../../server/handleContactPost'

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  let body: unknown
  try {
    body = event.body ? JSON.parse(event.body) : null
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    }
  }

  const result = await handleContactPost(body)
  if (!result.ok) {
    return {
      statusCode: result.status,
      body: JSON.stringify({ error: result.message }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}

export { handler }
