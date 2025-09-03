import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, e-post og melding er påkrevd' },
        { status: 400 }
      )
    }



    // Send email using Web3Forms (free service that forwards to your email)
    try {
      const formData = new FormData()
      formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY') // You'll need to get this from web3forms.com
      formData.append('subject', `Ny henvendelse fra ${name} - Oppussing Hjelpen`)
      formData.append('from_name', name)
      formData.append('email', email)
      formData.append('phone', phone || 'Ikke oppgitt')
      formData.append('message', message)
      formData.append('to', 'rb@innovena.no')

      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const emailResult = await emailResponse.json()

      if (emailResponse.ok && emailResult.success) {
        console.log('Email sent successfully via Web3Forms')
        return NextResponse.json({ 
          success: true, 
          message: 'Takk for din henvendelse! Vi kommer tilbake til deg så snart som mulig.' 
        })
      } else {
        throw new Error('Web3Forms failed')
      }

    } catch (emailError) {
      console.error('Email service error:', emailError)
      
      // Fallback: Use Formspree (another free service)
      try {
        const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || 'Ikke oppgitt',
            message,
            _replyto: email,
            _subject: `Ny henvendelse fra ${name} - Oppussing Hjelpen`
          })
        })

        if (formspreeResponse.ok) {
          console.log('Email sent successfully via Formspree')
          return NextResponse.json({ 
            success: true, 
            message: 'Takk for din henvendelse! Vi kommer tilbake til deg så snart som mulig.' 
          })
        }
      } catch (formspreeError) {
        console.error('Formspree error:', formspreeError)
      }
      
      // Final fallback: Log for manual follow-up
      console.log('CONTACT FORM SUBMISSION (All email services failed - MANUAL FOLLOW-UP NEEDED):', {
        name,
        email,
        phone: phone || 'Ikke oppgitt',
        message,
        timestamp: new Date().toISOString(),
        targetEmail: 'rb@innovena.no'
      })

      return NextResponse.json({ 
        success: true, 
        message: 'Takk for din henvendelse! Vi har mottatt den og kommer tilbake til deg så snart som mulig.' 
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Det oppstod en feil ved sending av melding. Prøv igjen senere.' },
      { status: 500 }
    )
  }
}
