import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Mouse } from 'lucide-react'
import { campaign } from '@config/campaign'
import { Button } from '@/components/ui/Button'
import { FlowerIcon } from '@/components/shared/FlowerIcon'
import { OptimizedImage } from '@/components/ui/OptimizedImage'

function SocialRail() {
  const items = [
    { label: 'Facebook', href: campaign.social.facebook },
    { label: 'Instagram', href: campaign.social.instagram },
    { label: 'TikTok', href: campaign.social.tiktok },
  ]
  return (
    <div
      className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 sm:left-5 lg:flex"
      aria-label="Social media"
    >
      {items.map(({ label, href }) =>
        href ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-[10px] font-heading font-semibold uppercase text-white/70 transition hover:border-white/60 hover:text-white"
            title={label}
          >
            {label[0]}
          </a>
        ) : (
          <span
            key={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[10px] font-heading font-semibold uppercase text-white/35"
            title={`${label} (coming soon)`}
          >
            {label[0]}
          </span>
        ),
      )}
    </div>
  )
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const glowX = useSpring(mx, { stiffness: 80, damping: 20 })
  const glowY = useSpring(my, { stiffness: 80, damping: 20 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduceMotion) return
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const parallaxY = useTransform(glowY, (v) => (reduceMotion ? 0 : (v - 400) * 0.02))

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden bg-[#080d2b]"
      onMouseMove={handleMove}
      aria-label="Campaign hero"
    >
      {/* Background + civic scene */}
      <div className="absolute inset-0">
        <motion.div style={{ y: parallaxY }} className="h-[110%] w-full">
          <OptimizedImage
            src={campaign.images.heroBackground}
            alt=""
            loading="eager"
            className="h-full w-full object-cover object-[52%_42%] sm:object-[54%_40%] lg:object-[58%_38%]"
          />
        </motion.div>

        {/* Left panel + diagonal beam (mockup) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,#080d2b_0%,#080d2b_38%,rgba(8,13,43,0.92)_48%,rgba(84,35,154,0.35)_58%,transparent_72%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#080d2b] via-[#080d2b]/82 to-transparent lg:from-[#080d2b]/92 lg:via-[#080d2b]/35 lg:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#080d2b]/90 via-transparent to-[#080d2b]/30"
          aria-hidden
        />
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#7c3aed]/20 blur-[120px]"
            style={{ left: glowX, top: glowY, x: '-50%', y: '-50%' }}
          />
        )}
      </div>

      <SocialRail />

      <FlowerIcon
        className="pointer-events-none absolute bottom-24 left-3 z-10 h-16 w-16 text-[#7c3aed]/40 sm:left-5 lg:bottom-20 lg:h-24 lg:w-24"
        strokeWidth={1}
      />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl min-w-0 flex-col justify-center px-4 pb-32 pt-[max(6.5rem,calc(env(safe-area-inset-top,0px)+5.5rem))] sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="flex w-full min-w-0 max-w-2xl flex-col justify-center lg:max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-start gap-3 text-[10px] font-heading font-semibold uppercase leading-snug tracking-[0.16em] text-[#eee7ff] sm:text-[11px] sm:tracking-[0.2em]"
          >
            <span className="mt-2 h-px w-7 shrink-0 bg-[#7c3aed] sm:w-9" aria-hidden />
            <span>
              {campaign.candidate.displayName}
              <span className="mt-1 block font-medium text-[#eee7ff]/85 sm:mt-0 sm:inline sm:before:content-['_']">
                {campaign.positionLabel}
              </span>
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,9vw,3.25rem)] uppercase leading-[0.9] tracking-[0.02em] sm:text-5xl lg:text-[3.75rem] xl:text-7xl"
          >
            <span className="text-white">PUTTING </span>
            <span className="text-[#c4b5fd] drop-shadow-[0_0_24px_rgba(124,58,237,0.35)]">
              BRAMPTON FIRST.{' '}
            </span>
            <span className="text-white">ALWAYS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="hero-body mt-6 max-w-md text-sm font-normal leading-relaxed text-[#eee7ff]/90 sm:text-[15px] sm:leading-7"
          >
            Born and raised in Brampton. An entrepreneur, coach, artist and community leader
            working to build a safer, stronger and more affordable city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="btn-stack-mobile mt-8 sm:flex-row sm:flex-wrap"
          >
            <Button
              href="/plan"
              variant="primary"
              showArrow
              className="border-[#54239a] bg-[#54239a] shadow-[0_0_28px_rgba(124,58,237,0.45)] hover:border-[#7c3aed] hover:bg-[#7c3aed]"
            >
              Explore the Plan
            </Button>
            <Button href="/about" variant="ghost" showArrow className="border-white/85 text-white">
              Meet Nate
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-10 hidden font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 lg:block"
          >
            {campaign.tagline}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:bottom-10 lg:left-8 lg:translate-x-0"
      >
        <Mouse className="h-5 w-5 animate-bounce" aria-hidden />
        <span className="font-heading text-[10px] uppercase tracking-[0.22em]">Scroll to explore</span>
      </motion.div>

      <p className="absolute bottom-24 left-4 z-20 max-w-[200px] font-heading text-[9px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-white/60 sm:left-6 lg:hidden">
        {campaign.tagline}
      </p>
    </section>
  )
}
