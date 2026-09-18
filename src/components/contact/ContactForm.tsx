import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import {
  contactSchema,
  contactSubjects,
  type ContactFormValues,
} from '@/lib/validation'
import { cn } from '@/lib/utils'

const subjectMap: Record<string, ContactFormValues['subject']> = {
  Volunteer: 'Volunteer',
  Donate: 'Donate',
  volunteer: 'Volunteer',
  donate: 'Donate',
}

export function ContactForm() {
  const [params] = useSearchParams()
  const preset = params.get('subject')
  const mappedSubject = preset ? subjectMap[preset] ?? 'General Question' : undefined

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: mappedSubject ?? 'General Question',
      consent: undefined,
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading')
    try {
      // Placeholder: wire to API when backend is available
      await new Promise((r) => setTimeout(r, 900))
      console.info('Contact form submission (demo):', data)
      setStatus('success')
      reset({ subject: 'General Question' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-primary/20 bg-lavender/50 p-8 text-center">
        <h3 className="font-heading text-xl font-bold uppercase text-midnight">Message sent</h3>
        <p className="mt-2 text-muted">
          Thank you for reaching out. The campaign team will follow up as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-primary underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input
            {...register('fullName')}
            className={inputClass}
            autoComplete="name"
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message}>
          <input
            type="email"
            {...register('email')}
            className={inputClass}
            autoComplete="email"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input type="tel" {...register('phone')} className={inputClass} autoComplete="tel" />
        </Field>
        <Field label="Postal Code" error={errors.postalCode?.message}>
          <input {...register('postalCode')} className={inputClass} autoComplete="postal-code" />
        </Field>
      </div>

      <Field label="Subject" error={errors.subject?.message}>
        <select {...register('subject')} className={inputClass}>
          {contactSubjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={5}
          className={cn(inputClass, 'resize-y min-h-[120px]')}
        />
      </Field>

      <label className="flex gap-3 text-sm text-muted">
        <input type="checkbox" {...register('consent')} className="mt-1 h-4 w-4 accent-primary" />
        <span>
          I agree to be contacted by the campaign regarding my message. (Required)
        </span>
      </label>
      {errors.consent && <p className="text-sm text-red-600">{errors.consent.message}</p>}

      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-heading font-semibold uppercase tracking-wider text-white hover:bg-primary-electric disabled:opacity-60 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}

const inputClass =
  'w-full min-h-11 rounded-xl border border-black/10 bg-white px-4 py-3 text-base text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20'

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-heading font-semibold uppercase tracking-wider text-midnight">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
