import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 400, damping: 35 })
  const springY = useSpring(y, { stiffness: 400, damping: 35 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-electric mix-blend-screen"
        style={{ x: springX, y: springY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-electric/50"
        style={{ x: springX, y: springY }}
        aria-hidden
      />
    </>
  )
}
