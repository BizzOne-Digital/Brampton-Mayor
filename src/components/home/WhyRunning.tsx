import { motion } from 'framer-motion'
import { campaign } from '@config/campaign'
import { Button } from '@/components/ui/Button'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { fadeUp, staggerContainer } from '@/lib/animations'

const questions = [
  'Can our children see a future here?',
  'Can families afford to remain here?',
  'Can entrepreneurs build successful businesses here?',
  'Can residents find quality careers closer to home?',
  'Can seniors continue to afford the communities they helped build?',
]

export function WhyRunning() {
  return (
    <section className="bg-white section-y">
      <div className="mx-auto grid max-w-7xl min-w-0 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[3/4]"
        >
          <OptimizedImage
            src={campaign.images.youthCentre}
            alt="Youth sports, music and arts programs in Brampton"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-[clamp(1.75rem,7vw,2.75rem)] uppercase text-midnight sm:text-5xl">
            Why I Am Running
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              I have watched Brampton grow from the city I knew as a child into one of
              Canada&apos;s largest and fastest growing communities. Growth brings opportunity, but
              growth also brings responsibility.
            </p>
            <p className="font-medium text-dark">
              We need to ask a simple question: Is Brampton becoming a better place to live for the
              people who already call it home?
            </p>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 space-y-3"
          >
            {questions.map((q, i) => (
              <motion.li
                key={q}
                variants={fadeUp}
                custom={i}
                className="border-l-2 border-primary pl-4 font-heading text-sm font-semibold uppercase tracking-wide text-midnight sm:text-base"
              >
                {q}
              </motion.li>
            ))}
          </motion.ul>

          <p className="mt-8 text-muted">
            Brampton has the people, talent, diversity and potential to become one of Canada&apos;s
            great cities. Now we need leadership focused on turning that potential into results.
          </p>
          <Button href="/about" variant="primary" showArrow className="mt-8">
            Meet Nate
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
