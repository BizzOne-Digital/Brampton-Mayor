import nodemailer from 'nodemailer'
import type { ContactFormValues } from './contactSchema.js'

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export function createSmtpTransporter() {
  const user = requireEnv('SMTP_USER')
  const pass = requireEnv('SMTP_PASS')

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: { user, pass },
  })
}

export async function sendContactFormEmail(data: ContactFormValues) {
  const smtpUser = requireEnv('SMTP_USER')
  const mailTo = process.env.MAIL_TO ?? smtpUser

  const transporter = createSmtpTransporter()

  const text = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Postal code: ${data.postalCode}`,
    `Subject: ${data.subject}`,
    '',
    'Message:',
    data.message,
  ].join('\n')

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Postal code:</strong> ${escapeHtml(data.postalCode)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <hr />
    <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
  `

  await transporter.sendMail({
    from: `"Nate Peart Campaign" <${smtpUser}>`,
    to: mailTo,
    replyTo: data.email,
    subject: `[Campaign contact] ${data.subject} — ${data.fullName}`,
    text,
    html,
  })
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
