import { z } from 'zod'

export const contactSubjects = [
  'General Question',
  'Volunteer',
  'Donate',
  'Community Concern',
  'Media Inquiry',
  'Event Invitation',
  'Other',
] as const

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  postalCode: z
    .string()
    .min(6, 'Please enter a valid postal code')
    .max(7, 'Please enter a valid postal code'),
  subject: z.enum(contactSubjects, { message: 'Please select a subject' }),
  message: z.string().min(10, 'Please enter a message (at least 10 characters)'),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: 'You must agree to be contacted by the campaign' }),
})

export type ContactFormValues = z.infer<typeof contactSchema>
