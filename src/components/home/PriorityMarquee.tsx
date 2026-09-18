import { motion } from 'framer-motion'
import { fadeIn, viewportOnce } from '@/lib/animations'

const items = [
  'Affordability',
  'Responsible Spending',
  'Local Jobs',
  'Safer Communities',
  'Youth Opportunities',
  'Arts and Culture',
  'Stronger Infrastructure',
  'Local Business',
  'Accountable City Hall',
]

export function PriorityMarquee() {
  const doubled = [...items, ...items]

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="overflow-hidden border-y border-primary/15 bg-midnight py-4 sm:py-5"
      aria-label="Campaign priorities marquee"
    >
      <div className="marquee-track flex w-max gap-8" role="marquee">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-white/90 sm:gap-8 sm:text-sm sm:tracking-[0.2em] md:text-base"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-primary-electric" aria-hidden />
          </span>
        ))}
      </div>
    </motion.section>
  )
}
