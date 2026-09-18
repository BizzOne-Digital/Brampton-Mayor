export const campaign = {
  siteName: 'Brampton Mayor',
  candidate: {
    fullName: 'Nathaniel "Nate" Peart',
    shortName: 'Nate Peart',
    displayName: 'NATHANIEL "NATE" PEART',
  },
  position: 'Mayor of Brampton',
  positionLabel: 'FOR MAYOR OF BRAMPTON',
  headline: 'Putting Brampton First. Always.',
  headlineUpper: 'PUTTING BRAMPTON FIRST. ALWAYS.',
  tagline: 'OUR CITY. OUR PEOPLE. OUR FUTURE.',
  email: 'votenateformayor@gmail.com',
  phone: '819-578-2093',
  phoneDisplay: '819-578-2093',
  website: 'https://natepeartformayor.ca',
  canonicalBase: 'https://natepeartformayor.ca',
  electionDate: 'October 26, 2026',
  donationUrl: '' as string,
  officeAddress: '',
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    twitter: '',
  },
  socialHandles: {
    facebook: '@natepeartformayor',
    instagram: '@natepeartformayor',
    tiktok: '@natepeartformayor',
  },
  disclaimer:
    '[PLACEHOLDER: Insert authorized campaign disclaimer and election authority statement as required by law.]',
  privacyPolicyUrl: '#privacy',
  logoSrc: '/images/campaign-poster.png',
  images: {
    heroBackground: '/images/hero-background.jpg',
    heroPortrait: '/images/nate-peart-hero.jpg',
    cityHall: '/images/brampton-city-hall.jpg',
    campaignPoster: '/images/campaign-poster.png',
    about: '/images/nate-peart-about.jpg',
    community: '/images/brampton-neighbourhood.jpg',
    neighbourhood: '/images/brampton-neighbourhood.jpg',
    businessCampus: '/images/brampton-business-campus.jpg',
    fireStation: '/images/brampton-fire-station.jpg',
    mainStreet: '/images/brampton-main-street.jpg',
    youthCentre: '/images/brampton-youth-centre.jpg',
    transit: '/images/brampton-transit.jpg',
    skyline: '/images/brampton-city-hall.jpg',
  },
} as const

export function getDonationHref(): string {
  if (campaign.donationUrl) return campaign.donationUrl
  return '/contact?subject=Donate'
}
