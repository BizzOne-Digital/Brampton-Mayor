import { motion } from 'framer-motion'
import { getDonationHref } from '@config/campaign'
import { Button } from '@/components/ui/Button'

export function DonationBanner() {
  return (
    <section className="relative overflow-hidden bg-primary section-y">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, #7c3aed, transparent 50%), radial-gradient(circle at 80% 50%, #2a1159, transparent 55%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(1.75rem,7vw,2.75rem)] uppercase text-white sm:text-5xl"
        >
          Help Put Brampton First
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base text-lavender/95 sm:text-lg"
        >
          Every contribution helps us reach more residents, share our vision and build a campaign
          focused on Brampton&apos;s future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="btn-stack-mobile mt-8 justify-center sm:flex-row"
        >
          <Button href={getDonationHref()} variant="white">Donate Now</Button>
          <Button href="/contact" variant="ghost">Join the Campaign</Button>
        </motion.div>
      </div>
    </section>
  )
}
