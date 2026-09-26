import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { campaign } from '@config/campaign'
import { PageMeta } from '@/components/shared/PageMeta'
import { PageHeroBand } from '@/components/shared/PageHeroBand'
import { ContactForm } from '@/components/contact/ContactForm'
import { GetInvolvedOptions } from '@/components/contact/GetInvolvedOptions'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact & Get Involved"
        description="Contact the Nate Peart for Mayor campaign. Volunteer, share your ideas, or get in touch."
        path="/contact"
      />
      <PageHeroBand title="Let's Build Brampton's Future Together" />

      <section className="bg-off-white section-y">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-7xl min-w-0 gap-10 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:px-8"
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-xl font-bold uppercase text-midnight">Contact</h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${campaign.email}`}
                  className="interactive-link flex items-center gap-3 text-muted"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {campaign.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${campaign.phone.replace(/-/g, '')}`}
                  className="interactive-link flex items-center gap-3 text-muted"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {campaign.phoneDisplay}
                </a>
              </li>
              {campaign.phoneSecondary ? (
                <li>
                  <a
                    href={`tel:${campaign.phoneSecondary.replace(/-/g, '')}`}
                    className="interactive-link flex items-center gap-3 text-muted"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    {campaign.phoneSecondaryDisplay}
                  </a>
                </li>
              ) : null}
            </ul>
            {campaign.social.instagram ? (
              <p className="mt-6 text-sm text-muted">
                Instagram:{' '}
                <a
                  href={campaign.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-link font-medium text-primary"
                >
                  {campaign.socialHandles.instagram}
                </a>
              </p>
            ) : null}

            <h2 className="mt-12 font-heading text-xl font-bold uppercase text-midnight">
              Get Involved
            </h2>
            <div className="mt-6">
              <GetInvolvedOptions />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-8"
          >
            <h2 className="font-heading text-xl font-bold uppercase text-midnight">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
