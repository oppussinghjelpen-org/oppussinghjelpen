import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alle Tjenester - Kategorier | Oppussing Hjelpen',
  description: 'Se alle våre renoveringstjenester og kategorier. Tak & fasade, baderom, oppussing, renovering, garasje, gulvsliping, maling og mer. Få gratis tilbud på alle tjenester.',
  keywords: 'kategorier, tjenester, renovering, oppussing, tak, fasade, baderom, garasje, nybygg, gulvsliping, maling',
  alternates: {
    canonical: 'https://oppussinghjelpen.no/kategorier'
  },
  openGraph: {
    title: 'Alle Tjenester - Kategorier | Oppussing Hjelpen',
    description: 'Se alle våre renoveringstjenester og kategorier. Få gratis tilbud på alle typer bygge- og renoveringsarbeider.',
    url: 'https://oppussinghjelpen.no/kategorier',
    siteName: 'Oppussing Hjelpen',
    locale: 'no_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const allServices = [
  // Main categories
  { name: 'Tak & Fasade', icon: '🏠', href: '/tjenester/tak-og-fasade' },
  { name: 'Oppussing', icon: '🎨', href: '/tjenester/oppussing' },
  { name: 'Renovering', icon: '🔨', href: '/tjenester/renovering' },
  { name: 'Garasje', icon: '🚗', href: '/tjenester/garasje' },
  { name: 'Baderom', icon: '🛁', href: '/tjenester/baderom' },
  { name: 'Loft & Kjeller', icon: '📦', href: '/tjenester/loft-og-kjeller' },
  { name: 'Nybygg', icon: '🏗️', href: '/tjenester/nybygg' },
  
  // Specific services with full templates
  { name: 'Gulvsliping', icon: '⚙️', href: '/tjenester/gulvsliping' },
  { name: 'Gulvlegging', icon: '🪵', href: '/tjenester/gulvlegging' },
  { name: 'Maling innendørs', icon: '🎨', href: '/tjenester/maling-innendors' },
  { name: 'Fasademaling', icon: '🖌️', href: '/tjenester/fasademaling' },
  { name: 'Sparkling og tapetsering', icon: '📄', href: '/tjenester/sparkling-tapetsering' },
  { name: 'Taktekking', icon: '🏠', href: '/tjenester/taktekking' },
  { name: 'Rørleggerarbeid', icon: '🔧', href: '/tjenester/rorleggerarbeid' },
  { name: 'Elektrikerarbeid', icon: '⚡', href: '/tjenester/elektrikerarbeid' },
  { name: 'Flislegging', icon: '🧱', href: '/tjenester/flislegging' },
  { name: 'Snekkertjenester', icon: '🪚', href: '/tjenester/snekkertjenester' },
  { name: 'Tømrerarbeid', icon: '🏗️', href: '/tjenester/tomrerarbeid' },
  { name: 'Etterisolering', icon: '🧯', href: '/tjenester/etterisolering' },
  { name: 'Skifte av vinduer', icon: '🪟', href: '/tjenester/skifte-av-vinduer' },
  { name: 'Skifte av dører', icon: '🚪', href: '/tjenester/skifte-av-dorer' },
  { name: 'Drenering', icon: '💧', href: '/tjenester/drenering' },
  { name: 'Bygging av terrasse', icon: '🌿', href: '/tjenester/bygging-av-terrasse' },
  { name: 'Lydisolering', icon: '🔇', href: '/tjenester/lydisolering' },
  { name: 'Gipstak og takplater', icon: '⬜', href: '/tjenester/gipstak-og-takplater' },
  
  // Additional services with full templates
  { name: 'Renovering av bad', icon: '🛁', href: '/tjenester/renovering-av-bad' },
  { name: 'Renovering av kjøkken', icon: '🍳', href: '/tjenester/renovering-av-kjokken' },
  { name: 'Montering av kjøkken', icon: '🔨', href: '/tjenester/montering-av-kjokken' },
  { name: 'Trapp og trapperehabilitering', icon: '🪜', href: '/tjenester/trapp-og-trapperehabilitering' },
  { name: 'Bytte av kledning', icon: '🏠', href: '/tjenester/bytte-av-kledning' },
  { name: 'Støping av gulv / grunnarbeid', icon: '🏗️', href: '/tjenester/stoping-av-gulv' },
  { name: 'Totalrenovering av bolig', icon: '🏡', href: '/tjenester/totalrenovering-av-bolig' },
  { name: 'Pusse opp leilighet', icon: '🏠', href: '/tjenester/pusse-opp-leilighet' },
  { name: 'Pusse opp enebolig', icon: '🏘️', href: '/tjenester/pusse-opp-enebolig' },
  { name: 'Oppussing av soverom', icon: '🛏️', href: '/tjenester/oppussing-av-soverom' },
  { name: 'Oppussing av stue', icon: '🛋️', href: '/tjenester/oppussing-av-stue' },
  { name: 'Loft- og kjellerinnredning', icon: '📦', href: '/tjenester/loft-og-kjellerinnredning' }
]

export default function Kategorier() {
  return (
    <div className="pt-20">
      {/* All Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Alle våre tjenester
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Finn akkurat den tjenesten du trenger og få gratis tilbud fra kvalitetssikrede entreprenører
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    {service.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-700/10 to-green-100/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ikke sikker på hvilken tjeneste du trenger?
            </h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Registrer ditt prosjekt og få personlig veiledning fra våre eksperter. Vi hjelper deg med å finne riktig løsning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-12 py-6 rounded-xl hover:bg-green-800 transition-all duration-200 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 cursor-pointer text-center">
                🚀 Få personlig veiledning
              </Link>
              <Link href="/kontakt" className="border-2 border-green-700 text-green-700 px-12 py-6 rounded-xl hover:bg-green-700 hover:text-white transition-all duration-200 font-bold text-xl cursor-pointer text-center">
                💬 Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
