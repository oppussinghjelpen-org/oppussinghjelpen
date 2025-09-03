'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const faqs = [
  {
    question: 'Hvordan fungerer tjenesten?',
    answer: 'Du registrerer ditt prosjekt på nettsiden, og vi kobler deg til 3 kvalitetssikrede entreprenører som gir deg uforpliktende tilbud. Få informasjonen du trenger for å gjøre smarte valg i boligen din.'
  },
  {
    question: 'Er tilbudene uforpliktende?',
    answer: 'Ja, alle tilbud du mottar er helt uforpliktende. Du velger selv om du vil gå videre med noen av entreprenørene. Sammenlign produkter og tjenester som er relevante for deg som boligeier.'
  },
  {
    question: 'Hvor lang tid tar det å få tilbud?',
    answer: 'Du kan forvente å høre fra entreprenørene innen 1-3 virkedager etter at prosjektet ditt er registrert. Vi sikrer at du får svaret på det du lurer på for nettopp din bolig.'
  },
  {
    question: 'Hvilke typer prosjekter kan jeg registrere?',
    answer: 'Vi håndterer alle typer renoveringsprosjekter: tak & fasade, oppussing, renovering, garasje, baderom, loft & kjeller, nybygg og andre prosjekter. Finn de beste løsningene og produktene.'
  },
  {
    question: 'Hvor mye koster det å bruke tjenesten?',
    answer: 'Vår tjeneste er helt gratis for deg som kunde. Entreprenørene betaler en mindre avgift for å få tilgang til prosjekter. Spar tid og penger med smarte boligvalg.'
  },
  {
    question: 'Hvordan sikrer dere kvaliteten på entreprenørene?',
    answer: 'Alle entreprenører gjennomgår en grundig kvalitetskontroll før de får tilgang til vårt nettverk. Vi sjekker referanser, lisenser og forsikringer for å sikre beste praksis.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleFAQ = (index: number) => {
    if (!isMounted) return
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ofte stilte spørsmål
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            Få svaret på det du lurer på for nettopp din bolig
          </p>
          <div className="flex justify-center">
            <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-center">
              Kom i gang
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl hover:border-primary-green/30 transition-all duration-300 hover:shadow-xl">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors rounded-2xl"
              >
                <span className="text-xl font-bold text-gray-900">
                  {faq.question}
                </span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-green-700 font-semibold">
                    {isMounted && openIndex === index ? 'Skjul' : 'Vis'}
                  </span>
                  <svg
                    className={`w-6 h-6 text-green-700 transition-transform duration-300 ${
                      isMounted && openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {isMounted && openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-green/10 to-green-100/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Har du flere spørsmål?
            </h3>
            <p className="text-lg text-gray-800 mb-6">
              Kontakt oss for personlig rådgivning og få svaret på det du lurer på
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Kontakt oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
