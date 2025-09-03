import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    // Extract address information and financing from customData
    const { customData, projectDescription, ...restData } = leadData
    const { address, city, postalCode, needsFinancing, ...restCustomData } = customData || {}

    // Build enhanced description with address and financing info
    let enhancedDescription = projectDescription || ''
    
    // Add address information
    if (address || city || postalCode) {
      enhancedDescription += '\n\nAdresse:'
      if (address) enhancedDescription += `\n- Gateadresse: ${address}`
      if (postalCode) enhancedDescription += `\n- Postnummer: ${postalCode}`
      if (city) enhancedDescription += `\n- Sted: ${city}`
    }
    
    // Add financing information
    if (needsFinancing) {
      enhancedDescription += '\n\nFinansiering: Kunden ønsker tilbud på finansiering'
    }

    // Prepare final payload for LeadPortalen
    const finalLeadData = {
      ...restData,
      projectDescription: enhancedDescription.trim(),
      customData: {
        ...restCustomData,
        originalAddress: address,
        originalCity: city,
        originalPostalCode: postalCode,
        originalNeedsFinancing: needsFinancing
      }
    }

    // Submit to LeadPortalen API
    const response = await fetch('https://leadportalen.no/api/leads/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'oppussing-hjelpen_clearlion14'
      },
      body: JSON.stringify(finalLeadData)
    })

    const result = await response.json()

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        leadId: result.leadId,
        message: 'Lead submitted successfully' 
      })
    } else {
      console.error('LeadPortalen API Error:', result)
      return NextResponse.json(
        { error: result.error || 'Failed to submit lead' },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
