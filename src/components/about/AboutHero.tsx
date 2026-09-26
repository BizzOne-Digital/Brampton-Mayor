import { motion } from 'framer-motion'
import { campaign } from '@config/campaign'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { aboutIntro } from '@/content/aboutSections'

export function AboutHero() {
  return (
    <section
      className="relative min-h-[min(85dvh,720px)] overflow-hidden bg-midnight sm:min-h-[70dvh] lg:min-h-[75dvh]"
      aria-label="About Nate"
    >
      <div className="absolute inset-0">
        <OptimizedImage
          src={campaign.images.mainStreet}
          alt="Brampton main street and local businesses"
          loading="eager"
          className="h-full w-full scale-105 object-cover"
          objectPosition="center center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-midnight/[0.97] via-midnight/82 to-midnight/45 sm:from-midnight/95 sm:via-midnight/72 sm:to-midnight/30 lg:via-midnight/60 lg:to-midnight/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/25 to-midnight/50"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(85dvh,720px)] max-w-7xl min-w-0 flex-col justify-end px-4 pb-14 pt-[max(7rem,calc(env(safe-area-inset-top,0px)+5.5rem))] sm:min-h-[70dvh] sm:justify-center sm:pb-20 sm:pt-32 lg:min-h-[75dvh] lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary-electric sm:text-sm"
          >
            Brampton Is Home
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-[clamp(1.5rem,6vw,2.75rem)] uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Born in Brampton. Raised in Brampton. Ready to Serve Brampton.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-lavender/90 sm:text-lg"
          >
            {aboutIntro.lead}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 h-1 w-24 origin-left bg-primary-electric"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
