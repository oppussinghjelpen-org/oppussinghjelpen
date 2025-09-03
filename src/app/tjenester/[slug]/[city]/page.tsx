import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// Function to convert Norwegian characters to URL-safe slugs
const convertToSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ø/g, 'o')
    .replace(/æ/g, 'ae')
    .replace(/å/g, 'a')
    .replace(/\s+/g, '-')
}

const cities = [
  'oslo', 'bergen', 'trondheim', 'stavanger', 'drammen', 'kristiansand', 'lillestrom', 
  'sandnes', 'fredrikstad', 'tromso', 'sandefjord', 'asker', 'sarpsborg', 'alesund', 
  'skien', 'moss', 'haugesund', 'tonsberg', 'nesttun', 'porsgrunn', 'bodo', 'molde', 
  'arendal', 'hamar', 'lillehammer', 'horten', 'ytrebygda', 'grimstad', 'kristiansund', 'larvik',
  'baerum', 'lorenskog', 'nordre-follo', 'raelingen', 'nittedal', 'sola', 'randaberg', 
  'ovre-eiker', 'kongsberg', 'ringerike', 'halden', 'gjovik', 'askoy', 'jessheim', 
  'mo-i-rana', 'harstad', 'alta', 'elverum', 'narvik', 'vennesla', 'drobak', 
  'stjordalshalsen', 'nesoddtangen', 'bryne', 'steinkjer', 'kongsvinger', 
  'kopervik', 'egersund', 'mandal', 'brumunddal', 'as', 'sogne', 'levanger', 'forde', 
  'mosjoen', 'arna', 'notodden', 'floro', 'kvaloysletta', 'verdalsoera', 
  'klofta', 'vestby', 'namsos', 'lillesand', 'holmestrand', 'akrehamn', 'hammerfest', 
  'kvernaland', 'rotnes', 'orsta', 'jorpeland-naerbo', 'malvik', 'melhus', 'volda', 
  'mysen', 'vossevangen', 'amot-geithus', 'hommersak', 'eidsvoll', 'knarvik', 'spydeberg', 
  'fauske', 'flekkefjord', 'ulsteinvik', 'stavern', 'sandnessjoen', 'sorumsand', 'hommelvik', 
  'sortland', 'lyngdal'
]

