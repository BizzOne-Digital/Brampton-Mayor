import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'white'

type ButtonBaseProps = {
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
  showArrow?: boolean
  magnetic?: boolean
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type ButtonAsLink = ButtonBaseProps & {
  href: string
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border border-primary hover:bg-primary-electric hover:border-primary-electric shadow-[0_0_30px_rgba(124,58,237,0.35)]',
  ghost:
    'bg-transparent text-white border border-white/80 hover:bg-white/10 hover:border-white',
  outline:
    'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
  white:
    'bg-white text-midnight border border-white hover:bg-lavender text-dark',
}

function Inner({ children, showArrow }: { children: React.ReactNode; showArrow?: boolean }) {
  return (
    <span className="inline-flex items-center justify-center gap-2">
      {children}
      {showArrow && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
    </span>
  )
}

const MotionLink = motion.create(Link)

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const reduceMotion = useReducedMotion()
  const {
    variant = 'primary',
    className,
    children,
    showArrow,
    magnetic = true,
  } = props
  const classes = cn(
    'relative z-10 inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-heading font-semibold uppercase tracking-[0.12em] transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-electric sm:px-6 sm:text-xs sm:tracking-[0.14em]',
    variants[variant],
    className,
  )
  const motionProps =
    magnetic && !reduceMotion
      ? { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } }
      : {}

  if ('href' in props && props.href) {
    const { href, external } = props
    if (external || href.startsWith('http')) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...motionProps}
        >
          <Inner showArrow={showArrow}>{children}</Inner>
        </motion.a>
      )
    }
    return (
      <MotionLink to={href} className={classes} {...motionProps}>
        <Inner showArrow={showArrow}>{children}</Inner>
      </MotionLink>
    )
  }

  const { type = 'button', ...buttonRest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...buttonRest}>
      <Inner showArrow={showArrow}>{children}</Inner>
    </button>
  )
}
