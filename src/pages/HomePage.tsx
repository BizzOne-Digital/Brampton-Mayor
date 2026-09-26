import { PageMeta } from '@/components/shared/PageMeta'
import { HeroSection } from '@/components/home/HeroSection'
import { CampaignStatement } from '@/components/home/CampaignStatement'
import { PriorityMarquee } from '@/components/home/PriorityMarquee'
import { CampaignPriorities } from '@/components/home/CampaignPriorities'
import { WhyRunning } from '@/components/home/WhyRunning'
import { VisionStatement } from '@/components/home/VisionStatement'
import { GetInvolvedSection } from '@/components/home/GetInvolvedSection'
import { DonationBanner } from '@/components/home/DonationBanner'
import { campaign } from '@config/campaign'

export function HomePage() {
  return (
    <>
      <PageMeta
        title={campaign.siteName}
        description="Meet Nathaniel “Nate” Peart and explore his vision for a safer, stronger and more affordable Brampton. Putting Brampton First. Always."
        path="/"
      />
      <HeroSection />
      <CampaignStatement />
      <PriorityMarquee />
      <CampaignPriorities />
      <WhyRunning />
      <VisionStatement />
      <GetInvolvedSection />
      <DonationBanner />
    </>
  )
}
