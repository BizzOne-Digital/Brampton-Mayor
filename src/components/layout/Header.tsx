import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { navLinks } from '@config/navigation'
import { campaign, getDonationHref } from '@config/campaign'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-[env(safe-area-inset-top,0px)]',
          transparent
            ? 'bg-transparent py-3 sm:py-5'
            : 'glass-light border-b border-black/5 py-2.5 shadow-sm sm:py-3',
        )}
      >
        <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={campaign.logoSrc}
              alt="Brampton First — Nate Peart for Mayor"
              className={cn(
                'h-10 w-10 shrink-0 rounded-md object-cover object-[88%_92%] sm:h-11 sm:w-11',
                transparent ? 'ring-1 ring-white/25' : 'ring-1 ring-black/10',
              )}
            />
            <div className="min-w-0 leading-tight">
              <span
                className={cn(
                  'block font-heading text-xs font-bold uppercase tracking-[0.08em] sm:text-sm sm:tracking-wide',
                  transparent ? 'text-white' : 'text-midnight',
                )}
              >
                Nate Peart
              </span>
              <span
                className={cn(
                  'hidden text-[10px] font-medium uppercase tracking-[0.12em] min-[380px]:block sm:text-[11px]',
                  transparent ? 'text-white/75' : 'text-muted',
                )}
              >
                For Mayor of Brampton
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative text-xs font-heading font-semibold uppercase tracking-[0.16em] transition-colors',
                    transparent
                      ? active
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                      : active
                        ? 'text-[#54239a]'
                        : 'text-midnight/80 hover:text-[#54239a]',
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7c3aed]"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={getDonationHref()}
              variant={transparent ? 'ghost' : 'outline'}
              className={cn(!transparent && 'border-midnight/20 text-midnight')}
            >
              Donate
            </Button>
            <Button href="/contact" variant="primary">Get Involved</Button>
          </div>

          <button
            type="button"
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border lg:hidden',
              transparent
                ? 'border-white/30 text-white'
                : 'border-midnight/15 text-midnight',
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
