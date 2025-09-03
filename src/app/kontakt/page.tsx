'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  // const [isMounted, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        alert(result.message)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        alert(result.error || 'Det oppstod en feil ved sending av melding')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Det oppstod en nettverksfeil. Vennligst prøv igjen.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kontakt oss
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Har du spørsmål eller trenger hjelp med ditt renoveringsprosjekt? 
              Vi er her for å hjelpe deg.
            </p>
            <div className="flex justify-center">
              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-center">
                Start ditt prosjekt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-12">
                Kontaktinformasjon
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      E-post
                    </h3>
                    <p className="text-lg text-gray-800">
                      info@oppussinghjelpen.no
                    </p>
                  </div>
                </div>


   

                <div className="flex items-start group">
                  <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      Åpningstider
                    </h3>
                    <p className="text-lg text-gray-800">
                      Mandag - Fredag: 08:00 - 17:00<br />
                      Lørdag: 09:00 - 15:00<br />
                      Søndag: Stengt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send oss en melding
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-3">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-green-700 transition-all duration-200 text-lg text-gray-900"
                    placeholder="Ditt navn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-3">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-green-700 transition-all duration-200 text-lg text-gray-900"
                    placeholder="din@email.no"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-gray-900 mb-3">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-green-700 transition-all duration-200 text-lg text-gray-900"
                    placeholder="+47 123 45 678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-3">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-green-700 transition-all duration-200 text-lg text-gray-900"
                    placeholder="Fortell oss om ditt prosjekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  Send melding
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ofte stilte spørsmål
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Svar på de vanligste spørsmålene
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-primary-green/30 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hvor lang tid tar det å få svar?
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Vi svarer vanligvis innen 24 timer på hverdager.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-primary-green/30 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kan jeg få rådgivning over telefon?
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Ja, vi tilbyr gratis rådgivning over telefon. Ring oss på +47 123 45 678.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-primary-green/30 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hva hvis jeg ikke er fornøyd med entreprenøren?
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Vi jobber kun med kvalitetssikrede entreprenører, men hvis du ikke er fornøyd, 
                hjelper vi deg med å finne en ny løsning.
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
