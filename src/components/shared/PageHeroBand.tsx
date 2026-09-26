import { motion, useReducedMotion } from 'framer-motion'
import { easeOut } from '@/lib/animations'
import { cn } from '@/lib/utils'

type PageHeroBandProps = {
  title: string
  description?: string
  narrow?: boolean
  className?: string
}

export function PageHeroBand({ title, description, narrow, className }: PageHeroBandProps) {
  const reduceMotion = useReducedMotion()
  const t = reduceMotion ? { duration: 0.2 } : { duration: 0.55, ease: easeOut }

  return (
    <section
      className={cn(
        'bg-midnight pb-10 pt-[max(7rem,calc(env(safe-area-inset-top,0px)+5.5rem))] text-white sm:pb-12 lg:pt-40',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          narrow ? 'max-w-4xl' : 'max-w-7xl',
        )}
      >
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...t, delay: reduceMotion ? 0 : 0.05 }}
          className="font-display text-[clamp(1.5rem,6vw,2.75rem)] uppercase sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...t, delay: reduceMotion ? 0 : 0.15 }}
            className="mt-6 text-lg leading-relaxed text-lavender/85"
          >
            {description}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.75, delay: 0.25, ease: easeOut }}
          className="mt-8 h-1 w-20 origin-left bg-primary-electric"
          aria-hidden
        />
      </div>
    </section>
  )
}
