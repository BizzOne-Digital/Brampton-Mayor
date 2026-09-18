import { motion } from 'framer-motion'
import { campaign } from '@config/campaign'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { fadeUp } from '@/lib/animations'

export function CampaignStatement() {
  return (
    <section className="relative overflow-hidden bg-off-white section-y">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute right-8 top-12 hidden rotate-90 font-heading text-xs uppercase tracking-[0.3em] text-primary/40 lg:block"
      >
        Brampton First
      </motion.span>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display text-[clamp(2rem,10vw,3.5rem)] uppercase leading-[0.95] text-midnight sm:text-6xl lg:text-7xl"
          >
            Brampton is home.
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 h-1 w-24 origin-left bg-primary"
          />
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            <p>
              Nathaniel &apos;Nate&apos; Peart was born and raised in Brampton. He attended our
              schools, built his career through entrepreneurship, athletics, music, coaching and
              community work, and has remained deeply connected to the city that shaped him.
            </p>
            <p>
              Nate is running for Mayor because Brampton&apos;s growth should translate into a
              better quality of life for the people who call it home.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl sm:aspect-[4/5]"
        >
          <OptimizedImage
            src={campaign.images.community}
            alt="Brampton civic architecture and community"
            className="h-full"
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" aria-hidden />
        </motion.div>
      </div>
    </section>
  )
}
