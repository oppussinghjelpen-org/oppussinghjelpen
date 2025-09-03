import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om Oss - Oppussing Hjelpen | Kvalitetssikrede Entreprenører',
  description: 'Lær mer om Oppussing Hjelpen. Vi kobler deg til kvalitetssikrede entreprenører for ditt renoveringsprosjekt. Over 1000 fornøyde kunder siden oppstarten.',
  keywords: 'om oss, oppussing hjelpen, entreprenører, renovering, kvalitetssikret, erfaring',
  alternates: {
    canonical: 'https://oppussinghjelpen.no/om-oss'
  },
  openGraph: {
    title: 'Om Oss - Oppussing Hjelpen | Kvalitetssikrede Entreprenører',
    description: 'Lær mer om Oppussing Hjelpen. Vi kobler deg til kvalitetssikrede entreprenører for ditt renoveringsprosjekt. Over 1000 fornøyde kunder siden oppstarten.',
    url: 'https://oppussinghjelpen.no/om-oss',
    siteName: 'Oppussing Hjelpen',
    images: [
      {
        url: 'https://oppussinghjelpen.no/om-oss.jpg',
        width: 1200,
        height: 630,
        alt: 'Om Oppussing Hjelpen',
      }
    ],
    locale: 'no_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function OmOss() {
  return (
    <div className="pt-20">


      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Vår historie
              </h2>
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p>
                  Oppussing Hjelpen ble grunnlagt med en enkel visjon: å gjøre det enkelt for huseiere 
                  å finne kvalitetssikrede entreprenører for sine renoveringsprosjekter.
                </p>
                <p>
                  Vi forstår at å finne riktig håndverker kan være en utfordring. Det er derfor vi 
                  har bygget et nettverk av kvalitetssikrede entreprenører som alle har dokumentert 
                  erfaring og nødvendige lisenser.
                </p>
                <p>
                  Siden oppstarten har vi hjulpet tusenvis av huseiere med å realisere sine 
                  renoveringsdrømmer ved å koble dem til de beste entreprenørene i Norge.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl relative bg-cover bg-center" style={{ backgroundImage: 'url(/om-oss.jpg)' }}>
                <div className="w-full h-full bg-gradient-to-br from-black/20 to-black/40 flex items-center justify-center relative">
                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-6 h-6 bg-green-700/30 rounded-full"></div>
                  <div className="absolute top-16 right-12 w-4 h-4 bg-green-400/40 rounded-full"></div>
                  <div className="absolute bottom-12 left-16 w-8 h-8 bg-green-700/20 rounded-full"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="w-32 h-32 bg-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-lg">Vårt team</p>
                    <p className="text-white mt-2">Dedikerte eksperter</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">5+</div>
                  <div className="text-sm text-gray-800">Års erfaring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Våre verdier
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Det som driver oss fremover og gjør oss til din pålitelige partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Kvalitet
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Vi jobber kun med kvalitetssikrede entreprenører som har dokumentert erfaring og nødvendige lisenser.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Enkelhet
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Vi gjør det enkelt å finne riktig håndverker for ditt prosjekt med vår brukervennlige plattform.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Transparens
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Vi er transparente i alt vi gjør og gir deg all informasjon du trenger for å ta gode beslutninger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Våre resultater
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Tall som snakker for seg selv - vi har hjulpet tusenvis av huseiere med sine prosjekter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-lg text-green-100">Prosjekter fullført</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-lg text-green-100">Kvalitetssikrede entreprenører</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-lg text-green-100">Fornøyde kunder</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-lg text-green-100">Års erfaring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-green/10 to-green-100/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Klar til å starte ditt prosjekt?
            </h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Registrer ditt prosjekt og få tilbud fra kvalitetssikrede entreprenører innen 1-3 virkedager
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-center">
                Start ditt prosjekt
              </Link>
              <button className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                Kontakt oss
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
