import { motion } from 'framer-motion'
import { aboutClosing } from '@/content/aboutSections'
import { Button } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

export function AboutClosing() {
  return (
    <section className="bg-midnight py-20 text-white grain lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-base leading-relaxed text-lavender/90 sm:text-lg"
        >
          {aboutClosing.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </motion.div>
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 font-display text-3xl uppercase text-white sm:text-4xl"
        >
          {aboutClosing.signoff}
        </motion.p>
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="btn-stack-mobile mt-10 sm:flex-row sm:flex-wrap"
        >
          <Button href="/plan" variant="primary" showArrow>Explore the Plan</Button>
          <Button href="/contact" variant="ghost">Get Involved</Button>
        </motion.div>
      </div>
    </section>
  )
}
