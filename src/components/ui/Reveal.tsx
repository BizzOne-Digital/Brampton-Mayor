import { motion, useReducedMotion, type Variants } from 'framer-motion'
import {
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  reducedMotionVariants,
  scaleIn,
  viewportOnce,
} from '@/lib/animations'
import { cn } from '@/lib/utils'

const variantMap: Record<string, Variants> = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
  variant?: keyof typeof variantMap
  delay?: number
  /** When true, animates on mount (for above-the-fold content). */
  immediate?: boolean
}

export function Reveal({
  children,
  className,
  as = 'div',
  variant = 'fadeUp',
  delay = 0,
  immediate = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const variants = reduceMotion ? reducedMotionVariants : variantMap[variant]
  const Component = motion[as]

  return (
    <Component
      variants={variants}
      custom={delay}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' as const }
        : { whileInView: 'visible' as const, viewport: viewportOnce })}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}
