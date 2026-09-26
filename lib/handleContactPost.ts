import { contactSchema } from './contactSchema.js'
import { sendContactFormEmail } from './contactMail.js'

export async function handleContactPost(
  body: unknown,
): Promise<{ ok: true } | { ok: false; status: number; message: string }> {
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return {
      ok: false,
      status: 400,
      message: parsed.error.issues[0]?.message ?? 'Invalid form data',
    }
  }

  try {
    await sendContactFormEmail(parsed.data)
    return { ok: true }
  } catch (err) {
    console.error('Contact email failed:', err)
    return { ok: false, status: 500, message: 'Failed to send message. Please try again later.' }
  }
}
