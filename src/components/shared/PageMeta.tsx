import { useEffect } from 'react'
import { campaign } from '@config/campaign'

type PageMetaProps = {
  title: string
  description: string
  path?: string
}

export function PageMeta({ title, description, path = '' }: PageMetaProps) {
  const fullTitle =
    title === campaign.siteName ? campaign.siteName : `${title} | ${campaign.siteName}`
  const url = `${campaign.canonicalBase}${path}`

  useEffect(() => {
    document.title = fullTitle
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', description)
    setMeta('og:site_name', campaign.siteName, true)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:url', url, true)
    setMeta('og:image', `${campaign.canonicalBase}${campaign.images.campaignPoster}`, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
  }, [fullTitle, description, url])

  return null
}
