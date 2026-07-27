'use client'

import { useState } from 'react'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Bli Partner - Oppussing Hjelpen | Motta Relevante Oppdrag',
  description: 'Bli partner med Oppussing Hjelpen og motta kvalifiserte oppdrag fra kunder som trenger dine tjenester. Registrer deg som kvalitetssikret entreprenør i dag.',
  keywords: 'partner, entreprenør, håndverker, oppdrag, samarbeid, kvalitetssikret, renovering, oppussing',
  alternates: {
    canonical: 'https://oppussinghjelpen.no/partner'
  },
  openGraph: {
    title: 'Bli Partner - Oppussing Hjelpen | Motta Relevante Oppdrag',
    description: 'Bli partner med Oppussing Hjelpen og motta kvalifiserte oppdrag fra kunder som trenger dine tjenester.',
    url: 'https://oppussinghjelpen.no/partner',
    siteName: 'Oppussing Hjelpen',
    locale: 'no_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationNumber: '',
    website: '',
    serviceAreas: '',
    services: [] as string[],
    otherService: '',
    yearsOfExperience: '',
    numberOfEmployees: '',
    insurance: '',
    certifications: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const serviceOptions = [
    'Baderom renovering',
    'Kjøkken renovering',
    'Gulvlegging',
    'Malertjenester',
    'Elektriker',
    'Rørlegger',
    'Snekker',
    'Flislegging',
    'Tak og fasade',
    'Isolering',
    'Vinduer og dører',
    'Hage og uteområder',
    'Nybygg',
    'Tilbygg',
    'Loft utbygging',
    'Kjeller utbygging',
    'Garasje bygging',
    'Annet'
  ]


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleServiceChange = (value: string) => {
    setFormData(prev => {
      const currentArray = prev.services
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value]
      return { ...prev, services: newArray }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/submit-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          organizationNumber: '',
          website: '',
          serviceAreas: '',
          services: [],
          otherService: '',
          yearsOfExperience: '',
          numberOfEmployees: '',
          insurance: '',
          certifications: '',
          additionalInfo: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Bli Partner med Oppussing Hjelpen
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Utvid din kundebase og motta kvalifiserte oppdrag fra kunder som trenger dine tjenester. 
              Bli en del av Norges ledende nettverk av kvalitetssikrede entreprenører.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-green-100">Partnere</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-green-100">Prosjekter</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-green-100">Fornøyde kunder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hvorfor bli partner med oss?
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Vi gjør det enkelt for deg å finne nye kunder og vokse din bedrift
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Kvalifiserte Leads
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Motta kun kvalifiserte henvendelser fra kunder som er klare til å starte prosjektet sitt.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Økt Omsetning
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Utvid kundebasen din og øk omsetningen med jevnlige oppdrag fra vår plattform.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                Kvalitetssikring
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Bli en del av vårt kvalitetssikrede nettverk og styrk ditt omdømme i markedet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Registrer din bedrift
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Fyll ut skjemaet under og motta relevante oppdrag fra kunder som trenger dine tjenester.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Takk for din registrering!</h3>
                  <p className="text-green-700">Vi vil kontakte deg innen 1-2 virkedager for å fullføre partnerskapet.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-red-800">Det oppstod en feil</h3>
                  <p className="text-red-700">Vennligst prøv igjen eller kontakt oss direkte.</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Company Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bedriftsinformasjon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Bedriftsnavn *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="organizationNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Organisasjonsnummer *
                  </label>
                  <input
                    type="text"
                    id="organizationNumber"
                    name="organizationNumber"
                    required
                    value={formData.organizationNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                    Kontaktperson *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Nettside
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Arbeidsområder</h3>
              <div>
                <label htmlFor="serviceAreas" className="block text-sm font-medium text-gray-700 mb-2">
                  Områder der dere utfører oppdrag *
                </label>
                <input
                  type="text"
                  id="serviceAreas"
                  name="serviceAreas"
                  required
                  value={formData.serviceAreas}
                  onChange={handleInputChange}
                  placeholder="F.eks. Oslo, Bergen, Trondheim eller hele Norge"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white"
                />
                <p className="text-sm text-gray-500 mt-2">Skriv inn stedene der dere kan utføre oppdrag, adskilt med komma</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tjenester</h3>
              <p className="text-gray-600 mb-4">Velg tjenestene dere tilbyr:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
              
              {/* Other Service Input */}
              {formData.services.includes('Annet') && (
                <div className="mt-4">
                  <label htmlFor="otherService" className="block text-sm font-medium text-gray-700 mb-2">
                    Beskriv andre tjenester *
                  </label>
                  <input
                    type="text"
                    id="otherService"
                    name="otherService"
                    required={formData.services.includes('Annet')}
                    value={formData.otherService}
                    onChange={handleInputChange}
                    placeholder="Beskriv hvilke andre tjenester dere tilbyr"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
              )}
            </div>

            {/* Company Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bedriftsdetaljer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    År med erfaring *
                  </label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    required
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  >
                    <option value="">Velg erfaring</option>
                    <option value="0-2">0-2 år</option>
                    <option value="3-5">3-5 år</option>
                    <option value="6-10">6-10 år</option>
                    <option value="11-15">11-15 år</option>
                    <option value="16+">16+ år</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="numberOfEmployees" className="block text-sm font-medium text-gray-700 mb-2">
                    Antall ansatte *
                  </label>
                  <select
                    id="numberOfEmployees"
                    name="numberOfEmployees"
                    required
                    value={formData.numberOfEmployees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  >
                    <option value="">Velg antall</option>
                    <option value="1">1 ansatt</option>
                    <option value="2-5">2-5 ansatte</option>
                    <option value="6-10">6-10 ansatte</option>
                    <option value="11-20">11-20 ansatte</option>
                    <option value="21+">21+ ansatte</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                    Forsikringsselskap *
                  </label>
                  <input
                    type="text"
                    id="insurance"
                    name="insurance"
                    required
                    value={formData.insurance}
                    onChange={handleInputChange}
                    placeholder="Navn på forsikringsselskap"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">
                    Sertifiseringer
                  </label>
                  <input
                    type="text"
                    id="certifications"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleInputChange}
                    placeholder="F.eks. Mesterbrev, ISO-sertifiseringer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tilleggsinformasjon</h3>
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Fortell om bedriften *
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  required
                  rows={6}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Fortell om bedriften, spesialområder, tidligere prosjekter, referanser, og hva som gjør dere unike..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white"
                />
              </div>
            </div>


            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-700 text-white px-12 py-4 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sender...' : 'Registrer som Partner'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Har du spørsmål?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Kontakt oss gjerne hvis du har spørsmål om partnerskapet eller registreringsprosessen
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:partner@oppussinghjelpen.no" className="bg-white text-green-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Send e-post
            </a>
            <a href="tel:+4712345678" className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-500 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Ring oss
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
