import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { getDonationHref } from '@config/campaign'
import { cn } from '@/lib/utils'
import { easeOut } from '@/lib/animations'

export function MobileStickyCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-white/10 bg-midnight/95 p-3 backdrop-blur-lg lg:hidden',
        'pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))]',
      )}
    >
      <Link
        to={getDonationHref()}
        className="flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/70 text-xs font-heading font-semibold uppercase tracking-wider text-white transition-[background-color,transform] duration-300 active:scale-[0.98]"
      >
        Donate
      </Link>
      <Link
        to="/contact"
        className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-primary text-xs font-heading font-semibold uppercase tracking-wider text-white transition-[background-color,transform] duration-300 active:scale-[0.98]"
      >
        Get Involved
      </Link>
    </motion.div>
  )
}
