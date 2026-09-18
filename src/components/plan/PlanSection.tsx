import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { useMediaQuery } from '@/lib/useMediaQuery'
import { cn } from '@/lib/utils'

type PlanSectionProps = {
  number: string
  title: string
  children: React.ReactNode
  icon: LucideIcon
  reverse?: boolean
  highlight?: string
  imageSrc?: string
  imageAlt?: string
}

export function PlanSection({
  number,
  title,
  children,
  icon: Icon,
  reverse,
  highlight,
  imageSrc,
  imageAlt = '',
}: PlanSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isLg = useMediaQuery('(min-width: 1024px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [24, -24])

  return (
    <section
      ref={ref}
      className={cn(
        'border-b border-black/5 py-12 sm:py-16 lg:py-28',
        Number(number) % 2 === 0 ? 'bg-off-white' : 'bg-white',
      )}
    >
      <div
        className={cn(
          'mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8',
          reverse && 'lg:[&>div:first-child]:order-2',
        )}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="font-display text-5xl text-primary/15 sm:text-6xl">{number}</span>
          <div className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
            <Icon className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="mt-6 font-display text-[clamp(1.35rem,5.5vw,2rem)] uppercase leading-tight text-midnight sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">{children}</div>
          {highlight && (
            <p className="mt-6 border-l-4 border-primary-electric pl-4 font-heading text-xs font-semibold uppercase leading-relaxed tracking-wide text-midnight sm:text-sm">
              {highlight}
            </p>
          )}
        </motion.div>

        <motion.div
          style={isLg ? { y } : undefined}
          className={cn(
            'relative min-w-0',
            imageSrc
              ? 'aspect-[4/3] max-h-[min(56vw,320px)] overflow-hidden rounded-2xl shadow-xl sm:max-h-none lg:sticky lg:top-28'
              : 'hidden lg:flex lg:items-center lg:justify-center',
          )}
        >
          {imageSrc ? (
            <>
              <OptimizedImage src={imageSrc} alt={imageAlt} className="h-full min-h-[280px]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/25 to-transparent" />
            </>
          ) : (
            <div className="relative h-64 w-64 rounded-full border border-primary/20 bg-gradient-to-br from-lavender to-white shadow-inner">
              <Icon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-primary/30" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
