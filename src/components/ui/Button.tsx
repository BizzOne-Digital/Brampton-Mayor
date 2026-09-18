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

function MotionWrap({
  magnetic,
  children,
  className,
}: {
  magnetic?: boolean
  children: React.ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  if (!magnetic || reduceMotion) {
    return <span className={cn('inline-flex', className)}>{children}</span>
  }
  return (
    <motion.span
      className={cn('inline-flex', className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  )
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    className,
    children,
    showArrow,
    magnetic = false,
  } = props
  const classes = cn(
    'inline-flex min-h-11 touch-manipulation items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-heading font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-electric sm:px-6 sm:text-xs sm:tracking-[0.14em]',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    const { href, external } = props
    if (external || href.startsWith('http')) {
      return (
        <MotionWrap magnetic={magnetic}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            <Inner showArrow={showArrow}>{children}</Inner>
          </a>
        </MotionWrap>
      )
    }
    return (
      <MotionWrap magnetic={magnetic}>
        <Link to={href} className={classes}>
          <Inner showArrow={showArrow}>{children}</Inner>
        </Link>
      </MotionWrap>
    )
  }

  const { type = 'button', ...buttonRest } = props as ButtonAsButton
  return (
    <MotionWrap magnetic={magnetic}>
      <button type={type} className={classes} {...buttonRest}>
        <Inner showArrow={showArrow}>{children}</Inner>
      </button>
    </MotionWrap>
  )
}