const cityDisplayNames: { [key: string]: string } = {
  'oslo': 'Oslo', 'bergen': 'Bergen', 'trondheim': 'Trondheim', 'stavanger': 'Stavanger',
  'drammen': 'Drammen', 'kristiansand': 'Kristiansand', 'lillestrom': 'Lillestrøm',
  'sandnes': 'Sandnes', 'fredrikstad': 'Fredrikstad', 'tromso': 'Tromsø',
  'sandefjord': 'Sandefjord', 'asker': 'Asker', 'sarpsborg': 'Sarpsborg', 'alesund': 'Ålesund',
  'skien': 'Skien', 'moss': 'Moss', 'haugesund': 'Haugesund', 'tonsberg': 'Tønsberg',
  'nesttun': 'Nesttun', 'porsgrunn': 'Porsgrunn', 'bodo': 'Bodø', 'molde': 'Molde',
  'arendal': 'Arendal', 'hamar': 'Hamar', 'lillehammer': 'Lillehammer', 'horten': 'Horten',
  'ytrebygda': 'Ytrebygda', 'grimstad': 'Grimstad', 'kristiansund': 'Kristiansund', 'larvik': 'Larvik',
  'baerum': 'Bærum', 'lorenskog': 'Lørenskog', 'nordre-follo': 'Nordre Follo', 'raelingen': 'Rælingen', 
  'nittedal': 'Nittedal', 'sola': 'Sola', 'randaberg': 'Randaberg', 'ovre-eiker': 'Øvre Eiker', 
  'kongsberg': 'Kongsberg', 'ringerike': 'Ringerike', 'halden': 'Halden', 'gjovik': 'Gjøvik', 
  'askoy': 'Askøy', 'jessheim': 'Jessheim', 'mo-i-rana': 'Mo i Rana', 'harstad': 'Harstad', 
  'alta': 'Alta', 'elverum': 'Elverum', 'narvik': 'Narvik', 'vennesla': 'Vennesla', 
  'drobak': 'Drøbak', 'stjordalshalsen': 'Stjørdalshalsen', 'nesoddtangen': 'Nesoddtangen', 
  'bryne': 'Bryne', 'steinkjer': 'Steinkjer', 'kongsvinger': 'Kongsvinger', 
  'kopervik': 'Kopervik', 'egersund': 'Egersund', 'mandal': 'Mandal', 'brumunddal': 'Brumunddal', 
  'as': 'Ås', 'sogne': 'Søgne', 'levanger': 'Levanger', 'forde': 'Førde', 'mosjoen': 'Mosjøen', 
  'arna': 'Arna', 'notodden': 'Notodden', 'floro': 'Florø', 
  'kvaloysletta': 'Kvaløysletta', 'verdalsoera': 'Verdalsøra', 'klofta': 'Kløfta', 'vestby': 'Vestby', 
  'namsos': 'Namsos', 'lillesand': 'Lillesand', 'holmestrand': 'Holmestrand', 'akrehamn': 'Åkrehamn', 
  'hammerfest': 'Hammerfest', 'kvernaland': 'Kvernaland', 'rotnes': 'Rotnes', 'orsta': 'Ørsta', 
  'jorpeland-naerbo': 'Jørpeland/Nærbø', 'malvik': 'Malvik', 'melhus': 'Melhus', 'volda': 'Volda', 
  'mysen': 'Mysen', 'vossevangen': 'Vossevangen', 'amot-geithus': 'Åmot/Geithus', 'hommersak': 'Hommersåk', 
  'eidsvoll': 'Eidsvoll', 'knarvik': 'Knarvik', 'spydeberg': 'Spydeberg', 'fauske': 'Fauske', 
  'flekkefjord': 'Flekkefjord', 'ulsteinvik': 'Ulsteinvik', 'stavern': 'Stavern', 'sandnessjoen': 'Sandnessjøen', 
  'sorumsand': 'Sørumsand', 'hommelvik': 'Hommelvik', 'sortland': 'Sortland', 'lyngdal': 'Lyngdal'
}

// Import the full category data from the main page for consistency  
import { categoryData } from '../page'

