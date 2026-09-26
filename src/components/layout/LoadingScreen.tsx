import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FlowerIcon } from '@/components/shared/FlowerIcon'
import { campaign } from '@config/campaign'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 2200)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-midnight grain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
          aria-busy={visible}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="text-primary-electric"
          >
            <FlowerIcon className="h-16 w-16" strokeWidth={1.2} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-display text-2xl uppercase tracking-[0.2em] text-white"
          >
            {campaign.siteName}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
