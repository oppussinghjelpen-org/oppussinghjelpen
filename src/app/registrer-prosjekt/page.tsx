import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registrer Prosjekt - Få 3 Gratis Tilbud | Oppussing Hjelpen',
  description: 'Registrer ditt renoveringsprosjekt og få 3 gratis tilbud fra kvalitetssikrede entreprenører. Enkelt, raskt og uforpliktende. Start i dag!',
  keywords: 'registrer prosjekt, gratis tilbud, entreprenør, renovering, oppussing, sammenlign priser',
  alternates: {
    canonical: 'https://oppussinghjelpen.no/registrer-prosjekt'
  },
  openGraph: {
    title: 'Registrer Prosjekt - Få 3 Gratis Tilbud | Oppussing Hjelpen',
    description: 'Registrer ditt renoveringsprosjekt og få 3 gratis tilbud fra kvalitetssikrede entreprenører. Enkelt, raskt og uforpliktende.',
    url: 'https://oppussinghjelpen.no/registrer-prosjekt',
    siteName: 'Oppussing Hjelpen',
    locale: 'no_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RegistrerProsjekt() {
  return (
    <>
      <Hero />
      <FAQ />
</>
  )
}