// Backup lightweight data (commented out)
/*const categoryData: { [key: string]: any } = {
  'tak-og-fasade': {
    title: 'Tak & Fasade',
    description: 'Profesjonelle tak- og fasadetjenester for ditt hjem',
    services: ['Takskifte og takreparasjon', 'Fasaderenovering og maling', 'Takrenner og nedløp', 'Isolering av tak og fasade'],
    content: { about: 'Tak og fasade er ditt hjems første forsvarslinje mot norsk vær og vind', process: 'Vi starter med en grundig befaring', why: 'Med over 500 fullførte prosjekter' },
    testimonials: [{ name: 'Lars Hansen', location: 'Oslo', text: 'Fantastisk jobb med vårt takskifte', rating: 5 }],
    faq: [{ question: 'Hvor lang tid tar et takskifte?', answer: 'Et typisk takskifte tar 3-7 dager' }],
    image: '/tak-fasade.jpg'
  },
  'oppussing': {
    title: 'Oppussing',
    description: 'Komplett oppussing av rom og hele boliger',
    services: ['Malingsarbeider og tapetsering', 'Gulvlegging og flislegging', 'Elektriske installasjoner', 'VVS-arbeider og rørlegging'],
    content: { about: 'Oppussing er en av de beste investeringene du kan gjøre i hjemmet ditt', process: 'Vi starter med en grundig kartlegging', why: 'Med over 1000 fullførte prosjekter' },
    testimonials: [{ name: 'Anne Kristiansen', location: 'Stavanger', text: 'Utrolig fornøyd med oppussingen', rating: 5 }],
    faq: [{ question: 'Hvor lang tid tar en oppussing?', answer: 'Avhenger av omfanget' }],
    image: '/oppussing.jpg'
  },
  'renovering': {
    title: 'Renovering',
    description: 'Omfattende renoveringsprosjekter for hele boliger',
    services: ['Totalrenovering av boliger', 'Strukturelle endringer og tilbygg', 'Nye rom og planløsninger', 'Modernisering av tekniske anlegg'],
    content: { about: 'Renovering er kunsten å forvandle det gamle til noe nytt og moderne', process: 'En vellykket renovering krever grundig planlegging', why: 'Med over 15 års erfaring' },
    testimonials: [{ name: 'Kari og Ola Nordahl', location: 'Kristiansand', text: 'Totalrenoveringen ble fantastisk', rating: 5 }],
    faq: [{ question: 'Hvor mye øker boligverdien?', answer: 'En godt planlagt renovering kan øke verdien 20-30%' }],
    image: '/renovering.jpg'
  },
  'baderom': {
    title: 'Baderom',
    description: 'Moderne baderomsløsninger og renovering',
    services: ['Komplette baderomspakker', 'Flislegging og membranarbeider', 'VVS og sanitærinstallasjoner', 'Elektriske arbeider og belysning'],
    content: { about: 'Badet er ofte det første rommet vi bruker om morgenen', process: 'Vi starter med en detaljert planlegging', why: 'Med spesialiserte fagfolk' },
    testimonials: [{ name: 'Silje Haugen', location: 'Sandnes', text: 'Vårt nye bad er helt fantastisk', rating: 5 }],
    faq: [{ question: 'Hvor lang tid tar en baderomrenovering?', answer: 'Et typisk baderom tar 2-3 uker' }],
    image: '/bad.webp'
  },
  'garasje': {
    title: 'Garasje',
    description: 'Bygging og renovering av garasjer',
    services: ['Nye garasjer og carporter', 'Garasjeporter og vinduer', 'Isolering og oppvarming', 'Elektriske installasjoner'],
    content: { about: 'En garasje er mye mer enn bare et sted å parkere bilen', process: 'Vi starter med å kartlegge dine behov', why: 'Med spesialisert kunnskap' },
    testimonials: [{ name: 'Per Andersen', location: 'Drammen', text: 'Fantastisk garasje med verksteddel', rating: 5 }],
    faq: [{ question: 'Trenger jeg byggetillatelse?', answer: 'Ja, garasjer krever som regel byggetillatelse' }],
    image: '/garasje.jpg'
  },
  'loft-og-kjeller': {
    title: 'Loft & Kjeller',
    description: 'Utbygging og renovering av loft og kjeller',
    services: ['Loftsutbygging og isolering', 'Kjellerpussing og fuktsperre', 'Nye rom og soverom', 'Trapper og adkomst'],
    content: { about: 'Loft og kjeller representerer enormt potensial for ekstra boareal', process: 'Vi starter med en grundig teknisk vurdering', why: 'Med erfaring fra hundrevis av utbygginger' },
    testimonials: [{ name: 'Morten Lie', location: 'Bærum', text: 'Loftsutbyggingen ga oss to nye soverom', rating: 5 }],
    faq: [{ question: 'Kan alle loft bygges ut?', answer: 'De fleste loft kan bygges ut' }],
    image: '/kjeller-loft.jpg'
  },
  'nybygg': {
    title: 'Nybygg',
    description: 'Oppføring av nye boliger og bygninger',
    services: ['Eneboliger og tomannsboliger', 'Hytter og fritidsboliger', 'Garasjer og uthus', 'Tilbygg og påbygg'],
    content: { about: 'Å bygge nytt er den ultimate muligheten til å skape akkurat det hjemmet du drømmer om', process: 'Fra første møte til ferdig hjem', why: 'Med over 200 oppførte boliger' },
    testimonials: [{ name: 'Familie Eriksen', location: 'Lillestrøm', text: 'Vårt nye hjem ble akkurat som vi drømte', rating: 5 }],
    faq: [{ question: 'Hvor lang tid tar det å bygge nytt?', answer: 'En typisk enebolig tar 8-12 måneder' }],
    image: '/nybygg.jpg'
  }
}

// Add all the other services with minimal data
Object.assign(categoryData, {
  'gulvsliping': { title: 'Gulvsliping', description: 'Profesjonell gulvsliping', services: ['Sliping av parkettgulv'], content: { about: 'Gulvsliping er en kostnadseffektiv måte å forny gulv' }, testimonials: [{ name: 'Kari Andersen', location: 'Oslo', text: 'Gulvet så helt nytt ut', rating: 5 }], faq: [{ question: 'Hvor lang tid tar gulvsliping?', answer: '1-3 dager' }], image: '/gulv.jpg' },
  'gulvlegging': { title: 'Gulvlegging', description: 'Profesjonell gulvlegging', services: ['Parkettlegging og installasjon'], content: { about: 'Nytt gulv kan forvandle et rom fullstendig' }, testimonials: [{ name: 'Linda Eriksen', location: 'Stavanger', text: 'Fantastisk resultat', rating: 5 }], faq: [{ question: 'Hvilken gulvtype anbefaler dere?', answer: 'Avhenger av rom og bruk' }], image: '/gulv.jpg' },
  'maling-innendors': { title: 'Maling innendørs', description: 'Profesjonell innendørs maling', services: ['Vegg- og takmaling'], content: { about: 'Innendørs maling er en av de enkleste måtene å forvandle hjemmet' }, testimonials: [{ name: 'Inger Solberg', location: 'Oslo', text: 'Fantastisk malerarbeid', rating: 5 }], faq: [{ question: 'Hvor lang tid tar maling?', answer: '1-2 dager per rom' }], image: '/oppussing.jpg' },
  'fasademaling': { title: 'Fasademaling', description: 'Profesjonell fasademaling', services: ['Fasademaling og renovering'], content: { about: 'Fasademaling handler om mer enn bare utseende' }, testimonials: [{ name: 'Hans Eriksen', location: 'Stavanger', text: 'Huset ser fantastisk ut', rating: 5 }], faq: [{ question: 'Når bør fasaden males?', answer: 'Mai-september for optimale forhold' }], image: '/tak-fasade.jpg' },
  'sparkling-tapetsering': { title: 'Sparkling og tapetsering', description: 'Profesjonell sparkling og tapetsering', services: ['Spartling av vegger og tak'], content: { about: 'Sparkling og tapetsering krever presisjon' }, testimonials: [{ name: 'Marit Larsen', location: 'Oslo', text: 'Fantastisk sparkling', rating: 5 }], faq: [{ question: 'Hvor lang tid tar sparkling?', answer: '2-3 dager inkludert tørketid' }], image: '/oppussing.jpg' },
  'taktekking': { title: 'Taktekking', description: 'Profesjonell taktekking', services: ['Taktekking med tegl og betong'], content: { about: 'Et godt tak er avgjørende for hjemmets beskyttelse' }, testimonials: [{ name: 'Bjørn Haugen', location: 'Bergen', text: 'Utmerket taktekking', rating: 5 }], faq: [{ question: 'Hvor lang tid tar taktekking?', answer: '3-7 dager' }], image: '/tak-fasade.jpg' },
  'rorleggerarbeid': { title: 'Rørleggerarbeid', description: 'Profesjonelle VVS og rørleggerarbeider', services: ['Installasjon av rør og vannledninger'], content: { about: 'VVS-anlegget er hjemmets skjulte nervesystem' }, testimonials: [{ name: 'Knut Svendsen', location: 'Oslo', text: 'Rask og profesjonell utbedring', rating: 5 }], faq: [{ question: 'Trenger jeg godkjenning?', answer: 'Ja, alle VVS-arbeider må utføres av godkjent rørlegger' }], image: '/baderom.jpg' },
  'elektrikerarbeid': { title: 'Elektrikerarbeid', description: 'Profesjonelle elektriske installasjoner', services: ['Elektriske installasjoner og oppgraderinger'], content: { about: 'Elektriske installasjoner krever ekspertise' }, testimonials: [{ name: 'Arne Pedersen', location: 'Bergen', text: 'Profesjonell installasjon', rating: 5 }], faq: [{ question: 'Trenger jeg autorisert elektriker?', answer: 'Ja, alle elektriske arbeider må utføres av autorisert elektriker' }], image: '/oppussing.jpg' },
  'flislegging': { title: 'Flislegging', description: 'Profesjonell flislegging', services: ['Flislegging på gulv og vegger'], content: { about: 'Flislegging krever presisjon og kunnskap' }, testimonials: [{ name: 'Marta Olsen', location: 'Trondheim', text: 'Fantastisk flislegging', rating: 5 }], faq: [{ question: 'Hvor lang tid tar flislegging?', answer: '3-5 dager' }], image: '/baderom.jpg' },
  'snekkertjenester': { title: 'Snekkertjenester', description: 'Profesjonelle snekkerarbeider', services: ['Innredning og skreddersydde løsninger'], content: { about: 'Snekkerarbeider handler om å skape funksjonelle løsninger' }, testimonials: [{ name: 'Kari Johnsen', location: 'Oslo', text: 'Fantastisk snekkerarbeid', rating: 5 }], faq: [{ question: 'Kan dere lage skreddersydde løsninger?', answer: 'Ja, det er vår spesialitet' }], image: '/oppussing.jpg' }
})

}
*/

