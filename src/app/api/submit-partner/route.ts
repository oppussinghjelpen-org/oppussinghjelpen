import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Validate required fields
    const requiredFields = [
      'companyName',
      'contactPerson', 
      'email',
      'phone',
      'organizationNumber',
      'serviceAreas',
      'yearsOfExperience',
      'numberOfEmployees',
      'insurance',
      'additionalInfo'
    ]

    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `Manglende påkrevd felt: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      )
    }

    // Validate organization number (Norwegian format: 9 digits)
    const orgNumberRegex = /^\d{9}$/
    if (!orgNumberRegex.test(formData.organizationNumber.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Ugyldig organisasjonsnummer. Må være 9 siffer.' },
        { status: 400 }
      )
    }

    // Validate that at least one service is selected
    if (!formData.services || formData.services.length === 0) {
      return NextResponse.json(
        { error: 'Velg minst én tjeneste' },
        { status: 400 }
      )
    }

    // Validate that if "Annet" is selected, otherService is provided
    if (formData.services.includes('Annet') && !formData.otherService) {
      return NextResponse.json(
        { error: 'Beskriv andre tjenester når "Annet" er valgt' },
        { status: 400 }
      )
    }

    // Format the data for email
    const emailContent = `
Ny partnerregistrering - Oppussing Hjelpen

BEDRIFTSINFORMASJON:
- Bedriftsnavn: ${formData.companyName}
- Organisasjonsnummer: ${formData.organizationNumber}
- Kontaktperson: ${formData.contactPerson}
- E-post: ${formData.email}
- Telefon: ${formData.phone}
- Nettside: ${formData.website || 'Ikke oppgitt'}

ARBEIDSOMRÅDER:
${formData.serviceAreas}

TJENESTER:
${formData.services.map((service: string) => `- ${service}`).join('\n')}
${formData.otherService ? `- Andre tjenester: ${formData.otherService}` : ''}

BEDRIFTSDETALJER:
- År med erfaring: ${formData.yearsOfExperience}
- Antall ansatte: ${formData.numberOfEmployees}
- Forsikringsselskap: ${formData.insurance}
- Sertifiseringer: ${formData.certifications || 'Ikke oppgitt'}

TILLEGGSINFORMASJON:
${formData.additionalInfo}

Registrert: ${new Date().toLocaleString('no-NO')}
    `.trim()

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to admin
    // 3. Send confirmation email to partner
    // 4. Integrate with CRM system
    
    // For now, we'll log the submission and return success
    console.log('Partner registration received:', {
      companyName: formData.companyName,
      email: formData.email,
      services: formData.services,
      serviceAreas: formData.serviceAreas,
      timestamp: new Date().toISOString()
    })

    // Here you would typically:
    // - Save to database (e.g., PostgreSQL, MongoDB)
    // - Send email using service like SendGrid, Mailgun, or Resend
    // - Add to CRM system
    // - Send Slack/Teams notification to team

    // Example of what the database save might look like:
    /*
    const partner = await db.partners.create({
      data: {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        organizationNumber: formData.organizationNumber,
        website: formData.website,
        address: formData.address,
        postalCode: formData.postalCode,
        city: formData.city,
        serviceAreas: formData.serviceAreas,
        services: formData.services,
        yearsOfExperience: formData.yearsOfExperience,
        numberOfEmployees: formData.numberOfEmployees,
        insurance: formData.insurance,
        certifications: formData.certifications,
        description: formData.description,
        portfolio: formData.portfolio,
        references: formData.references,
        marketingConsent: formData.marketingConsent,
        status: 'pending_review',
        createdAt: new Date()
      }
    })
    */

    // Example of email sending:
    /*
    await sendEmail({
      to: 'partner@oppussinghjelpen.no',
      subject: `Ny partnerregistrering: ${formData.companyName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    })

    await sendEmail({
      to: formData.email,
      subject: 'Takk for din partnerregistrering - Oppussing Hjelpen',
      text: `Hei ${formData.contactPerson},\n\nTakk for din interesse i å bli partner med Oppussing Hjelpen!\n\nVi har mottatt din registrering og vil kontakte deg innen 1-2 virkedager for å fullføre partnerskapet.\n\nMed vennlig hilsen,\nOppussing Hjelpen`,
      html: `<p>Hei ${formData.contactPerson},</p><p>Takk for din interesse i å bli partner med Oppussing Hjelpen!</p><p>Vi har mottatt din registrering og vil kontakte deg innen 1-2 virkedager for å fullføre partnerskapet.</p><p>Med vennlig hilsen,<br>Oppussing Hjelpen</p>`
    })
    */

    return NextResponse.json(
      { 
        message: 'Partnerregistrering mottatt',
        success: true,
        data: {
          companyName: formData.companyName,
          email: formData.email,
          submittedAt: new Date().toISOString()
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing partner registration:', error)
    
    return NextResponse.json(
      { 
        error: 'Det oppstod en feil ved behandling av registreringen. Vennligst prøv igjen.',
        success: false 
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
