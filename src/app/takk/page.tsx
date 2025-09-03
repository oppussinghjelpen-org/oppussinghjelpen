import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Takk for Din Forespørsel - Oppussing Hjelpen',
  description: 'Takk for din prosjektforespørsel! Vi har mottatt din henvendelse og vil sende deg opptil 3 tilbud fra kvalitetssikrede entreprenører innen 1-3 virkedager.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function ThankYou() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Takk for din forespørsel!
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Vi har mottatt din prosjektbeskrivelse og vil sende deg opptil 3 tilbud fra kvalitetssikrede entreprenører innen 1-3 virkedager.
          </p>

          {/* What happens next */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hva skjer nå?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Vi behandler din forespørsel</h3>
                  <p className="text-gray-700">Vi matcher deg med relevante entreprenører i ditt område som spesialiserer seg på ditt type prosjekt.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Entreprenører kontakter deg</h3>
                  <p className="text-gray-700">Innen 1-3 virkedager vil du motta opptil 3 tilbud fra kvalitetssikrede entreprenører.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Du velger beste tilbud</h3>
                  <p className="text-gray-700">Sammenlign tilbudene og velg den entreprenøren som passer best for ditt prosjekt og budsjett.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/"
              className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Tilbake til forsiden
            </Link>
            <Link 
              href="/kategorier"
              className="bg-white text-green-700 border-2 border-green-700 px-8 py-4 rounded-xl hover:bg-green-700 hover:text-white transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Se alle tjenester
            </Link>
          </div>

          {/* Contact info */}
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Har du spørsmål?</h3>
            <p className="text-gray-700 mb-4">
              Hvis du har spørsmål eller trenger hjelp, er vi her for deg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/kontakt"
                className="text-green-700 hover:text-green-800 font-semibold transition-colors cursor-pointer"
              >
                Kontakt oss
              </Link>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a 
                href="mailto:hjelp@oppussinghjelpen.no"
                className="text-green-700 hover:text-green-800 font-semibold transition-colors cursor-pointer"
              >
                hjelp@oppussinghjelpen.no
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
