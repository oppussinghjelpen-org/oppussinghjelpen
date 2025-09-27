import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Map budget to numeric value
    const budgetMapping: { [key: string]: number } = {
      'under-50000': 40000,
      '50000-100000': 75000,
      '100000-250000': 175000,
      '250000-500000': 375000,
      '500000-1000000': 750000,
      'over-1000000': 1200000
    }

    // Note: firstName and lastName parsing available if needed in future

    // Prepare webhook payload
    const webhookData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.category,
      city: formData.city.trim(),
      projectDescription: formData.description.trim(),
      address: formData.address.trim(),
      postalCode: formData.postalCode.trim(),
      budget: budgetMapping[formData.budget] || formData.budget,
      needsFinancing: formData.needsFinancing,
      submittedAt: new Date().toISOString(),
      referralUrl: formData.referralUrl || '',
      projectTitle: `${formData.category} prosjekt${formData.city.trim() ? ` i ${formData.city.trim()}` : ''}`,
      fullAddress: `${formData.address.trim()}, ${formData.postalCode.trim()} ${formData.city.trim()}`,
      source: 'Oppussinghjelpen'
    }

    // Send to Make.com webhook
    const webhookUrl = process.env.WEBHOOK_URL
    
    if (!webhookUrl) {
      console.error('WEBHOOK_URL environment variable is not set')
      return NextResponse.json(
        { error: 'Webhook configuration error' },
        { status: 500 }
      )
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    })

    if (webhookResponse.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Project submitted successfully' 
      })
    } else {
      console.error('Webhook Error:', await webhookResponse.text())
      return NextResponse.json(
        { error: 'Failed to submit project' },
        { status: 500 }
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
