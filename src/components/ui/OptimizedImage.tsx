import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { easeOut } from '@/lib/animations'

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
  const reduceMotion = useReducedMotion()
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onLoad={() => setLoaded(true)}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
      animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: easeOut }}
      className={cn('h-full w-full object-cover', className)}
      style={objectPosition ? { objectPosition } : undefined}
    />
  )
}
