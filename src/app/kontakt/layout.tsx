import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt Oss - Oppussing Hjelpen | Få Hjelp Med Ditt Prosjekt',
  description: 'Kontakt Oppussing Hjelpen for hjelp med ditt renoveringsprosjekt. Vi svarer raskt og hjelper deg med å finne riktige entreprenører. Ring eller send melding.',
  keywords: 'kontakt, oppussing hjelpen, hjelp, spørsmål, entreprenør, renovering, prosjekt',
  alternates: {
    canonical: 'https://oppussinghjelpen.no/kontakt'
  },
  openGraph: {
    title: 'Kontakt Oss - Oppussing Hjelpen | Få Hjelp Med Ditt Prosjekt',
    description: 'Kontakt Oppussing Hjelpen for hjelp med ditt renoveringsprosjekt. Vi svarer raskt og hjelper deg med å finne riktige entreprenører.',
    url: 'https://oppussinghjelpen.no/kontakt',
    siteName: 'Oppussing Hjelpen',
    locale: 'no_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
