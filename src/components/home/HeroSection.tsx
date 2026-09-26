import { motion } from 'framer-motion'
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

function HeroCopy({ stacked }: { stacked?: boolean }) {
  return (
    <div className={stacked ? 'w-full' : 'flex w-full min-w-0 max-w-2xl flex-col lg:max-w-3xl'}>
      <motion.p
        initial={{ opacity: 0, x: stacked ? 0 : -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={
          stacked
            ? 'mb-4 text-[10px] font-heading font-semibold uppercase leading-snug tracking-[0.18em] text-primary-electric'
            : 'mb-5 text-[10px] font-heading font-semibold uppercase leading-snug tracking-[0.16em] text-[#eee7ff] sm:text-[11px] sm:tracking-[0.2em]'
        }
      >
        <span>
          {stacked ? (
            campaign.tagline
          ) : (
            <>
              {campaign.candidate.displayName}
              <span className="mt-1 block font-medium text-[#eee7ff]/85 sm:mt-0 sm:inline sm:before:content-['_']">
                {campaign.positionLabel}
              </span>
            </>
          )}
        </span>
      </motion.p>

      {stacked && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-3 text-[10px] font-heading font-semibold uppercase leading-snug tracking-[0.14em] text-[#eee7ff]/85"
        >
          {campaign.candidate.displayName}
          <span className="mt-1 block font-medium text-[#eee7ff]/70">{campaign.positionLabel}</span>
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={
          stacked
            ? 'font-display text-[clamp(1.75rem,8vw,2.25rem)] uppercase leading-[0.95] tracking-[0.02em] text-white'
            : 'font-display text-[clamp(1.65rem,7.5vw,3.25rem)] uppercase leading-[0.92] tracking-[0.02em] sm:text-5xl lg:text-[3.75rem] xl:text-7xl'
        }
      >
        <span className="text-white">PUTTING </span>
        <span
          className={
            stacked
              ? 'text-[#c4b5fd]'
              : 'text-[#c4b5fd] drop-shadow-[0_0_24px_rgba(124,58,237,0.35)]'
          }
        >
          BRAMPTON FIRST.{' '}
        </span>
        <span className="text-white">ALWAYS.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className={
          stacked
            ? 'hero-body mt-4 text-sm leading-relaxed text-[#eee7ff]/90'
            : 'hero-body mt-6 max-w-md text-sm font-normal leading-relaxed text-[#eee7ff]/90 sm:text-[15px] sm:leading-7'
        }
      >
        Born and raised in Brampton. An entrepreneur, coach, artist and community leader working to
        build a safer, stronger and more affordable city.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-30 btn-stack-mobile mt-6 sm:mt-8 sm:flex-row sm:flex-wrap"
      >
        <Button
          href="/plan"
          variant="primary"
          showArrow
          className={
            stacked
              ? 'w-full border-[#54239a] bg-[#54239a] sm:w-auto'
              : 'border-[#54239a] bg-[#54239a] shadow-[0_0_28px_rgba(124,58,237,0.45)] hover:border-[#7c3aed] hover:bg-[#7c3aed]'
          }
        >
          Explore the Plan
        </Button>
        <Button
          href="/about"
          variant="ghost"
          showArrow
          className={stacked ? 'w-full border-white/50 text-white sm:w-auto' : 'border-white/85 text-white'}
        >
          Meet Nate
        </Button>
      </motion.div>

      {!stacked && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-10 hidden font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 lg:block"
        >
          {campaign.tagline}
        </motion.p>
      )}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="bg-[#080d2b] lg:relative lg:min-h-[100dvh] lg:overflow-hidden" aria-label="Campaign hero">
      {/* Phone / tablet: header → image → text (stacked) */}
      <div className="lg:hidden">
        <div className="w-full overflow-hidden pt-[calc(env(safe-area-inset-top,0px)+3.75rem)]">
          <div className="aspect-[4/3] w-full sm:aspect-[5/4]">
            <OptimizedImage
              src={campaign.images.heroBackground}
              alt="Nathaniel Nate Peart"
              loading="eager"
              className="h-full w-full object-cover object-[62%_32%]"
            />
          </div>
        </div>
        <div className="px-4 pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] pt-6 sm:px-6 sm:pt-8">
          <HeroCopy stacked />
        </div>
      </div>

      {/* Desktop: full-bleed background + overlay copy */}
      <div className="relative hidden min-h-[100dvh] overflow-hidden lg:block">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="h-[110%] w-full">
            <OptimizedImage
              src={campaign.images.heroBackground}
              alt=""
              loading="eager"
              className="h-full w-full object-cover object-[64%_38%]"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#080d2b]/65 via-[#080d2b]/20 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#080d2b]/80 via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <SocialRail />

        <FlowerIcon
          className="pointer-events-none absolute bottom-20 left-8 z-10 h-24 w-24 text-[#7c3aed]/40"
          strokeWidth={1}
        />

        <div className="pointer-events-auto relative z-20 mx-auto flex min-h-[100dvh] max-w-7xl min-w-0 flex-col justify-center px-8 pb-24 pt-28">
          <HeroCopy />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pointer-events-none absolute bottom-10 left-8 z-10 flex flex-col items-center gap-2 text-white/50"
        >
          <Mouse className="h-5 w-5 animate-bounce" aria-hidden />
          <span className="font-heading text-[10px] uppercase tracking-[0.22em]">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
