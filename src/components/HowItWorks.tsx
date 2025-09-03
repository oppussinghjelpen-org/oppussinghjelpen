import Link from 'next/link'

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Så enkelt fungerer det
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Få informasjonen du trenger for å gjøre smarte valg i boligen din
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Registrer ditt prosjekt
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Fortell oss om ditt prosjekt og få svaret på det du lurer på for nettopp din bolig.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Bli kontaktet av eksperter
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Bli kontaktet av 3 kvalitetssikrede entreprenører som er spesialister på ditt type prosjekt.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Gjør smarte valg
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Motta tilbud etter befaring og velg den beste løsningen for deg. Alle tilbud er uforpliktende.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-center">
                Start ditt prosjekt nå
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl relative bg-cover bg-center" style={{ backgroundImage: 'url(/bad.webp)' }}>
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
                  <p className="text-white font-semibold text-lg">Smart boligvalg</p>
                  <p className="text-white mt-2">Sammenlign og velg best</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-0 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700">98%</div>
                <div className="text-sm text-gray-800">Fornøyde kunder</div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-0 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              ✓ Kvalitetssikret
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
