'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
}

interface FormData {
  description: string
  address: string
  city: string
  postalCode: string
  name: string
  email: string
  phone: string
  budget: string
  needsFinancing: boolean
}

export default function ProjectModal({ isOpen, onClose, category }: ProjectModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: '',
    address: '',
    city: '',
    postalCode: '',
    budget: '',
    needsFinancing: false
  })
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

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

  const handleSubmit = async () => {
    if (isSubmitting) return // Prevent double submission
    
    setIsSubmitting(true)
    try {
      // Map budget to numeric value for API
      const budgetMapping: { [key: string]: number } = {
        'under-50000': 40000,
        '50000-100000': 75000,
        '100000-250000': 175000,
        '250000-500000': 375000,
        '500000-1000000': 750000,
        'over-1000000': 1200000
      }

      // Parse name into first and last name
      const nameParts = formData.name.trim().split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''

      // Prepare lead data for API
      const leadData = {
        firstName: firstName,
        lastName: lastName,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        projectTitle: `${category} prosjekt`,
        projectDescription: formData.description.trim(),
        budget: budgetMapping[formData.budget] || 0,
        currency: 'NOK',
        priority: 3,
        referralUrl: window.location.href,
        customData: {
          category: category,
          address: formData.address.trim(),
          city: formData.city.trim(),
          postalCode: formData.postalCode.trim(),
          needsFinancing: formData.needsFinancing,
          source: 'oppussinghjelpen.no'
        }
      }

      // Submit lead to our API route (which then forwards to LeadPortalen)
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      })

      const result = await response.json()

      if (response.ok) {
        console.log('Lead submitted successfully:', result.leadId)
        
        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: '',
          address: '',
          city: '',
          postalCode: '',
          budget: '',
          needsFinancing: false
        })
        setStep(1)
        onClose()
        
        // Redirect to thank you page
        router.push('/takk')
      } else {
        console.error('API Error:', result.error)
        alert('Det oppstod en feil ved innsending. Vennligst prøv igjen.')
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Det oppstod en nettverksfeil. Vennligst sjekk internettforbindelsen din og prøv igjen.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: '',
      address: '',
      city: '',
      postalCode: '',
      budget: '',
      needsFinancing: false
    })
    onClose()
  }

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '')
    
    // Check if it starts with country code +47 and remove it
    const normalizedPhone = cleanPhone.startsWith('47') && cleanPhone.length > 8 
      ? cleanPhone.substring(2) 
      : cleanPhone
    
    // Must be exactly 8 digits
    if (normalizedPhone.length !== 8) {
      return false
    }
    
    // Must start with 9 or 4
    if (!normalizedPhone.startsWith('9') && !normalizedPhone.startsWith('4')) {
      return false
    }
    
    // Check if all digits are the same (not allowed)
    const firstDigit = normalizedPhone[0]
    if (normalizedPhone.split('').every(digit => digit === firstDigit)) {
      return false
    }
    
    return true
  }

  const validatePostalCode = (postalCode: string) => {
    // Norwegian postal codes are 4 digits
    const cleanCode = postalCode.replace(/\D/g, '')
    return cleanCode.length === 4
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length >= 2 && 
               validateEmail(formData.email.trim()) && 
               validatePhone(formData.phone.trim())
      case 2:
        return formData.description.trim().length >= 10
      case 3:
        return formData.address.trim().length >= 5 && 
               formData.city.trim().length >= 2 && 
               validatePostalCode(formData.postalCode.trim())
      case 4:
        return formData.budget.trim().length > 0
      default:
        return false
    }
  }

  if (!isMounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-slate-500/50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md md:max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
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
          
          {/* Progress bar */}
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

        {/* Content */}
        <div className="p-6">
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
                  placeholder="Fullt navn (minimum 2 tegn)"
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
                  placeholder="Telefonnummer (f.eks. 912 34 567 eller 412 34 567)"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                    formData.phone.length > 0 && !validatePhone(formData.phone) ? 'border-red-300' : 'border-gray-300'
                  }`}
                  required
                />
                {formData.phone.length > 0 && !validatePhone(formData.phone) && (
                  <p className="text-red-500 text-sm -mt-2">Telefonnummer må starte med 9 eller 4, ha 8 siffer, og kan ikke være like siffer</p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Beskriv prosjektet</h3>
              <p className="text-gray-600 mb-4">
                Fortell oss litt om hva du ønsker å gjøre. Jo mer detaljert, desto bedre tilbud kan vi gi deg. <span className="text-red-500">*</span>
              </p>
              <textarea
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                placeholder="Beskriv ditt prosjekt... (minimum 10 tegn)"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent resize-none text-gray-900"
                rows={4}
                required
                minLength={10}
              />
              {formData.description.length > 0 && formData.description.length < 10 && (
                <p className="text-red-500 text-sm mt-2">Minimum 10 tegn kreves</p>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Adresse</h3>
              <p className="text-gray-600 mb-4">
                Hvor skal arbeidet utføres? <span className="text-red-500">*</span>
              </p>
                             <div className="space-y-4">
                 <input
                   type="text"
                   value={formData.address}
                   onChange={(e) => updateFormData('address', e.target.value)}
                   placeholder="Gateadresse (f.eks. Storgata 15)"
                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                     formData.address.length > 0 && formData.address.length < 5 ? 'border-red-300' : 'border-gray-300'
                   }`}
                   required
                   minLength={5}
                 />
                 {formData.address.length > 0 && formData.address.length < 5 && (
                   <p className="text-red-500 text-sm -mt-2">Minimum 5 tegn kreves</p>
                 )}

                 <input
                   type="text"
                   value={formData.postalCode}
                   onChange={(e) => updateFormData('postalCode', e.target.value)}
                   placeholder="Postnummer (4 siffer)"
                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                     formData.postalCode.length > 0 && !validatePostalCode(formData.postalCode) ? 'border-red-300' : 'border-gray-300'
                   }`}
                   required
                   maxLength={4}
                 />
                 {formData.postalCode.length > 0 && !validatePostalCode(formData.postalCode) && (
                   <p className="text-red-500 text-sm -mt-2">4 siffer kreves</p>
                 )}
                 
                 <input
                   type="text"
                   value={formData.city}
                   onChange={(e) => updateFormData('city', e.target.value)}
                   placeholder="Sted (f.eks. Oslo)"
                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 ${
                     formData.city.length > 0 && formData.city.length < 2 ? 'border-red-300' : 'border-gray-300'
                   }`}
                   required
                   minLength={2}
                 />
                 {formData.city.length > 0 && formData.city.length < 2 && (
                   <p className="text-red-500 text-sm -mt-2">Minimum 2 tegn kreves</p>
                 )}
               </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Budsjett</h3>
              <p className="text-gray-600 mb-4">
                Hva er ditt omtrentlige budsjett for prosjektet? <span className="text-red-500">*</span>
              </p>
              <select
                value={formData.budget}
                onChange={(e) => updateFormData('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-700 focus:border-transparent text-gray-900 cursor-pointer mb-6"
                required
              >
                <option value="">Velg budsjettramme</option>
                <option value="under-50000">Under 50 000 kr</option>
                <option value="50000-100000">50 000 - 100 000 kr</option>
                <option value="100000-250000">100 000 - 250 000 kr</option>
                <option value="250000-500000">250 000 - 500 000 kr</option>
                <option value="500000-1000000">500 000 - 1 000 000 kr</option>
                <option value="over-1000000">Over 1 000 000 kr</option>
              </select>
              
              {/* Financing checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="financing"
                  checked={formData.needsFinancing}
                  onChange={(e) => updateFormData('needsFinancing', e.target.checked)}
                  className="w-5 h-5 text-green-700 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer"
                />
                <label htmlFor="financing" className="ml-3 text-gray-900 font-medium cursor-pointer">
                  Jeg ønsker tilbud på finansiering
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
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
