import { PageMeta } from '@/components/shared/PageMeta'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutNarrative } from '@/components/about/AboutNarrative'
import { JourneyTimeline } from '@/components/about/JourneyTimeline'
import { AboutClosing } from '@/components/about/AboutClosing'

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="Meet Nate"
        description="Born in Brampton. Raised in Brampton. Ready to serve Brampton — meet Nathaniel “Nate” Peart."
        path="/about"
      />
      <AboutHero />
      <AboutNarrative />
      <JourneyTimeline />
      <AboutClosing />
    </>
  )
}
