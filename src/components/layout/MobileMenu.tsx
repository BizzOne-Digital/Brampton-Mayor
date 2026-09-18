import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, Mail, Phone } from 'lucide-react'
import { navLinks } from '@config/navigation'
import { campaign, getDonationHref } from '@config/campaign'
import { Button } from '@/components/ui/Button'

type MobileMenuProps = { onClose: () => void }

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] bg-midnight grain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="flex h-full min-h-0 flex-col overflow-y-auto px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] pt-[calc(1rem+env(safe-area-inset-top,0px))] sm:px-6"
      >
        <div className="flex items-center justify-between">
          <img
            src={campaign.logoSrc}
            alt=""
            className="h-12 w-12 rounded-lg object-cover object-[88%_92%]"
          />
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-12 flex flex-1 flex-col gap-2" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Link
                to={link.href}
                onClick={onClose}
                className="block py-2.5 font-display text-[clamp(1.75rem,9vw,2.5rem)] uppercase tracking-wide text-white"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <a
            href={`mailto:${campaign.email}`}
            className="flex items-center gap-3 text-sm text-lavender/90"
          >
            <Mail className="h-4 w-4 text-primary-electric" />
            {campaign.email}
          </a>
          <a
            href={`tel:${campaign.phone.replace(/-/g, '')}`}
            className="flex items-center gap-3 text-sm text-lavender/90"
          >
            <Phone className="h-4 w-4 text-primary-electric" />
            {campaign.phoneDisplay}
          </a>
          <div className="flex gap-3 pt-2">
            <Button href={getDonationHref()} variant="ghost" className="flex-1">
              Donate
            </Button>
            <Button href="/contact" variant="primary" className="flex-1">
              Get Involved
            </Button>
          </div>
          <p className="text-center text-xs text-white/40">
            Social: {campaign.socialHandles.instagram} (placeholders)
          </p>
        </div>
      </div>
    </motion.div>
  )
}
