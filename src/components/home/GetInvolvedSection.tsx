import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HandHeart, MessageCircle, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/animations'

const cards = [
  {
    title: 'Volunteer',
    text: "Join neighbours organizing across Brampton to share Nate's vision.",
    icon: Users,
    href: '/contact?subject=Volunteer',
  },
  {
    title: 'Support the Campaign',
    text: 'Help amplify a message focused on responsible leadership and local opportunity.',
    icon: HandHeart,
    href: '/contact?subject=Donate',
  },
  {
    title: 'Contact Nate',
    text: 'Questions, ideas or community concerns — the campaign wants to hear from you.',
    icon: MessageCircle,
    href: '/contact',
  },
]

export function GetInvolvedSection() {
  return (
    <section className="bg-off-white section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Take action" title="Get Involved" align="center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div key={c.title} variants={fadeUp} custom={i}>
                <Link
                  to={c.href}
                  className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold uppercase text-midnight">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{c.text}</p>
                  <span className="mt-6 text-xs font-heading font-semibold uppercase tracking-wider text-primary">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
