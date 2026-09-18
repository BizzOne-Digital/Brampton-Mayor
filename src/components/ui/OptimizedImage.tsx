import { cn } from '@/lib/utils'

type OptimizedImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  objectPosition?: string
}

export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  objectPosition,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={cn('h-full w-full object-cover', className)}
      style={objectPosition ? { objectPosition } : undefined}
    />
  )
}