// Optimized city data for performance
const getCityInfo = (city: string) => {
  const majorCities: { [key: string]: string } = {
    'oslo': 'Norges hovedstad med over 700 000 innbyggere og høy etterspørsel etter kvalitetsarbeider.',
    'bergen': 'Vestlandets største by med over 280 000 innbyggere og unike klimautfordringer.',
    'trondheim': 'Teknologiby med over 200 000 innbyggere og fokus på moderne løsninger.',
    'stavanger': 'Oljehovedstaden med over 140 000 innbyggere og høye kvalitetsstandarder.',
    'drammen': 'Voksende by med over 100 000 innbyggere og god tilgjengelighet til Oslo.',
    'kristiansand': 'Sørlandets hovedstad med over 115 000 innbyggere og mildt klima.',
    'sandnes': 'Rogalands nest største by med over 80 000 innbyggere i oljeregionen.',
    'fredrikstad': 'Østfolds største by med over 80 000 innbyggere og rik historie.',
    'tromso': 'Nord-Norges sentrum med over 75 000 innbyggere og arktiske forhold.'
  }
  
  return majorCities[city] || `En viktig by i regionen med godt utbygd infrastruktur og kvalifiserte fagfolk.`
}

interface PageProps {
  params: Promise<{
    slug: string
    city: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, city } = await params
  const category = categoryData[slug]
  const cityName = cityDisplayNames[city]

