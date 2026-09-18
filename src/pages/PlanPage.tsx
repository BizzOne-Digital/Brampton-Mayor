import { Building2, Coins, Leaf, Palette, Shield } from 'lucide-react'
import { PageMeta } from '@/components/shared/PageMeta'
import { PlanSection } from '@/components/plan/PlanSection'
import { Button } from '@/components/ui/Button'
import { campaign, getDonationHref } from '@config/campaign'

export function PlanPage() {
  return (
    <>
      <PageMeta
        title="The Plan for Brampton"
        description="Nate Peart’s plan for responsible government, local jobs, safer neighbourhoods and a better quality of life in Brampton."
        path="/plan"
      />
      <section className="bg-midnight pb-12 pt-[max(7rem,calc(env(safe-area-inset-top,0px)+5.5rem))] text-white sm:pb-16 lg:pt-40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-[clamp(1.75rem,7vw,2.75rem)] uppercase sm:text-5xl lg:text-6xl">
            The Plan for Brampton
          </h1>
          <p className="mt-6 text-lg text-lavender/85 leading-relaxed">
            Brampton&apos;s growth must produce real results for the people who live here. Nate&apos;s
            plan is focused on responsible government, stronger communities, local opportunity and a
            better quality of life.
          </p>
        </div>
      </section>

      <PlanSection
        number="01"
        title="Affordability & Responsible Spending"
        icon={Coins}
        imageSrc={campaign.images.neighbourhood}
        imageAlt="Brampton residential neighbourhood and skyline"
      >
        <p>
          Families are already feeling stretched. Nate will fight to keep the City portion of
          property taxes from increasing unnecessarily while demanding greater accountability for how
          taxpayer dollars are spent. Every dollar collected by the City should have a purpose, and
          residents deserve to see the results.
        </p>
      </PlanSection>

      <PlanSection
        number="02"
        title="Bring More Jobs to Brampton"
        icon={Building2}
        reverse
        imageSrc={campaign.images.businessCampus}
        imageAlt="Modern business campus in Brampton"
      >
        <p>
          Brampton should not simply be a city people leave every morning to go to work. Nate wants
          Brampton competing aggressively for major employers, corporate offices, technology
          companies, financial institutions, advanced manufacturing and other high-quality
          employment.
        </p>
        <p>
          The goal is simple: more Brampton residents working in Brampton. That means less time
          commuting and more time for family, community and quality of life.
        </p>
      </PlanSection>

      <PlanSection
        number="03"
        title="Build a Safer Brampton"
        icon={Shield}
        highlight="We already have vacant and underused spaces. Let's use what we already have wisely."
        imageSrc={campaign.images.fireStation}
        imageAlt="Brampton fire station and residential street at dusk"
      >
        <p>
          Every resident deserves to feel safe in their neighbourhood. Nate will advocate for strong
          partnerships with police, firefighters, first responders, community organizations and
          residents while addressing problem properties, illegal activity and neighbourhood safety
          concerns.
        </p>
        <p>
          Public safety must include prevention, enforcement and opportunities that steer young
          people toward positive futures.
        </p>
      </PlanSection>

      <PlanSection
        number="04"
        title="Support Local Business"
        icon={Building2}
        reverse
        imageSrc={campaign.images.mainStreet}
        imageAlt="Brampton main street with local businesses at sunset"
      >
        <p>
          Small businesses and entrepreneurs create jobs and give our communities character. Nate
          wants City Hall to make it easier to invest and do business in Brampton while actively
          attracting new investment.
        </p>
        <p>
          Brampton should help local businesses grow here rather than forcing successful entrepreneurs
          to look elsewhere for their next opportunity.
        </p>
      </PlanSection>

      <PlanSection
        number="05"
        title="Invest in Youth, Sports, Arts & Culture"
        icon={Palette}
        imageSrc={campaign.images.youthCentre}
        imageAlt="Youth sports and arts facility in Brampton"
      >
        <p>
          Our young people need places to go, things to do and opportunities to discover what they are
          capable of. Sports, music, arts, recreation and mentorship are not extras. They contribute
          to stronger communities.
        </p>
        <p>
          Nate wants Brampton to invest in facilities, programs, partnerships and opportunities that
          give young people a reason to dream and the tools to turn those dreams into something
          real.
        </p>
      </PlanSection>

      <PlanSection
        number="06"
        title="Stronger Infrastructure & Communities"
        icon={Leaf}
        reverse
        imageSrc={campaign.images.transit}
        imageAlt="Brampton transit, cycling infrastructure and civic skyline"
      >
        <p>
          Cleaner streets, healthier neighbourhoods and wiser use of public space strengthen the
          communities Brampton families call home — building on accountable spending and local
          opportunity across the platform.
        </p>
      </PlanSection>

      <section className="bg-primary-deep px-4 py-14 text-center text-white sm:py-20">
        <p className="font-display text-[clamp(1.35rem,5.5vw,2rem)] uppercase sm:text-4xl">
          Let&apos;s build a Brampton we&apos;re proud to call home.
        </p>
        <div className="btn-stack-mobile mx-auto mt-8 max-w-md justify-center sm:max-w-none sm:flex-row sm:flex-wrap">
          <Button href="/contact" variant="primary">Get Involved</Button>
          <Button href="/contact" variant="ghost">Contact the Campaign</Button>
          <Button href={getDonationHref()} variant="ghost">Donate</Button>
        </div>
      </section>
    </>
  )
}
