import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'
import { MobileStickyCTA } from './MobileStickyCTA'
import { pageTransition } from '@/lib/animations'

export function SiteLayout() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
          className="min-h-screen min-w-0 pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] lg:pb-0"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}
