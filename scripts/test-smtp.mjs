import { config } from 'dotenv'
import nodemailer from 'nodemailer'

config()

const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS

if (!user || !pass) {
  console.error('Set SMTP_USER and SMTP_PASS in .env')
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: { user, pass },
})

console.log('Verifying SMTP connection…')
try {
  await transporter.verify()
  console.log('SMTP verify: OK')
} catch (err) {
  console.error('SMTP verify failed:', err)
  process.exit(1)
}

const mailTo = process.env.MAIL_TO ?? user
console.log(`Sending test message to ${mailTo}…`)

try {
  const info = await transporter.sendMail({
    from: `"Nate Peart Campaign (SMTP test)" <${user}>`,
    to: mailTo,
    subject: '[SMTP test] Campaign site mail is working',
    text: `This is an automated SMTP test from the Brampton Mayor campaign site.\nTime: ${new Date().toISOString()}`,
  })
  console.log('Test email sent:', info.messageId)
} catch (err) {
  console.error('Send failed:', err)
  process.exit(1)
}
