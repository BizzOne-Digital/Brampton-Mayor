import type { Variants } from 'framer-motion'

export const easeOut = [0.22, 1, 0.36, 1] as const

export const viewportOnce = { once: true, margin: '-60px' as const }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: easeOut },
  }),
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: easeOut },
  }),
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: easeOut },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(2px)' },
  transition: { duration: 0.45, ease: easeOut },
}

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}
