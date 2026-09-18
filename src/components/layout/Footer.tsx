import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { campaign, getDonationHref } from '@config/campaign'
import { navLinks } from '@config/navigation'
import { Button } from '@/components/ui/Button'
import { FlowerIcon } from '@/components/shared/FlowerIcon'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { fadeUp } from '@/lib/animations'

const socialPlaceholders = [
  { label: 'Facebook', handle: campaign.socialHandles.facebook },
  { label: 'Instagram', handle: campaign.socialHandles.instagram },
  { label: 'TikTok', handle: campaign.socialHandles.tiktok },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative text-white pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      {/* CTA band */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-electric to-primary-deep grain">
        <FlowerIcon
          className="pointer-events-none absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 text-white/10"
          strokeWidth={0.8}
        />
        <FlowerIcon
          className="pointer-events-none absolute -left-12 bottom-0 h-32 w-32 text-white/10"
          strokeWidth={0.8}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-heading font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
              Vote {campaign.electionDate}
            </p>
            <h2 className="mt-5 font-display text-[clamp(1.5rem,6.5vw,2.5rem)] uppercase leading-[0.95] text-white sm:text-4xl lg:text-5xl">
              Together, let&apos;s build a Brampton we&apos;re proud to call home.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-lavender/90 sm:text-base">
              {campaign.tagline} — volunteer, donate, or reach out to bring Nate&apos;s vision to
              every neighbourhood.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={getDonationHref()} variant="white" className="w-full sm:w-auto">
              Donate Now
            </Button>
            <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
              Get Involved
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative overflow-hidden bg-midnight grain">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
          <OptimizedImage
            src={campaign.images.transit}
            alt=""
            className="h-full scale-110 object-cover"
            objectPosition="center"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/95 to-midnight/88"
          aria-hidden
        />
        <p
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-display text-[clamp(3rem,12vw,9rem)] uppercase leading-none text-white/[0.03] lg:block"
          aria-hidden
        >
          Brampton First
        </p>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={campaign.logoSrc}
                    alt="Brampton First campaign logo"
                    className="h-16 w-16 shrink-0 rounded-xl object-cover object-right object-bottom ring-1 ring-white/15"
                  />
                  <div>
                    <p className="font-heading text-xl font-bold uppercase tracking-wide">Nate Peart</p>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary-electric">
                      For Mayor of Brampton
                    </p>
                  </div>
                </div>
                <p className="mt-6 font-display text-2xl uppercase leading-tight text-lavender sm:text-3xl">
                  {campaign.headline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-lavender/75">
                  Born and raised in Brampton. A campaign focused on responsible leadership, safer
                  communities, local jobs and a better quality of life for residents.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/plan" variant="primary" showArrow className="text-[10px]">
                    The Plan
                  </Button>
                  <Button href="/about" variant="ghost" className="text-[10px]">
                    Meet Nate
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Links + contact */}
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FooterColumnTitle>Explore</FooterColumnTitle>
                <ul className="mt-5 space-y-1">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="group flex items-center justify-between py-2.5">
                        <span className="font-heading text-sm font-semibold uppercase tracking-wider text-lavender/85 transition group-hover:text-white">
                          {l.label}
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 text-primary-electric opacity-0 transition group-hover:opacity-100"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FooterColumnTitle>Contact</FooterColumnTitle>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a
                      href={`mailto:${campaign.email}`}
                      className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary-electric/40 hover:bg-white/[0.06]"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-electric" />
                      <span className="text-sm text-lavender/90 break-all">{campaign.email}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${campaign.phone.replace(/-/g, '')}`}
                      className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary-electric/40 hover:bg-white/[0.06]"
                    >
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-electric" />
                      <span className="text-sm text-lavender/90">{campaign.phoneDisplay}</span>
                    </a>
                  </li>
                  {campaign.website && (
                    <li className="flex gap-3 px-1 text-xs text-white/40">
                      <MapPin className="h-4 w-4 shrink-0 text-primary-electric/70" />
                      <span>{campaign.website.replace(/^https?:\/\//, '')}</span>
                    </li>
                  )}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FooterColumnTitle>Follow the campaign</FooterColumnTitle>
                <ul className="mt-5 space-y-3">
                  {socialPlaceholders.map((s) => (
                    <li key={s.label}>
                      <span
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-lavender/80"
                        title={`${s.label} URL — add in config/campaign.ts`}
                      >
                        <span className="font-heading text-xs font-semibold uppercase tracking-wider">
                          {s.label}
                        </span>
                        <span className="text-[11px] text-white/45">{s.handle}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                  <FlowerIcon className="h-10 w-10 text-primary-electric/80" strokeWidth={1.2} />
                  <p className="text-xs font-heading font-semibold uppercase tracking-[0.18em] text-lavender/70">
                    Brampton First
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Legal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-8"
          >
            <p className="text-xs leading-relaxed text-white/45">{campaign.disclaimer}</p>
            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                <Link to="/contact" className="text-lavender/70 transition hover:text-white">
                  Privacy Policy (placeholder)
                </Link>
                <Link to="/plan" className="text-lavender/70 transition hover:text-white">
                  The Plan for Brampton
                </Link>
              </div>
              <p className="text-xs text-white/40">
                © {year} {campaign.candidate.shortName} for Mayor · {campaign.position}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-heading font-semibold uppercase tracking-[0.22em] text-primary-electric">
        {children}
      </p>
      <div className="mt-3 h-px w-12 bg-gradient-to-r from-primary-electric to-transparent" />
    </div>
  )
}
