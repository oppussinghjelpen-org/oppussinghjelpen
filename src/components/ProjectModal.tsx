'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const CATEGORY_TO_API: Record<string, string> = {
  'Tak & Fasade': 'annet',
  'Oppussing': 'totaloppussing',
  'Renovering': 'totaloppussing',
  'Garasje': 'tilbygg',
  'Baderom': 'bad',
  'Loft & Kjeller': 'totaloppussing',
  'Nybygg': 'tilbygg',
  'Annet': 'annet',
}

const BUDSJETT_OPTIONS = [
  'Under 100 000',
  '100–250 000',
  '250–500 000',
  '500 000–1 mill',
  'Over 1 mill',
  'Usikker',
]

const TIDSHORISONT_OPTIONS = [
  'Så snart som mulig',
  'Innen 1–3 måneder',
  'Innen 3–6 måneder',
  'Innen 6–12 måneder',
  'Bare undersøker muligheter',
]

const KUNDETYPE_OPTIONS = [
  'Privat bolig',
  'Borettslag / sameie',
  'Næring / bedrift',
]

const TILBYGG_OPTIONS = [
  'Garasje',
  'Terrasse',
  'Utleieenhet',
  'Påbygg',
  'Annet',
]

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
}

interface FormData {
  name: string
  email: string
  phone: string
  description: string
  address: string
  postalCode: string
  budget: string
  tidshorisont: string
  kundetype: string
  kvm: string
  tilbyggType: string
}

