import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  Coins,
  Leaf,
  Palette,
  Shield,
  Users,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const priorities = [
  {
    title: 'Affordability & Responsible Spending',
    summary: 'Keep taxes accountable and every dollar purposeful.',
    icon: Coins,
    stat: '01',
    detail:
      'Fight unnecessary property tax increases and demand transparency in how City funds are spent.',
  },
  {
    title: 'More Jobs in Brampton',
    summary: 'Quality careers closer to home for Brampton families.',
    icon: Building2,
    stat: '02',
    detail:
      'Compete for major employers so residents can work where they live.',
  },
  {
    title: 'A Safer Brampton',
    summary: 'Safer neighbourhoods through partnership and prevention.',
    icon: Shield,
    stat: '03',
    detail:
      'Strong collaboration with first responders, residents and community organizations.',
  },
  {
    title: 'Support Local Business',
    summary: 'Help entrepreneurs grow here—not elsewhere.',
    icon: Users,
    stat: '04',
    detail: 'Make City Hall easier to work with for small businesses and investors.',
  },
  {
    title: 'Youth, Sports, Arts & Culture',
    summary: 'Opportunities that build stronger futures.',
    icon: Palette,
    stat: '05',
    detail: 'Invest in facilities, programs and mentorship for young people.',
  },
  {
    title: 'Stronger Infrastructure & Communities',
    summary: 'Cleaner streets and healthier neighbourhoods.',
    icon: Leaf,
    stat: '06',
    detail: 'Use vacant and underused spaces wisely for community benefit.',
  },
]

export function CampaignPriorities() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="bg-off-white section-y" id="priorities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Focusing on What Matters Most"
          subtitle="Six priorities grounded in responsible government and a better quality of life for Brampton residents."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {priorities.map((p, i) => {
            const Icon = p.icon
            const open = active === i
            return (
              <motion.article
                key={p.title}
                variants={fadeUp}
                custom={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border bg-white p-6 transition-shadow duration-300',
                  open
                    ? 'border-primary-electric/50 shadow-[0_0_40px_rgba(124,58,237,0.2)]'
                    : 'border-black/5 shadow-sm',
                )}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(84,35,154,0.08), rgba(124,58,237,0.05))',
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="font-display text-3xl text-primary/20">{p.stat}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-snug text-midnight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.summary}</p>
                  <motion.p
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    className="overflow-hidden text-sm text-dark"
                  >
                    <span className="block pt-3">{p.detail}</span>
                  </motion.p>
                  <Link
                    to="/plan"
                    className="mt-4 inline-flex text-xs font-heading font-semibold uppercase tracking-wider text-primary hover:text-primary-electric"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
