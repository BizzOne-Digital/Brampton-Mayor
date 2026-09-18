import { motion } from 'framer-motion'
import { campaign } from '@config/campaign'
import { aboutSections } from '@/content/aboutSections'
import { OptimizedImage } from '@/components/ui/OptimizedImage'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function AboutNarrative() {
  return (
    <>
      {aboutSections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'py-12 sm:py-16 lg:py-24',
            index % 2 === 0 ? 'bg-white' : 'bg-off-white',
          )}
        >
          {section.id === 'safety' && (
            <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-2xl px-4 sm:px-6 lg:px-8">
              <OptimizedImage
                src={campaign.images.fireStation}
                alt="Brampton neighbourhood and public safety"
                className="max-h-[360px] rounded-2xl"
              />
            </div>
          )}
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="font-display text-[clamp(1.25rem,5vw,1.75rem)] uppercase leading-tight text-midnight sm:text-3xl lg:text-4xl"
            >
              {section.title}
            </motion.h2>
            <div className="mt-3 h-1 w-16 bg-primary" aria-hidden />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {section.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className={cn(
                    p.endsWith('?') && 'font-medium text-dark',
                    (p.startsWith('Those are hours') ||
                      p.startsWith('Helping them') ||
                      p.startsWith('Coaching') ||
                      p.startsWith('Volunteering') ||
                      p.startsWith('Supporting') ||
                      p.startsWith('Exercising') ||
                      p.startsWith('Participating') ||
                      p.startsWith('Or simply')) &&
                      'border-l-2 border-primary/30 pl-4 text-dark',
                  )}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.section>
      ))}
    </>
  )
}
