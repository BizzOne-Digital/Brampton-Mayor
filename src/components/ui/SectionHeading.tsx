import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/animations'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()
  const variants = reduceMotion ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : fadeUp

  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className={cn(
            'mb-3 flex flex-wrap items-center gap-2 text-[11px] font-heading font-semibold uppercase tracking-[0.14em] sm:gap-3 sm:text-xs sm:tracking-[0.2em]',
            align === 'center' && 'justify-center',
            dark ? 'text-lavender/80' : 'text-primary',
          )}
        >
          <span className="h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={variants}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={cn(
          'font-display text-[clamp(1.75rem,7vw,2.5rem)] uppercase leading-[0.95] tracking-wide sm:text-5xl lg:text-6xl',
          dark ? 'text-white' : 'text-midnight',
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={variants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            dark ? 'text-lavender/85' : 'text-muted',
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
