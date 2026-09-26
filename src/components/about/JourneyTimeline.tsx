import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

import { journeySteps as steps } from '@/content/aboutSections'

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="bg-white section-y lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="font-display text-[clamp(1.75rem,7vw,2.5rem)] uppercase text-midnight"
        >
          Journey
        </motion.h2>
        <div ref={ref} className="relative mt-12">
          <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-lavender" aria-hidden />
          <motion.div
            style={{ height }}
            className="absolute left-[7px] top-0 w-0.5 origin-top bg-primary"
            aria-hidden
          />
          <ul className="space-y-8">
            {steps.map((step, i) => (
              <motion.li
                key={step}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="relative flex gap-6 pl-8"
              >
                <span
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-white"
                  aria-hidden
                />
                <span className="font-heading text-sm font-semibold uppercase tracking-wide text-midnight sm:text-base">
                  {step}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
