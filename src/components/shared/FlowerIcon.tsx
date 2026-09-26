import { cn } from '@/lib/utils'

type FlowerIconProps = {
  className?: string
  strokeWidth?: number
}

export function FlowerIcon({ className, strokeWidth = 1.5 }: FlowerIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <path
        d="M32 8c2 8 8 12 16 12-8 2-12 8-12 16 0-8-4-14-12-16 8-2 14-8 16-16 2 8 8 14 16 16-8 2-14 8-14 16 0-8 4-14 12-16-8-2-14-8-16-16z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <path
        d="M32 44v12M24 52h16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
