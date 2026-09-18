import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

const options = [
  { label: 'Volunteer with the campaign', subject: 'Volunteer' },
  { label: 'Host a community event', subject: 'Event Invitation' },
  { label: 'Request a lawn sign', subject: 'General Question' },
  { label: 'Share a community concern', subject: 'Community Concern' },
  { label: 'Invite Nate to an event', subject: 'Event Invitation' },
  { label: 'Support the campaign', subject: 'Donate' },
]

export function GetInvolvedOptions() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-3 sm:grid-cols-2"
    >
      {options.map((o, i) => (
        <motion.div key={o.label} variants={fadeUp} custom={i}>
          <Link
            to={`/contact?subject=${encodeURIComponent(o.subject)}`}
            className="block rounded-xl border border-black/8 bg-off-white px-4 py-4 text-sm font-medium text-midnight transition hover:border-primary hover:bg-lavender/40"
          >
            {o.label} →
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