  if (!category || !cityName) {
    return {
      title: 'Side ikke funnet | Oppussing Hjelpen',
      description: 'Siden du leter etter finnes ikke.'
    }
  }

  return {
    title: `Pris på ${category.title.toLowerCase()} i ${cityName} - Få 3 tilbud`,
    description: `Profesjonell ${category.title.toLowerCase()} i ${cityName}. ${category.description || 'Få gratis tilbud fra kvalitetssikrede entreprenører'}. Sammenlign priser og velg beste tilbud i ${cityName} området.`,
    keywords: `${category.title.toLowerCase()}, ${cityName}, entreprenør ${cityName}, håndverker ${cityName}, tilbud ${cityName}, ${category.title.toLowerCase()} ${cityName}`,
    alternates: {
      canonical: `https://oppussinghjelpen.no/tjenester/${slug}/${city}`
    },
    openGraph: {
      title: `Pris på ${category.title.toLowerCase()} i ${cityName} - Få 3 tilbud`,
      description: `Profesjonell ${category.title.toLowerCase()} i ${cityName}. ${category.description || 'Få gratis tilbud fra kvalitetssikrede entreprenører'}. Sammenlign priser i ${cityName} området.`,
      url: `https://oppussinghjelpen.no/tjenester/${slug}/${city}`,
      siteName: 'Oppussing Hjelpen',
      images: [
        {
          url: `https://oppussinghjelpen.no${category.image}`,
          width: 1200,
          height: 630,
          alt: `${category.title} i ${cityName}`,
        }
      ],
      locale: 'no_NO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Pris på ${category.title.toLowerCase()} i ${cityName} - Få 3 tilbud`,
      description: `Profesjonell ${category.title.toLowerCase()} i ${cityName}. ${category.description || 'Få gratis tilbud fra kvalitetssikrede entreprenører'}. Sammenlign priser i ${cityName} området.`,
      images: [`https://oppussinghjelpen.no${category.image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function CityServicePage({ params }: PageProps) {
  const { slug, city } = await params
  const category = categoryData[slug]
  const cityName = cityDisplayNames[city]

  if (!category || !cityName) {
    notFound()
  }

  return (
    <div className="pt-20 md:pt-20">
      {/* Services Section */}
      <div className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Services List */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Pris på {category.title.toLowerCase()} i {cityName}
              </h1>
              
              {/* Step List */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold text-sm">1</span>
                  </div>
                  <span className="font-semibold text-gray-900">Registrer ditt prosjekt</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold text-sm">2</span>
                  </div>
                  <span className="font-semibold text-gray-900">Motta 3 tilbud</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold text-sm">3</span>
                  </div>
                  <span className="font-semibold text-gray-900">Sammenlign og velg</span>
                </div>
              </div>

              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-10 py-5 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer inline-block mb-8">
                Få 3 tilbud nå i {cityName}
              </Link>
              

            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src={category.image}
                  alt={`${category.title} i ${cityName}`}
                  fill
                  quality={50}
                  className="object-cover"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Slik fungerer det i {cityName}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              En enkel 4-trinns prosess som sikrer at du får det beste resultatet i {cityName} området
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { step: '1', title: 'Registrer prosjekt', desc: `Beskriv ditt ${category.title.toLowerCase()} prosjekt i ${cityName}` },
              { step: '2', title: 'Få 3 tilbud', desc: `Lokale entreprenører i ${cityName} kontakter deg` },
              { step: '3', title: 'Sammenlign', desc: 'Velg det tilbudet som passer deg best' },
              { step: '4', title: 'Få jobben gjort', desc: `Profesjonell utførelse i ${cityName} med garanti` }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-10 py-5 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer inline-block">
              Start prosessen i {cityName}
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alt du trenger å vite om {category.title.toLowerCase()} i {cityName}</h2>
          
          <div className="bg-green-50 border-l-4 border-green-700 p-6 mb-8">
            <p className="text-lg text-gray-800 font-semibold">
              💡 <strong>Lokalt fokus i {cityName}:</strong> {category.content?.process || 'Vi tilpasser alle løsninger til lokale forhold.'} 
              Våre entreprenører i {cityName} kjenner lokale forskrifter og værforhold.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Hvorfor velge lokale entreprenører i {cityName}?</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {category.content?.why || 'Våre erfarne entreprenører leverer kvalitetsarbeid med garanti.'} I {cityName} har vi spesielt fokus på lokale forhold og kan tilby rask respons og oppfølging.
          </p>

          <div className="bg-gradient-to-r from-green-700/10 to-green-100/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏆 Garantier og trygghet i {cityName}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Høy kvalitet</h4>
                  <p className="text-gray-700">På alle arbeider og materialer i {cityName}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Lokale fagfolk</h4>
                  <p className="text-gray-700">Entreprenører bosatt i {cityName} området</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Rask respons</h4>
                  <p className="text-gray-700">Kort reisevei gir raskere oppstart i {cityName}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Lokalkunnskap</h4>
                  <p className="text-gray-700">Kjenner {cityName} kommune og forskrifter</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-12 py-6 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 cursor-pointer inline-block">
              Få garantert kvalitet i {cityName}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Våre {category.title.toLowerCase()} tjenester i {cityName}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.services.map((service: string, index: number) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-full border border-gray-200 hover:border-green-700 transition-colors group">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hva sier våre kunder i {cityName}?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Fornøyde kunder i {cityName} og omegn som har fått sitt drømmeprosjekt realisert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {category.testimonials?.map((testimonial: { name: string; location: string; text: string; rating: number }, index: number) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.name.split(' ')[0][0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-10 py-5 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer inline-block">
              Bli vår neste fornøyde kunde i {cityName}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ofte stilte spørsmål om {category.title.toLowerCase()} i {cityName}
            </h2>
            <p className="text-xl text-gray-700">
              Svar på de vanligste spørsmålene om {category.title.toLowerCase()} i {cityName} området
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {category.faq?.map((item: { question: string; answer: string }, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 text-white text-sm font-bold">
                    Q
                  </span>
                  {item.question}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed ml-12">
                  {item.answer} {index === 0 && `I ${cityName} har vi spesielt fokus på lokale forhold og kan gi deg rask respons.`}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Har du flere spørsmål om {category.title.toLowerCase()} i {cityName}? Vi svarer gjerne!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-center">
                Få tilbud i {cityName}
              </Link>
              <Link href="/kontakt" className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-full hover:bg-green-700 hover:text-white transition-all duration-200 font-bold text-lg cursor-pointer text-center">
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Information Section - Optimized for performance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {cityName}
          </h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            {getCityInfo(city)} Våre lokale entreprenører har omfattende erfaring med {category.title.toLowerCase()} 
            &nbsp;i {cityName} og leverer kvalitetsarbeid tilpasset lokale forhold. Vi forstår det lokale markedet og kan 
            gi deg konkurransedyktige priser med rask oppstart.
          </p>
        </div>
      </section>

      {/* Other Cities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {category.title} tjenester i andre byer
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Vi tilbyr {category.title.toLowerCase()} i hele Norge. Finn din by:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen', 'Kristiansand', 
              'Lillestrøm', 'Sandnes', 'Fredrikstad', 'Tromsø', 'Sandefjord', 'Asker',
              'Sarpsborg', 'Ålesund', 'Skien', 'Moss', 'Haugesund', 'Tønsberg',
              'Nesttun', 'Porsgrunn', 'Bodø', 'Molde', 'Arendal', 'Hamar',
              'Lillehammer', 'Horten', 'Ytrebygda', 'Grimstad', 'Kristiansund', 'Larvik',
              'Bærum', 'Lørenskog', 'Nordre Follo', 'Rælingen', 'Nittedal', 'Sola', 'Randaberg',
              'Øvre Eiker', 'Kongsberg', 'Ringerike', 'Halden', 'Gjøvik', 'Askøy', 'Jessheim',
              'Mo i Rana', 'Harstad', 'Alta', 'Elverum', 'Narvik', 'Vennesla', 'Drøbak',
              'Stjørdalshalsen', 'Nesoddtangen', 'Bryne', 'Steinkjer', 'Kongsvinger',
              'Kopervik', 'Egersund', 'Mandal', 'Brumunddal', 'Ås', 'Søgne', 'Levanger', 'Førde',
              'Mosjøen', 'Arna', 'Notodden', 'Florø', 'Kvaløysletta', 'Verdalsøra',
              'Kløfta', 'Vestby', 'Namsos', 'Lillesand', 'Holmestrand', 'Åkrehamn', 'Hammerfest',
              'Kvernaland', 'Rotnes', 'Ørsta', 'Jørpeland/Nærbø', 'Malvik', 'Melhus', 'Volda',
              'Mysen', 'Vossevangen', 'Åmot/Geithus', 'Hommersåk', 'Eidsvoll', 'Knarvik', 'Spydeberg',
              'Fauske', 'Flekkefjord', 'Ulsteinvik', 'Stavern', 'Sandnessjøen', 'Sørumsand', 'Hommelvik',
              'Sortland', 'Lyngdal'
            ].filter(c => c !== cityName).map((otherCity) => {
              const otherCitySlug = convertToSlug(otherCity)
              return (
                <Link
                  key={otherCity}
                  href={`/tjenester/${slug}/${otherCitySlug}`}
                  className="bg-white border border-gray-200 rounded-lg p-3 hover:border-green-700 transition-colors cursor-pointer"
                >
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      i {otherCity}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Finner du ikke din by? Vi dekker hele Norge!
            </p>
            <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-10 py-5 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer inline-block">
              Få tilbud uansett hvor du bor
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klar til å starte ditt {category.title.toLowerCase()} prosjekt i {cityName}?
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Få 3 gratis tilbud fra kvalitetssikrede entreprenører i {cityName} området. 
            Start reisen mot ditt drømmeprosjekt i dag!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/registrer-prosjekt" className="bg-white text-green-700 px-12 py-6 rounded-full hover:bg-gray-100 transition-all duration-200 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 cursor-pointer text-center">
              JA, jeg vil ha tilbud i {cityName}!
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white text-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lokale entreprenører i {cityName}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% gratis og uforpliktende</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Rask oppstart</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  const params = []
  
  for (const service of Object.keys(categoryData)) {
    for (const city of cities) {
      params.push({
        slug: service,
        city: city
      })
    }
  }
  
  return params
}