export default function ProjectModal({ isOpen, onClose, category }: ProjectModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: '',
    address: '',
    postalCode: '',
    budget: '',
    tidshorisont: '',
    kundetype: '',
    kvm: '',
    tilbyggType: '',
  })
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const router = useRouter()

  const apiKategori = CATEGORY_TO_API[category] || 'annet'
  const showKvm = ['Baderom', 'Oppussing', 'Renovering', 'Loft & Kjeller'].includes(category)
  const showTilbyggType = ['Garasje', 'Nybygg'].includes(category)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const resetForm = () => ({
    name: '',
    email: '',
    phone: '',
    description: '',
    address: '',
    postalCode: '',
    budget: '',
    tidshorisont: '',
    kundetype: '',
    kvm: '',
    tilbyggType: '',
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const buildDetaljer = () => {
    const detaljer: Record<string, string> = {
      tjeneste: category,
    }

    if (formData.kundetype) detaljer.kundetype = formData.kundetype
    if (formData.kvm.trim()) detaljer.kvm = formData.kvm.trim()
    if (formData.tilbyggType) detaljer.tilbyggType = formData.tilbyggType

    return detaljer
  }

  const handleSubmit = async () => {
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const payload: Record<string, unknown> = {
        site: 'oppussinghjelpen',
        kategori: apiKategori,
        postnr: formData.postalCode.replace(/\D/g, ''),
        navn: formData.name.trim(),
        mobil: formData.phone.replace(/\D/g, '').replace(/^47/, ''),
        epost: formData.email.trim(),
        budsjett: formData.budget,
        tidshorisont: formData.tidshorisont,
        beskrivelse: formData.description.trim(),
        detaljer: buildDetaljer(),
      }

      if (formData.address.trim()) {
        payload.adresse = formData.address.trim()
      }

      const response = await fetch('https://bedrift.oppussinghjelpen.no/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (response.ok) {
        setFormData(resetForm())
        setStep(1)
        onClose()
        router.push('/takk')
      } else if (response.status === 409) {
        setSubmitError(result.error || 'Vi har allerede mottatt en henvendelse fra deg.')
      } else {
        setSubmitError(result.error || 'Det oppstod en feil ved innsending. Vennligst prøv igjen.')
      }
    } catch {
      setSubmitError('Det oppstod en nettverksfeil. Vennligst sjekk internettforbindelsen din og prøv igjen.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setFormData(resetForm())
    setSubmitError('')
    onClose()
  }

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '')
    const normalizedPhone = cleanPhone.startsWith('47') && cleanPhone.length > 8
      ? cleanPhone.substring(2)
      : cleanPhone

    return normalizedPhone.length === 8
  }

  const validatePostalCode = (postalCode: string) => {
    return postalCode.replace(/\D/g, '').length === 4
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length >= 2 &&
               validateEmail(formData.email.trim()) &&
               validatePhone(formData.phone.trim())
      case 2:
        return formData.description.trim().length >= 10 &&
               formData.tidshorisont.length > 0 &&
               formData.kundetype.length > 0 &&
               (!showTilbyggType || formData.tilbyggType.length > 0)
      case 3:
        return validatePostalCode(formData.postalCode.trim())
      case 4:
        return formData.budget.length > 0
      default:
        return false
    }
  }

  if (!isMounted) return null
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-slate-500/50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md md:max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Få tilbud på {category}
              </h2>
              <p className="text-gray-600 mt-1">Steg {step} av 4</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Steg {step} av 4</span>
              <span>{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-700 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="p-6">
          {submitError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {submitError}
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontaktinfo</h3>
              <p className="text-gray-600 mb-4">
                Hvordan kan entreprenørene kontakte deg? <span className="text-red-500">*</span>
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="Fullt navn"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                    formData.name.length > 0 && formData.name.length < 2 ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                  minLength={2}
                />
                {formData.name.length > 0 && formData.name.length < 2 && (
                  <p className="text-red-500 text-sm -mt-2">Minimum 2 tegn kreves</p>
                )}

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="E-post (f.eks. navn@eksempel.no)"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                    formData.email.length > 0 && !validateEmail(formData.email) ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {formData.email.length > 0 && !validateEmail(formData.email) && (
                  <p className="text-red-500 text-sm -mt-2">Ugyldig e-postadresse</p>
                )}

                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="Mobilnummer (8 siffer)"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                    formData.phone.length > 0 && !validatePhone(formData.phone) ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {formData.phone.length > 0 && !validatePhone(formData.phone) && (
                  <p className="text-red-500 text-sm -mt-2">Mobilnummer må ha 8 siffer</p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Om prosjektet</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beskriv prosjektet <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateFormData('description', e.target.value)}
                    placeholder="Fortell oss hva du ønsker å få gjort..."
                    className="w-full h-28 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent resize-none text-gray-900"
                    rows={4}
                    required
                    minLength={10}
                  />
                  {formData.description.length > 0 && formData.description.length < 10 && (
                    <p className="text-red-500 text-sm mt-1">Minimum 10 tegn kreves</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Når ønsker du å starte? <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.tidshorisont}
                    onChange={(e) => updateFormData('tidshorisont', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 cursor-pointer"
                    required
                  >
                    <option value="">Velg tidshorisont</option>
                    {TIDSHORISONT_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type bolig <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.kundetype}
                    onChange={(e) => updateFormData('kundetype', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 cursor-pointer"
                    required
                  >
                    <option value="">Velg type</option>
                    {KUNDETYPE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {showKvm && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ca. størrelse (kvm)
                    </label>
                    <input
                      type="text"
                      value={formData.kvm}
                      onChange={(e) => updateFormData('kvm', e.target.value)}
                      placeholder="F.eks. 6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900"
                    />
                  </div>
                )}

                {showTilbyggType && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type tilbygg <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.tilbyggType}
                      onChange={(e) => updateFormData('tilbyggType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 cursor-pointer"
                      required
                    >
                      <option value="">Velg type</option>
                      {TILBYGG_OPTIONS.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lokasjon</h3>
              <p className="text-gray-600 mb-4">
                Hvor skal arbeidet utføres?
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postnummer <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => updateFormData('postalCode', e.target.value)}
                    placeholder="0000"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                      formData.postalCode.length > 0 && !validatePostalCode(formData.postalCode) ? 'border-red-300' : 'border-gray-300'
                    }`}
                    required
                    maxLength={4}
                  />
                  {formData.postalCode.length > 0 && !validatePostalCode(formData.postalCode) && (
                    <p className="text-red-500 text-sm mt-1">Postnummer må ha 4 siffer</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gateadresse (valgfritt)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => updateFormData('address', e.target.value)}
                    placeholder="F.eks. Storgata 15"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900"
                  />
                  <p className="text-sm text-gray-500 mt-1">Adressen deles kun med entreprenører som kjøper oppdraget ditt</p>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Budsjett</h3>
              <p className="text-gray-600 mb-4">
                Hva er ditt omtrentlige budsjett for prosjektet? <span className="text-red-500">*</span>
              </p>
              {(apiKategori === 'bad' || apiKategori === 'totaloppussing') && (
                <p className="text-sm text-gray-500 mb-4">
                  Budsjettet hjelper oss å matche deg med riktige entreprenører.
                </p>
              )}
              <select
                value={formData.budget}
                onChange={(e) => updateFormData('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 cursor-pointer"
                required
              >
                <option value="">Velg budsjettramme</option>
                {BUDSJETT_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 font-semibold transition-colors cursor-pointer"
              >
                Tilbake
              </button>
            )}

            <div className="flex-1"></div>

            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer ${
                  isStepValid()
                    ? 'bg-green-700 text-white hover:bg-green-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed transform-none hover:shadow-lg'
                }`}
              >
                Neste
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                  isStepValid() && !isSubmitting
                    ? 'bg-green-700 text-white hover:bg-green-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed transform-none hover:shadow-lg'
                }`}
              >
                {isSubmitting && (
                  <svg
                    className={`animate-spin -ml-1 mr-2 h-5 w-5 ${isStepValid() ? 'text-white' : 'text-gray-500'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {isSubmitting ? 'Sender..' : 'Send'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
