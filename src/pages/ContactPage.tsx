import { Mail, Phone } from 'lucide-react'
import { campaign } from '@config/campaign'
import { PageMeta } from '@/components/shared/PageMeta'
import { ContactForm } from '@/components/contact/ContactForm'
import { GetInvolvedOptions } from '@/components/contact/GetInvolvedOptions'

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact & Get Involved"
        description="Contact the Nate Peart for Mayor campaign — volunteer, share your ideas, or get in touch."
        path="/contact"
      />
      <section className="bg-midnight pb-10 pt-[max(7rem,calc(env(safe-area-inset-top,0px)+5.5rem))] text-white sm:pb-12 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-[clamp(1.5rem,6vw,2.5rem)] uppercase sm:text-5xl">
            Let&apos;s Build Brampton&apos;s Future Together
          </h1>
        </div>
      </section>

      <section className="bg-off-white section-y">
        <div className="mx-auto grid max-w-7xl min-w-0 gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-heading text-xl font-bold uppercase text-midnight">Contact</h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${campaign.email}`}
                  className="flex items-center gap-3 text-muted hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {campaign.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${campaign.phone.replace(/-/g, '')}`}
                  className="flex items-center gap-3 text-muted hover:text-primary"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {campaign.phoneDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Social media: {campaign.socialHandles.instagram} (placeholders — add URLs in
              config/campaign.ts)
            </p>

            <h2 className="mt-12 font-heading text-xl font-bold uppercase text-midnight">
              Get Involved
            </h2>
            <div className="mt-6">
              <GetInvolvedOptions />
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="font-heading text-xl font-bold uppercase text-midnight">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
