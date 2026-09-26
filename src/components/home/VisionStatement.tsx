import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { campaign } from '@config/campaign'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

export function VisionStatement() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary-deep section-y lg:py-40 grain"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <OptimizedImage
          src={campaign.images.businessCampus}
          alt=""
          className="h-full"
          objectPosition="center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/95 via-primary-deep/90 to-midnight" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[clamp(1.35rem,5.5vw,2.25rem)] uppercase leading-[1.08] text-white sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          A Brampton where residents can work, live and succeed in the same city they call home.
        </motion.p>
      </div>
    </section>
  )
}
