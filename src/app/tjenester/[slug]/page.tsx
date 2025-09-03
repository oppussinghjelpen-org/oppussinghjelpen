import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface CategoryData {
  title: string;
  description: string;
  heroSubtitle?: string;
  services: string[];
  benefits?: string[];
  pricing?: {
    title?: string;
    ranges?: { size: string; price: string }[];
    small?: { range: string; description: string };
    medium?: { range: string; description: string };
    large?: { range: string; description: string };
  };
  content: { 
    about?: string; 
    process?: string; 
    why?: string; 
    sections?: { title: string; text: string }[] 
  };
  testimonials: { name: string; location: string; text: string; rating: number }[];
  faq: { question: string; answer: string }[];
  image: string;
  imagePlaceholder: string;
  seo: { title: string; description: string; keywords: string };
  guarantees?: string[];
  hero?: {
    title: string;
    subtitle: string;
    description: string;
  };
  process?: { step: number; title: string; description: string }[];
}

export const categoryData: { [key: string]: CategoryData } = {
  'tak-og-fasade': {
    title: 'Tak & Fasade',
    description: 'Profesjonelle tak- og fasadetjenester for ditt hjem',
    heroSubtitle: 'Få 3 gratis tilbud på tak- og fasadearbeider fra kvalitetssikrede entreprenører',
    seo: {
      title: 'Pris på tak & fasade - Få 3 tilbud',
      description: 'Få gratis tilbud på tak og fasade arbeider. Takskifte, fasaderenovering, isolering og mer.',
      keywords: 'tak, fasade, takskifte, fasaderenovering, taktekking, isolering, entreprenør, tilbud'
    },
    services: [
      'Takskifte og takreparasjon',
      'Fasaderenovering og maling', 
      'Takrenner og nedløp',
      'Isolering av tak og fasade',
      'Vinduer og dører',
      'Taktekking og membran',
      'Skorstein og pipe-arbeider',
      'Snøfangere og sikkerhet'
    ],
    benefits: [
      'Økt eiendomsverdi med opptil 15-20%',
      'Bedre energieffektivitet og lavere strømregning',
      'Beskyttelse mot værskader og fukt',
      'Moderne utseende som varer i årtier',
      'Garanterte arbeider fra sertifiserte fagfolk'
    ],
    pricing: {
      small: { range: '50,000 - 150,000 kr', description: 'Mindre reparasjoner og vedlikehold' },
      medium: { range: '150,000 - 400,000 kr', description: 'Delvis utskifting av tak eller fasade' },
      large: { range: '400,000 - 800,000 kr', description: 'Komplett tak- og fasaderenovering' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar et takskifte?',
        answer: 'Et typisk takskifte tar 3-7 dager avhengig av størrelse og kompleksitet. Vi gir deg en nøyaktig tidsplan når vi har sett på ditt tak.'
      },
      {
        question: 'Trenger jeg byggetillatelse?',
        answer: 'For takskifte kreves det som regel ikke byggetillatelse, men ved strukturelle endringer kan det være nødvendig. Vi hjelper deg med alle søknader.'
      },
      {
        question: 'Hvilke materialer anbefaler dere?',
        answer: 'Vi anbefaler materialer basert på ditt hus, budsjett og ønsker. Populære valg er tegl, betong og stål - alle med lang levetid og god garanti.'
      }
    ],
    content: {
      about: 'Tak og fasade er ditt hjems første forsvarslinje mot norsk vær og vind. Et godt tak og en vedlikeholdt fasade beskytter ikke bare huset ditt, men øker også verdien betydelig. Med våre erfarne entreprenører får du trygghet for at jobben blir gjort riktig første gang.',
      process: 'Vår prosess starter alltid med en grundig befaring hvor vi vurderer tilstanden på ditt tak og fasade. Vi gir deg en ærlig vurdering av hva som må gjøres, og lager en detaljert plan med tidsplan og materialliste. Alle våre partnere er forsikret og gir garanti på arbeidet.',
      why: 'Med over 500 fullførte tak- og fasadeprosjekter har våre entreprenører den erfaringen som trengs for å levere førsteklasses resultater. Vi bruker kun godkjente materialer og følger alle byggtekniske forskrifter. Du får fast kontaktperson gjennom hele prosjektet.'
    },
    testimonials: [
      {
        name: 'Lars Hansen',
        location: 'Oslo',
        text: 'Fantastisk jobb med vårt takskifte. Kom i mål på tid og budsjett, og huset ser ut som nytt!',
        rating: 5
      },
      {
        name: 'Maria Olsen', 
        location: 'Bergen',
        text: 'Profesjonell håndtering fra start til slutt. Anbefaler på det sterkeste!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Tak og fasade renovering',
    image: '/tak-fasade.jpg'
  },
  'oppussing': {
    title: 'Oppussing',
    description: 'Komplett oppussing av rom og hele boliger',
    heroSubtitle: 'Forvandle ditt hjem med profesjonelle oppussingstjenester - få 3 gratis tilbud i dag',
    seo: {
      title: 'Pris på oppussing - Få 3 tilbud',
      description: 'Profesjonell oppussing av bad, kjøkken og hele boliger. Få gratis tilbud fra kvalitetssikrede håndverkere.',
      keywords: 'oppussing, renovering, maling, flising, elektriker, rørlegger, håndverker, tilbud'
    },
    services: [
      'Malingsarbeider og tapetsering',
      'Gulvlegging og flislegging', 
      'Elektriske installasjoner',
      'VVS-arbeider og rørlegging',
      'Snekkerarbeider og innredning',
      'Vinduer og dører',
      'Isolering og energieffektivisering',
      'Komplett romoppussing'
    ],
    benefits: [
      'Økt trivsel og livskvalitet i hjemmet',
      'Betydelig økning i boligens markedsverdi', 
      'Moderne og funksjonelle løsninger',
      'Energibesparelser på sikt',
      'Trygghet med garanterte arbeider'
    ],
    pricing: {
      small: { range: '30,000 - 80,000 kr', description: 'Oppussing av ett rom (bad, kjøkken)' },
      medium: { range: '80,000 - 200,000 kr', description: 'Oppussing av flere rom' },
      large: { range: '200,000 - 500,000 kr', description: 'Totaloppussing av hele leilighet/hus' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar en oppussing?',
        answer: 'Avhenger av omfanget. Et bad tar typisk 1-2 uker, mens en totaloppussing kan ta 2-6 måneder. Vi gir deg en realistisk tidsplan på forhånd.'
      },
      {
        question: 'Kan jeg bo hjemme under oppussingen?',
        answer: 'Det avhenger av omfanget. Ved mindre arbeider er det ofte mulig, men ved omfattende oppussing anbefaler vi midlertidig flytting for din komfort og sikkerhet.'
      },
      {
        question: 'Hvordan sikrer dere kvaliteten?',
        answer: 'Alle våre entreprenører er kvalitetssikret med dokumentert erfaring. Vi følger opp underveis og gir garanti på alle arbeider.'
      }
    ],
    content: {
      about: 'Oppussing er en av de beste investeringene du kan gjøre i hjemmet ditt. Det handler ikke bare om estetikk, men også om funksjonalitet, komfort og verdiøkning. Våre erfarne entreprenører hjelper deg med å realisere visjonen din, enten det er en oppfriskning eller totaloppussing.',
      process: 'Vi starter med en grundig kartlegging av dine ønsker og behov. Deretter lager vi en detaljert plan med 3D-visualisering hvis ønskelig, tidsplan og budsjett. Underveis holder vi deg oppdatert og sikrer at alt går etter planen.',
      why: 'Med over 1000 fullførte oppussingsprosjekter vet vi hva som skal til for å levere et resultat du blir fornøyd med. Vi håndterer alt fra små detaljer til store utfordringer, og du får én kontaktperson gjennom hele prosjektet.'
    },
    testimonials: [
      {
        name: 'Anne Kristiansen',
        location: 'Stavanger', 
        text: 'Utrolig fornøyd med oppussingen av kjøkkenet vårt. Håndverkerne var punktlige og ryddige.',
        rating: 5
      },
      {
        name: 'Erik Johansen',
        location: 'Trondheim',
        text: 'Totaloppussing av leiligheten ble gjort på rekordtid. Anbefaler varmt!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Oppussing av rom',
    image: '/oppussing.jpg'
  },
  'renovering': {
    title: 'Renovering',
    description: 'Omfattende renoveringsprosjekter for hele boliger',
    heroSubtitle: 'Gi ditt hjem nytt liv med profesjonell renovering - sammenlign 3 tilbud gratis',
    seo: {
      title: 'Pris på renovering - Få 3 tilbud',
      description: 'Totalrenovering og boligrenovering fra erfarne entreprenører. Øk boligverdien med 20-30%.',
      keywords: 'renovering, totalrenovering, boligrenovering, kjøkkenrenovering, modernisering, entreprenør'
    },
    services: [
      'Totalrenovering av boliger',
      'Strukturelle endringer og tilbygg',
      'Nye rom og planløsninger', 
      'Modernisering av tekniske anlegg',
      'Energieffektivisering og isolering',
      'Kjøkken- og baderomspakker',
      'Vinduer og dører',
      'Utomhusprosjekter og terrasser'
    ],
    benefits: [
      'Dramatisk økning i boligens verdi (20-30%)',
      'Moderne og energieffektive løsninger',
      'Tilpasset dine behov og livsstil',
      'Økt komfort og livskvalitet',
      'Langsiktig investering som lønner seg'
    ],
    pricing: {
      small: { range: '200,000 - 500,000 kr', description: 'Delrenovering av utvalgte rom' },
      medium: { range: '500,000 - 1,200,000 kr', description: 'Omfattende renovering' },
      large: { range: '1,200,000 - 3,000,000 kr', description: 'Totalrenovering med strukturelle endringer' }
    },
    faq: [
      {
        question: 'Hvor mye øker boligverdien ved renovering?',
        answer: 'En godt planlagt renovering kan øke boligverdien med 20-30%. Kjøkken og bad gir typisk best avkastning på investeringen.'
      },
      {
        question: 'Trenger jeg arkitekt?',
        answer: 'Ved større strukturelle endringer anbefaler vi arkitekt. Vi kan hjelpe deg med å finne riktig arkitekt for ditt prosjekt.'
      },
      {
        question: 'Hvor lang tid tar en totalrenovering?',
        answer: 'En totalrenovering tar typisk 3-8 måneder avhengig av størrelse og kompleksitet. Vi lager en detaljert fremdriftsplan på forhånd.'
      }
    ],
    content: {
      about: 'Renovering er kunsten å forvandle det gamle til noe nytt og moderne. Det handler om å bevare sjelen i hjemmet ditt mens du oppdaterer det til dagens standard. Våre renoveringseksperter har erfaring med alt fra historiske bygninger til moderne boliger.',
      process: 'En vellykket renovering krever grundig planlegging. Vi starter med en helhetlig gjennomgang av boligen og dine ønsker. Deretter utarbeides tegninger, søkes nødvendige tillatelser, og arbeidet gjennomføres i riktig rekkefølge for å minimere støy og støv.',
      why: 'Med over 15 års erfaring og hundrevis av fornøyde kunder vet vi hva som kreves for å levere en vellykket renovering. Vi koordinerer alle fagfolk, håndterer alle detaljer, og sørger for at du får drømmeboligen din.'
    },
    testimonials: [
      {
        name: 'Kari og Ola Nordahl',
        location: 'Kristiansand',
        text: 'Totalrenoveringen av vårt 70-talls hus ble fantastisk. Nå har vi et moderne hjem som føles som nytt!',
        rating: 5
      },
      {
        name: 'Thomas Berg',
        location: 'Tromsø',
        text: 'Profesjonell gjennomføring fra A til Å. Holdt budsjett og tidsplan perfekt.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Boligrenovering',
    image: '/renovering.jpg'
  },
  'garasje': {
    title: 'Garasje',
    description: 'Bygging og renovering av garasjer',
    heroSubtitle: 'Få din drømmegarasje bygget av eksperter - sammenlign 3 tilbud helt gratis',
    seo: {
      title: 'Pris på garasje - Få 3 tilbud',
      description: 'Bygg ny garasje eller renover eksisterende. Isolerte garasjer, carporter og verksted.',
      keywords: 'garasje, garasjebygging, carport, verksted, isolert garasje, byggetillatelse, byggmester'
    },
    services: [
      'Nye garasjer og carporter',
      'Garasjeporter og vinduer',
      'Isolering og oppvarming',
      'Elektriske installasjoner og belysning',
      'Gulvbehandling og epoksy',
      'Oppbevaringsløsninger og hyller',
      'Verksteddel og hobbyrom',
      'Ladestasjoner for elbil'
    ],
    benefits: [
      'Beskyttelse av bil og utstyr',
      'Ekstra oppbevaringsplass',
      'Økt eiendomsverdi',
      'Mulighet for verksted/hobbyrom',
      'Moderne løsninger med smart-teknologi'
    ],
    pricing: {
      small: { range: '150,000 - 300,000 kr', description: 'Enkel garasje uten isolering' },
      medium: { range: '300,000 - 500,000 kr', description: 'Isolert garasje med strøm og varme' },
      large: { range: '500,000 - 800,000 kr', description: 'Premium garasje med verksted og ekstrautstyr' }
    },
    faq: [
      {
        question: 'Trenger jeg byggetillatelse for garasje?',
        answer: 'Ja, garasjer krever som regel byggetillatelse. Vi hjelper deg med hele søknadsprosessen og sørger for at alt er i orden.'
      },
      {
        question: 'Hvor stor kan garasjen være?',
        answer: 'Dette avhenger av tomtens størrelse og kommunens reguleringsbestemmelser. Vi hjelper deg med å finne den optimale størrelsen.'
      },
      {
        question: 'Kan jeg få verksted i garasjen?',
        answer: 'Absolutt! Vi kan planlegge garasjen med dedicated verksteddel, ekstra strøm, og spesialtilpassede oppbevaringsløsninger.'
      }
    ],
    content: {
      about: 'En garasje er mye mer enn bare et sted å parkere bilen. Det kan være ditt verksted, hobbyrom, treningsstudio eller ekstra lagerplass. Våre garasjeeksperter hjelper deg med å skape en funksjonell og praktisk garasje som dekker alle dine behov.',
      process: 'Vi starter med å kartlegge dine behov og ønsker, samt vurdere tomtens muligheter. Deretter lager vi tegninger og søker nødvendige tillatelser. Byggingen gjennomføres effektivt med minimal forstyrrelser for deg og naboene.',
      why: 'Med spesialisert kunnskap om garasjebygging sikrer vi at du får en garasje som er både funksjonell og estetisk tiltalende. Vi bruker kun kvalitetsmaterialer og moderne byggemetoder som sikrer lang levetid.'
    },
    testimonials: [
      {
        name: 'Per Andersen',
        location: 'Drammen',
        text: 'Fantastisk garasje med verksteddel. Nøyaktig det vi drømte om, og bygget på rekordtid!',
        rating: 5
      },
      {
        name: 'Linda Svendsen',
        location: 'Ålesund', 
        text: 'Profesjonelt arbeid fra start til slutt. Garasjen ble enda bedre enn vi hadde forestilt oss.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Garasjeprosjekt',
    image: '/garasje.jpg'
  },
  'baderom': {
    title: 'Baderom',
    description: 'Moderne baderomsløsninger og renovering',
    heroSubtitle: 'Få ditt drømmebad - sammenlign 3 tilbud på baderomrenovering helt gratis',
    seo: {
      title: 'Pris på baderom - Få 3 tilbud',
      description: 'Moderne baderomrenovering fra erfarne fagfolk. Komplette badepakker, flising og VVS.',
      keywords: 'baderom, baderomrenovering, flising, VVS, sanitær, gulvvarme, membran, rørlegger'
    },
    services: [
      'Komplette baderomspakker',
      'Flislegging og membranarbeider',
      'VVS og sanitærinstallasjoner',
      'Elektriske arbeider og belysning',
      'Gulvvarme og ventilasjon',
      'Dusjløsninger og badekar',
      'Speil og innredning',
      'Tilgjengelighetsløsninger'
    ],
    benefits: [
      'Økt boligverdi med opptil 10-15%',
      'Moderne og funksjonelle løsninger',
      'Bedre hygiene og komfort',
      'Energieffektive løsninger',
      'Tilpasset dine behov og ønsker'
    ],
    pricing: {
      small: { range: '80,000 - 150,000 kr', description: 'Oppfriskning med nye fliser og sanitær' },
      medium: { range: '150,000 - 300,000 kr', description: 'Komplett baderom med standard utstyr' },
      large: { range: '300,000 - 600,000 kr', description: 'Luksusbad med premium materialer' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar en baderomrenovering?',
        answer: 'Et typisk baderom tar 2-3 uker å renovere. Vi planlegger arbeidet slik at du har tilgang til andre fasiliteter i mellomtiden.'
      },
      {
        question: 'Må jeg flytte ut under renoveringen?',
        answer: 'Ikke nødvendigvis. Hvis du har flere bad eller kan bruke andre løsninger midlertidig, kan du bo hjemme. Vi tilpasser oss dine behov.'
      },
      {
        question: 'Hvordan sikrer dere at det blir tett?',
        answer: 'Vi bruker kun godkjente membraner og tetningsmaterialer. Alle våre fagfolk er sertifisert i fuktsikring og gir garanti på arbeidet.'
      }
    ],
    content: {
      about: 'Badet er ofte det første rommet vi bruker om morgenen og det siste om kvelden. Et moderne, funksjonelt bad øker ikke bare trivselen, men også boligens verdi betydelig. Våre baderomsspesialister skaper bad som kombinerer funksjonalitet med stil.',
      process: 'Vi starter med en detaljert planlegging hvor vi tar hensyn til rørføring, ventilasjon og dine ønsker. Alle arbeider utføres i riktig rekkefølge med fokus på tetthet og kvalitet. Du får løpende oppdateringer underveis.',
      why: 'Med spesialiserte fagfolk og moderne materialer sikrer vi at ditt nye bad blir både vakkert og funksjonelt i mange år fremover. Vi kjenner alle fallgruvene og sørger for at jobben blir gjort riktig første gang.'
    },
    testimonials: [
      {
        name: 'Silje Haugen',
        location: 'Sandnes',
        text: 'Vårt nye bad er helt fantastisk! Håndverkerne var profesjonelle og ryddige hele veien.',
        rating: 5
      },
      {
        name: 'Jon Knutsen',
        location: 'Fredrikstad',
        text: 'Perfekt utført baderomsrenovering. Holdt både tid og budsjett som avtalt.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Baderomrenovering',
    image: '/baderom.jpg'
  },
  'loft-og-kjeller': {
    title: 'Loft & Kjeller',
    description: 'Utbygging og renovering av loft og kjeller',
    heroSubtitle: 'Utnytt potensialet i loft og kjeller - få 3 gratis tilbud på utbygging',
    seo: {
      title: 'Pris på loft & kjeller - Få 3 tilbud',
      description: 'Utbygging av loft og kjeller for ekstra boareal. Øk boligverdien betydelig med profesjonell utbygging.',
      keywords: 'loftsutbygging, kjellerpussing, utbygging, boareal, isolering, byggetillatelse, rom'
    },
    services: [
      'Loftsutbygging og isolering',
      'Kjellerpussing og fuktsperre',
      'Nye rom og soverom',
      'Trapper og adkomst',
      'Elektriske og VVS-installasjoner',
      'Vinduer og lyskasser',
      'Oppbevaringsløsninger',
      'Hjemmekontor og hobbyrom'
    ],
    benefits: [
      'Betydelig økt boareal uten tilbygg',
      'Høy avkastning på investering',
      'Ekstra rom for familie eller utleie',
      'Økt eiendomsverdi',
      'Utnyttelse av eksisterende plass'
    ],
    pricing: {
      small: { range: '200,000 - 400,000 kr', description: 'Enkel utbygging med basis standard' },
      medium: { range: '400,000 - 700,000 kr', description: 'Komplett utbygging med bad og kjøkken' },
      large: { range: '700,000 - 1,200,000 kr', description: 'Premium utbygging med luksusfinish' }
    },
    faq: [
      {
        question: 'Kan alle loft bygges ut?',
        answer: 'De fleste loft kan bygges ut, men det avhenger av takhøyde, konstruksjon og reguleringsbestemmelser. Vi gjør en teknisk vurdering først.'
      },
      {
        question: 'Trenger jeg byggetillatelse?',
        answer: 'Ja, loftsutbygging krever som regel byggetillatelse. Vi hjelper deg med hele søknadsprosessen og tekniske tegninger.'
      },
      {
        question: 'Hvor mye ekstra boareal får jeg?',
        answer: 'Dette avhenger av husets størrelse og utforming. Typisk kan du få 30-80 m² ekstra boareal ved loftsutbygging.'
      }
    ],
    content: {
      about: 'Loft og kjeller representerer enormt potensial for ekstra boareal. I stedet for å bygge ut eller flytte, kan du utnytte plassen du allerede har. Våre utbyggingseksperter hjelper deg med å realisere dette potensialet på en smart og kostnadseffektiv måte.',
      process: 'Vi starter med en grundig teknisk vurdering av eksisterende konstruksjon og muligheter. Deretter planlegges utbyggingen i henhold til TEK-forskriftene og dine ønsker. Vi håndterer alt fra søknader til ferdigattest.',
      why: 'Med erfaring fra hundrevis av loft- og kjellerutbygginger vet vi hvordan vi skaper maksimal verdi av disse arealene. Vi sørger for at alle krav til isolasjon, ventilasjon og sikkerhet oppfylles, og du får fullverdige rom som øker boligens verdi betydelig.'
    },
    testimonials: [
      {
        name: 'Morten Lie',
        location: 'Bærum',
        text: 'Loftsutbyggingen ga oss to nye soverom og bad. Fantastisk håndverk og god oppfølging!',
        rating: 5
      },
      {
        name: 'Ingrid Haugen',
        location: 'Asker',
        text: 'Kjelleren ble forvandlet til en praktfull stue. Kan ikke tro hvor bra det ble!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Loft og kjeller utbygging',
    image: '/kjeller-loft.jpg'
  },
  'nybygg': {
    title: 'Nybygg',
    description: 'Oppføring av nye boliger og bygninger',
    heroSubtitle: 'Bygg ditt drømmehjem fra grunnen av - få 3 tilbud fra erfarne byggmestere',
    seo: {
      title: 'Pris på nybygg - Få 3 tilbud',
      description: 'Bygg nytt hjem med erfarne byggmestere. Eneboliger, hytter og tilbygg med moderne energiløsninger.',
      keywords: 'nybygg, boligbygging, enebolig, hytte, tilbygg, byggmester, arkitekt, byggetillatelse'
    },
    services: [
      'Eneboliger og tomannsboliger',
      'Hytter og fritidsboliger',
      'Garasjer og uthus',
      'Tilbygg og påbygg',
      'Næringsbygg og kontorer',
      'Miljøvennlige og energieffektive løsninger',
      'Smart home-teknologi',
      'Landskapsarkitektur og utomhusanlegg'
    ],
    benefits: [
      'Akkurat det hjemmet du drømmer om',
      'Moderne teknologi og energiløsninger',
      'Ingen skjulte problemer eller vedlikeholdsetterslep',
      'Tilpasset din livsstil og behov',
      'Lang garanti på alle arbeider'
    ],
    pricing: {
      small: { range: '3,000,000 - 5,000,000 kr', description: 'Enkel enebolig 120-150 m²' },
      medium: { range: '5,000,000 - 8,000,000 kr', description: 'Moderne enebolig 150-250 m²' },
      large: { range: '8,000,000 - 15,000,000 kr', description: 'Luksusvilla med premium materialer' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar det å bygge nytt?',
        answer: 'En typisk enebolig tar 8-12 måneder å bygge fra grunnarbeid til innflytting. Vi gir deg en detaljert fremdriftsplan.'
      },
      {
        question: 'Kan jeg påvirke planene underveis?',
        answer: 'Ja, innenfor rimelighetens grenser. Vi har faste milepæler hvor endringer kan gjøres, men store endringer sent i prosessen kan påvirke tid og kostnad.'
      },
      {
        question: 'Hvordan finansierer jeg nybygget?',
        answer: 'Vi kan hjelpe deg med kontakt til finansieringsrådgivere som spesialiserer seg på nybygg. Det finnes flere gode løsninger tilgjengelig.'
      }
    ],
    content: {
      about: 'Å bygge nytt er den ultimate muligheten til å skape akkurat det hjemmet du drømmer om. Fra første skisse til du får nøklene i hånden, følger våre erfarne byggmestere deg gjennom hele prosessen. Vi bygger hjem som er tilpasset moderne liv med fokus på energieffektivitet og komfort.',
      process: 'Fra første møte til ferdig hjem tar vi hånd om alt. Vi starter med en grundig gjennomgang av dine ønsker og tomtens muligheter. Deretter utarbeides tegninger, søkes tillatelser, og byggingen starter. Du får løpende oppdateringer og kan følge fremgangen hele veien.',
      why: 'Med over 200 oppførte boliger og en gjennomsnittlig kundetilfredshet på 98% vet vi hva som skal til for å bygge ditt drømmehjem. Vi bruker kun godkjente materialer, følger alle forskrifter, og gir omfattende garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Familie Eriksen',
        location: 'Lillestrøm',
        text: 'Vårt nye hjem ble akkurat som vi drømte om. Profesjonell oppfølging hele veien!',
        rating: 5
      },
      {
        name: 'Kristin og Bjørn',
        location: 'Tønsberg',
        text: 'Byggmesteren holdt alle tidsfrister og budsjett. Anbefaler på det varmeste!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Nybygg prosjekt',
    image: '/nybygg.jpg'
  },
  'gulvsliping': {
    title: 'Gulvsliping',
    description: 'Profesjonell gulvsliping og gulvbehandling',
    heroSubtitle: 'Få 3 gratis tilbud på gulvsliping fra kvalitetssikrede gulvspesialister',
    seo: {
      title: 'Pris på gulvsliping - Få 3 tilbud',
      description: 'Profesjonell gulvsliping og gulvbehandling. Få gratis tilbud fra kvalitetssikrede gulvspesialister.',
      keywords: 'gulvsliping, gulvbehandling, parkett, tre gulv, slipe gulv, lakke gulv, entreprenør, tilbud'
    },
    services: [
      'Sliping av parkettgulv',
      'Lakking og overflatebehandling',
      'Reparasjon av skader i gulv',
      'Gulvbehandling og vedlikehold',
      'Slipemaskinutleie og veiledning',
      'Olje- og voksbehandling',
      'Gulvrens og forberedelse',
      'Gulvrestaurering'
    ],
    benefits: [
      'Fornyelse av eksisterende gulv til en brøkdel av ny pris',
      'Økt levetid på gulvet med 10-20 år',
      'Bedre utseende og verdiøkning på boligen',
      'Miljøvennlig alternativ til utskifting',
      'Profesjonell finish med lang holdbarhet'
    ],
    pricing: {
      small: { range: '8,000 - 15,000 kr', description: 'Mindre rom (10-20 m²)' },
      medium: { range: '15,000 - 30,000 kr', description: 'Større rom eller leilighet (20-50 m²)' },
      large: { range: '30,000 - 60,000 kr', description: 'Hele hus eller store flater (50+ m²)' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar gulvsliping?',
        answer: 'Gulvsliping av et vanlig rom tar 1-3 dager avhengig av størrelse og tilstand. Vi informerer om tidsramme på forhånd.'
      },
      {
        question: 'Kan jeg bo hjemme under gulvslipingen?',
        answer: 'Det anbefales å flytte ut midlertidig på grunn av støv og støy. Vi kan gi råd om beste løsning for ditt hjem.'
      },
      {
        question: 'Hvor ofte må gulvet slipes?',
        answer: 'Et kvalitetsgulv kan slipes 3-5 ganger i løpet av sin levetid. Vanligvis hver 10-15 år ved normal bruk.'
      }
    ],
    content: {
      about: 'Gulvsliping er en kostnadseffektiv måte å forny eksisterende tregulv på. I stedet for å skifte ut hele gulvet, kan profesjonell sliping og lakking gi gulvet nytt liv og øke boligens verdi betydelig.',
      process: 'Vår prosess starter med en grundig vurdering av gulvets tilstand. Vi forbereder rommet, slipper gulvet i flere omganger med forskjellige kornstørrelser, og avslutter med lakking eller oljebehandling.',
      why: 'Med spesialiserte gulvslipere og moderne utstyr sikrer vi et profesjonelt resultat som varer. Vi bruker kun kvalitetsprodukter og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Kari Andersen',
        location: 'Oslo',
        text: 'Gulvet vårt så helt nytt ut etter slipingen. Fantastisk resultat og ryddig arbeid!',
        rating: 5
      },
      {
        name: 'Per Johansen',
        location: 'Bergen',
        text: 'Profesjonell utførelse og god pris. Anbefaler på det sterkeste!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Gulvsliping',
    image: '/gulv.jpg'
  },
  'gulvlegging': {
    title: 'Gulvlegging',
    description: 'Profesjonell gulvlegging og gulvinstallasjoner',
    heroSubtitle: 'Få 3 gratis tilbud på gulvlegging fra kvalitetssikrede gulvleggere',
    seo: {
      title: 'Pris på gulvlegging - Få 3 tilbud',
      description: 'Profesjonell gulvlegging av parkett, laminat og vinylgulv. Få gratis tilbud fra kvalitetssikrede gulvleggere.',
      keywords: 'gulvlegging, parkett, laminat, vinyl, gulvlegger, gulv, entreprenør, tilbud'
    },
    services: [
      'Parkettlegging og installasjon',
      'Laminat- og vinylgulv',
      'Flislegging og steingulv',
      'Gulvvarme og isolasjon',
      'Terskler og lister',
      'Gulvforberedelse og utjevning',
      'Fuktsperre og underlag',
      'Gulvreparasjoner'
    ],
    benefits: [
      'Økt komfort og trivsel i hjemmet',
      'Bedre isolasjon og energieffektivitet',
      'Moderne utseende som øker boligverdien',
      'Lang holdbarhet med riktig installasjon',
      'Bred utvalg av materialer og design'
    ],
    pricing: {
      small: { range: '15,000 - 30,000 kr', description: 'Mindre rom (10-20 m²)' },
      medium: { range: '30,000 - 60,000 kr', description: 'Større rom eller leilighet (20-50 m²)' },
      large: { range: '60,000 - 120,000 kr', description: 'Hele hus eller store flater (50+ m²)' }
    },
    faq: [
      {
        question: 'Hvilken gulvtype anbefaler dere?',
        answer: 'Det avhenger av rom, bruk og budsjett. Parkett er populært for stuer, mens vinyl er praktisk for bad og kjøkken. Vi gir deg personlig rådgivning.'
      },
      {
        question: 'Hvor lang tid tar gulvlegging?',
        answer: 'Et vanlig rom tar 1-2 dager å legge gulv i, avhengig av gulvtype og forberedelser. Vi gir deg en nøyaktig tidsplan på forhånd.'
      },
      {
        question: 'Trenger jeg gulvvarme?',
        answer: 'Gulvvarme gir økt komfort, spesielt på bad og i kjøkken. Vi kan vurdere om det er lønnsomt for ditt prosjekt og hjelpe med installasjonen.'
      }
    ],
    content: {
      about: 'Nytt gulv kan forvandle et rom fullstendig. Det påvirker både utseende, komfort og verdi på boligen din. Våre erfarne gulvleggere hjelper deg med å velge riktig gulvtype og sørger for profesjonell installasjon.',
      process: 'Vi starter med å måle og vurdere undergulvet. Deretter forberedes underlaget, installeres gulvvarme hvis ønskelig, og gulvet legges med presisjon. Avslutningsvis monteres lister og terskler.',
      why: 'Med mange års erfaring og moderne verktøy leverer våre gulvleggere et resultat som varer. Vi bruker kun kvalitetsmaterialer og gir garanti på både arbeid og materialer.'
    },
    testimonials: [
      {
        name: 'Linda Eriksen',
        location: 'Stavanger',
        text: 'Fantastisk resultat på parkettleggingen! Håndverkeren var punktlig og ryddig.',
        rating: 5
      },
      {
        name: 'Tom Hansen',
        location: 'Trondheim',
        text: 'Perfekt utført gulvlegging. Gulvvarmen fungerer utmerket!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Gulvlegging',
    image: '/gulv.jpg'
  },
  'maling-innendors': {
    title: 'Maling innendørs',
    description: 'Profesjonell innendørs maling og malerarbeider',
    heroSubtitle: 'Få 3 gratis tilbud på innendørs maling fra kvalitetssikrede malere',
    seo: {
      title: 'Pris på maling innendørs - Få 3 tilbud',
      description: 'Profesjonell innendørs maling av vegger og tak. Få gratis tilbud fra kvalitetssikrede malere.',
      keywords: 'maling innendørs, maler, malerarbeider, veggmaling, takmaling, entreprenør, tilbud'
    },
    services: [
      'Vegg- og takmaling',
      'Spartling og forberedelse',
      'Grunnmaling og primer',
      'Dekorative maleteknikker',
      'Fargekonsultasjon',
      'Tapetfjerning og forberedelse',
      'Lister og karmer',
      'Beskyttelse av møbler og gulv'
    ],
    benefits: [
      'Frisker opp hjemmet raskt og kostnadseffektivt',
      'Økt trivsel og moderne utseende',
      'Beskyttelse av vegger og overflater',
      'Personlig stil og fargeuttrykk',
      'Økt boligverdi med minimal investering'
    ],
    pricing: {
      small: { range: '8,000 - 15,000 kr', description: 'Ett rom (10-15 m²)' },
      medium: { range: '15,000 - 35,000 kr', description: 'Flere rom eller leilighet' },
      large: { range: '35,000 - 70,000 kr', description: 'Hele hus eller stor leilighet' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar innendørs maling?',
        answer: 'Et vanlig rom tar 1-2 dager å male, inkludert forberedelse og tørketid. Vi gir deg en nøyaktig tidsplan basert på ditt prosjekt.'
      },
      {
        question: 'Må jeg flytte ut møbler?',
        answer: 'Vi hjelper med å flytte møbler og dekker til alt som skal beskyttes. Du kan bo hjemme under malingen.'
      },
      {
        question: 'Hvilken maling anbefaler dere?',
        answer: 'Vi anbefaler miljøvennlig maling av høy kvalitet tilpasset rom og bruk. Vi gir deg personlig rådgivning om farger og finish.'
      }
    ],
    content: {
      about: 'Innendørs maling er en av de enkleste måtene å forvandle hjemmet ditt på. Med riktig forberedelse og kvalitetsmaling kan du få et resultat som varer i mange år og øker trivselen betydelig.',
      process: 'Vi starter med grundig forberedelse av overflater, spartling av hull og riper, grunnmaling hvis nødvendig, og avslutter med to strøk toppmaling. Alt beskyttes og ryddes opp underveis.',
      why: 'Våre malere har lang erfaring og bruker kun kvalitetsmaling og verktøy. Vi leverer et jevnt og profesjonelt resultat som varer, og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Inger Solberg',
        location: 'Oslo',
        text: 'Fantastisk malerarbeid! Stuen vår ser helt ny ut. Ryddig og profesjonell utførelse.',
        rating: 5
      },
      {
        name: 'Ole Kristiansen',
        location: 'Drammen',
        text: 'Perfekt resultat på malingen av hele leiligheten. Anbefaler varmt!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Maling innendørs',
    image: '/oppussing.jpg'
  },
  'fasademaling': {
    title: 'Fasademaling',
    description: 'Profesjonell fasademaling og utendørs maling',
    heroSubtitle: 'Få 3 gratis tilbud på fasademaling fra kvalitetssikrede malere',
    seo: {
      title: 'Pris på fasademaling - Få 3 tilbud',
      description: 'Profesjonell fasademaling og utendørs maling. Beskyttelse og fornyelse av fasade.',
      keywords: 'fasademaling, utendørs maling, fasade, maler, malerarbeider, entreprenør, tilbud'
    },
    services: [
      'Fasademaling og renovering',
      'Trebeskyttelse og beis',
      'Grunnbehandling og primer',
      'Høytrykkspyling og forberedelse',
      'Reparasjon av treverk',
      'Vindus- og dørmaling',
      'Takrenner og nedløp',
      'Dekorative utendørsarbeider'
    ],
    benefits: [
      'Beskyttelse mot vær og vind',
      'Økt levetid på fasadematerialer',
      'Moderne og frisket utseende',
      'Økt eiendomsverdi og attraktivitet',
      'Langsiktig beskyttelse og vedlikehold'
    ],
    pricing: {
      small: { range: '25,000 - 50,000 kr', description: 'Mindre hus eller deler av fasade' },
      medium: { range: '50,000 - 100,000 kr', description: 'Vanlig enebolig' },
      large: { range: '100,000 - 200,000 kr', description: 'Stort hus eller omfattende arbeider' }
    },
    faq: [
      {
        question: 'Når på året bør fasaden males?',
        answer: 'Best resultat oppnås i tørre perioder med temperaturer mellom 10-25°C. Vi anbefaler mai-september for optimale forhold.'
      },
      {
        question: 'Hvor ofte må fasaden males?',
        answer: 'Avhenger av materiale og eksponering. Trehus bør males hver 7-10 år, mens andre materialer kan vare lenger.'
      },
      {
        question: 'Hvilken maling er best for fasade?',
        answer: 'Vi anbefaler høykvalitets fasademaling tilpasset ditt materiale og klima. Vi gir personlig rådgivning om beste løsning.'
      }
    ],
    content: {
      about: 'Fasademaling handler om mer enn bare utseende - det er viktig beskyttelse for hjemmet ditt. Kvalitetsmaling beskytter mot fukt, UV-stråling og værpåkjenninger, og kan forlenge levetiden på fasadematerialene betydelig.',
      process: 'Vi starter med grundig rengjøring og forberedelse av fasaden. Eventuelle skader repareres, grunnmaling påføres hvis nødvendig, og vi avslutter med to strøk kvalitetsmaling.',
      why: 'Våre fasademalere har spesialkompetanse på utendørs maling og kjenner utfordringene med norsk klima. Vi bruker kun værbestandig maling og gir lang garanti.'
    },
    testimonials: [
      {
        name: 'Hans Eriksen',
        location: 'Stavanger',
        text: 'Huset vårt ser fantastisk ut etter fasademalingen. Profesjonelt arbeid fra start til slutt!',
        rating: 5
      },
      {
        name: 'Astrid Haugen',
        location: 'Bergen',
        text: 'Utmerket resultat på fasademalingen. Holdt avtalt tid og budsjett.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Fasademaling',
    image: '/tak-fasade.jpg'
  },
  'sparkling-tapetsering': {
    title: 'Sparkling og tapetsering',
    description: 'Profesjonell sparkling og tapetsering',
    heroSubtitle: 'Få 3 gratis tilbud på sparkling og tapetsering fra kvalitetssikrede fagfolk',
    seo: {
      title: 'Pris på sparkling og tapetsering - Få 3 tilbud',
      description: 'Profesjonell sparkling og tapetsering. Få gratis tilbud fra kvalitetssikrede fagfolk.',
      keywords: 'sparkling, tapetsering, veggarbeider, maler, entreprenør, tilbud'
    },
    services: [
      'Spartling av vegger og tak',
      'Tapetsering og tapetfjerning',
      'Veggforberedelse og utjevning',
      'Makulering og reparasjoner',
      'Tapetreparasjoner',
      'Strukturtapeter og vinyltapeter',
      'Malingsarbeider etter spartling',
      'Dekorative veggløsninger'
    ],
    benefits: [
      'Jevne og glatte vegger',
      'Profesjonell finish på tapeter',
      'Økt verdi og utseende på rommet',
      'Lang holdbarhet på veggoverflater',
      'Personlig stil og design'
    ],
    pricing: {
      small: { range: '5,000 - 12,000 kr', description: 'Ett rom spartling/tapetsering' },
      medium: { range: '12,000 - 25,000 kr', description: 'Flere rom eller leilighet' },
      large: { range: '25,000 - 50,000 kr', description: 'Hele hus eller omfattende arbeider' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar sparkling og tapetsering?',
        answer: 'Et vanlig rom tar 2-3 dager inkludert tørketid. Vi gir deg en nøyaktig tidsplan basert på omfanget av arbeidet.'
      },
      {
        question: 'Må jeg fjerne gamle tapeter først?',
        answer: 'Vi kan hjelpe med å fjerne gamle tapeter som del av jobben. Dette inkluderes i tilbudet vårt.'
      },
      {
        question: 'Hvilken type tapet anbefaler dere?',
        answer: 'Det avhenger av rom og bruk. Vi gir deg rådgivning om beste tapettype for ditt prosjekt og ønsker.'
      }
    ],
    content: {
      about: 'Sparkling og tapetsering krever presisjon og erfaring for å få et profesjonelt resultat. Våre fagfolk sørger for jevne vegger og perfekt tapetsering som varer.',
      process: 'Vi starter med å vurdere veggenes tilstand, spartler ujevnheter, forbereder overflaten, og tapetserer med presisjon. Alt ryddes opp underveis.',
      why: 'Med spesialiserte verktøy og lang erfaring leverer vi et resultat som varer. Vi bruker kun kvalitetsmaterialer og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Marit Larsen',
        location: 'Oslo',
        text: 'Fantastisk sparkling og tapetsering! Veggene ble perfekte og tapetene sitter som støpt.',
        rating: 5
      },
      {
        name: 'Jan Olsen',
        location: 'Kristiansand',
        text: 'Profesjonell utførelse og god rådgivning. Meget fornøyd med resultatet!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Sparkling og tapetsering',
    image: '/oppussing.jpg'
  },
  'taktekking': {
    title: 'Taktekking',
    description: 'Profesjonell taktekking og takreparasjon',
    heroSubtitle: 'Få 3 gratis tilbud på taktekking fra kvalitetssikrede taktekkere',
    seo: {
      title: 'Pris på taktekking - Få 3 tilbud',
      description: 'Profesjonell taktekking og takreparasjon. Få gratis tilbud fra kvalitetssikrede taktekkere.',
      keywords: 'taktekking, tak, takreparasjon, taktekker, takskifte, entreprenør, tilbud'
    },
    services: [
      'Taktekking med tegl og betong',
      'Takskifte og takreparasjon',
      'Membran og taktetting',
      'Takrenner og nedløp',
      'Snøfangere og takstiger',
      'Skorstein og pipearbeider',
      'Takvinduer og lyskasser',
      'Isolering under tak'
    ],
    benefits: [
      'Beskyttelse mot værpåkjenninger',
      'Økt energieffektivitet',
      'Lang levetid med kvalitetsmaterialer',
      'Økt eiendomsverdi',
      'Trygghet og sikkerhet'
    ],
    pricing: {
      small: { range: '80,000 - 150,000 kr', description: 'Mindre tak eller reparasjoner' },
      medium: { range: '150,000 - 300,000 kr', description: 'Vanlig enebolig' },
      large: { range: '300,000 - 500,000 kr', description: 'Stort tak eller komplekse arbeider' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar taktekking?',
        answer: 'Et vanlig eneboligtak tar 3-7 dager avhengig av størrelse og kompleksitet. Værforhold kan påvirke fremdriften.'
      },
      {
        question: 'Trenger jeg byggetillatelse for taktekking?',
        answer: 'For vanlig taktekking kreves som regel ikke byggetillatelse, men vi sjekker alltid med kommunen for å være sikre.'
      },
      {
        question: 'Hvilke materialer anbefaler dere?',
        answer: 'Vi anbefaler materialer basert på husets stil, budsjett og lokale forhold. Tegl, betong og stål er populære valg.'
      }
    ],
    content: {
      about: 'Et godt tak er avgjørende for hjemmets beskyttelse. Våre erfarne taktekkere sørger for at taket ditt blir både funksjonelt og estetisk tiltalende, med lang levetid.',
      process: 'Vi starter med en grundig takbefaring, lager detaljert plan, og utfører arbeidet med fokus på kvalitet og sikkerhet. Alle materialer er godkjente og værbestandige.',
      why: 'Med spesialisert utstyr og lang erfaring leverer våre taktekkere et resultat som tåler norsk vær og vind. Vi følger alle sikkerhetskrav og gir omfattende garanti.'
    },
    testimonials: [
      {
        name: 'Bjørn Haugen',
        location: 'Bergen',
        text: 'Utmerket taktekking! Håndverkerne var profesjonelle og jobben ble gjort på rekordtid.',
        rating: 5
      },
      {
        name: 'Liv Andersen',
        location: 'Trondheim',
        text: 'Fantastisk resultat på det nye taket. Føler oss trygge for mange år fremover!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Taktekking',
    image: '/tak-fasade.jpg'
  },
  'rorleggerarbeid': {
    title: 'Rørleggerarbeid',
    description: 'Profesjonelle VVS og rørleggerarbeider',
    heroSubtitle: 'Få 3 gratis tilbud på rørleggerarbeid fra kvalitetssikrede rørleggere',
    seo: {
      title: 'Pris på rørleggerarbeid - Få 3 tilbud',
      description: 'Profesjonelle VVS og rørleggerarbeider. Få gratis tilbud fra kvalitetssikrede rørleggere.',
      keywords: 'rørleggerarbeid, VVS, rørlegger, vannledning, avløp, sanitær, entreprenør, tilbud'
    },
    services: [
      'Installasjon av rør og vannledninger',
      'Avløpsarbeider og kloakk',
      'Sanitærinstallasjoner',
      'Vannvarmerinstallasjoner',
      'Gulvvarme og varmesystemer',
      'Lekkasjereparasjoner',
      'Modernisering av VVS-anlegg',
      'Utendørs vann og avløp'
    ],
    benefits: [
      'Trygg og sikker vannforsyning',
      'Moderne og effektive løsninger',
      'Energibesparende systemer',
      'Økt komfort og funksjonalitet',
      'Fagmessig installasjon med garanti'
    ],
    pricing: {
      small: { range: '8,000 - 20,000 kr', description: 'Mindre reparasjoner og installasjoner' },
      medium: { range: '20,000 - 50,000 kr', description: 'Baderomsinstallasjon eller større arbeider' },
      large: { range: '50,000 - 120,000 kr', description: 'Komplett VVS-anlegg eller omfattende modernisering' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar rørleggerarbeider?',
        answer: 'Avhenger av omfanget. Mindre reparasjoner tar noen timer, mens komplette installasjoner kan ta flere dager.'
      },
      {
        question: 'Trenger jeg godkjenning for VVS-arbeider?',
        answer: 'Ja, alle VVS-arbeider må utføres av godkjent rørlegger og meldes til kommunen. Vi håndterer alle formaliteter.'
      },
      {
        question: 'Hva gjør jeg ved akutte lekkasjer?',
        answer: 'Steng hovedkranen og kontakt oss umiddelbart. Vi har beredskap for akutte rørleggerproblemer.'
      }
    ],
    content: {
      about: 'VVS-anlegget er hjemmets skjulte nerve system. Våre autoriserte rørleggere sørger for trygg og effektiv vannforsyning, avløp og oppvarming som fungerer optimalt.',
      process: 'Vi starter med en grundig kartlegging av eksisterende anlegg og dine behov. Deretter planlegges installasjonen, og arbeidet utføres i henhold til gjeldende forskrifter.',
      why: 'Som autoriserte rørleggere har vi ansvar for at alle arbeider utføres forskriftsmessig. Vi bruker kun godkjente materialer og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Knut Svendsen',
        location: 'Oslo',
        text: 'Rask og profesjonell utbedring av lekkasje. Rørleggeren var kunnskapsrik og ryddig.',
        rating: 5
      },
      {
        name: 'Berit Johansen',
        location: 'Stavanger',
        text: 'Perfekt installasjon av nytt bad. Alt fungerer som det skal!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Rørleggerarbeid',
    image: '/baderom.jpg'
  },
  'elektrikerarbeid': {
    title: 'Elektrikerarbeid',
    description: 'Profesjonelle elektriske installasjoner og reparasjoner',
    heroSubtitle: 'Få 3 gratis tilbud på elektrikerarbeid fra kvalitetssikrede elektrikere',
    seo: {
      title: 'Pris på elektrikerarbeid - Få 3 tilbud',
      description: 'Profesjonelle elektriske installasjoner og reparasjoner. Få gratis tilbud fra kvalitetssikrede elektrikere.',
      keywords: 'elektrikerarbeid, elektriker, elektriske installasjoner, strøm, belysning, entreprenør, tilbud'
    },
    services: [
      'Elektriske installasjoner og oppgraderinger',
      'Belysning og lysdesign',
      'Stikkontakter og brytere',
      'Sikringsskap og hovedtavler',
      'Utendørs belysning og strøm',
      'Varmepumper og klimaanlegg',
      'Ladestasjoner for elbil',
      'Feilsøking og reparasjoner'
    ],
    benefits: [
      'Trygg og sikker strømforsyning',
      'Moderne og energieffektive løsninger',
      'Økt komfort med smart belysning',
      'Oppgradert sikkerhet og kapasitet',
      'Fremtidsrettet teknologi'
    ],
    pricing: {
      small: { range: '3,000 - 10,000 kr', description: 'Mindre installasjoner og reparasjoner' },
      medium: { range: '10,000 - 30,000 kr', description: 'Belysning eller større installasjoner' },
      large: { range: '30,000 - 80,000 kr', description: 'Komplett elektrisk oppgradering' }
    },
    faq: [
      {
        question: 'Trenger jeg autorisert elektriker?',
        answer: 'Ja, alle elektriske arbeider må utføres av autorisert elektriker. Vi sørger for at alt blir meldt og godkjent.'
      },
      {
        question: 'Hvor lang tid tar elektriske installasjoner?',
        answer: 'Avhenger av omfanget. Enkle arbeider tar noen timer, mens komplette installasjoner kan ta flere dager.'
      },
      {
        question: 'Kan jeg få smart belysning installert?',
        answer: 'Absolutt! Vi installerer moderne smart belysning og styringssystemer tilpasset dine behov.'
      }
    ],
    content: {
      about: 'Elektriske installasjoner krever ekspertise og autorisasjon. Våre autoriserte elektrikere sørger for trygg og forskriftsmessig installasjon av alt fra enkle stikkontakter til komplette anlegg.',
      process: 'Vi starter med en vurdering av eksisterende anlegg og dine behov. Deretter planlegges installasjonen, og arbeidet utføres i henhold til NEK-forskriftene.',
      why: 'Som autoriserte elektrikere har vi ansvar for at alle arbeider er trygge og forskriftsmessige. Vi bruker kun godkjente komponenter og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Arne Pedersen',
        location: 'Bergen',
        text: 'Profesjonell installasjon av ny belysning. Elektrikeren var kunnskapsrik og ryddig.',
        rating: 5
      },
      {
        name: 'Grete Hansen',
        location: 'Drammen',
        text: 'Utmerket jobb med oppgradering av sikringsskapet. Føler oss mye tryggere nå!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Elektrikerarbeid',
    image: '/oppussing.jpg'
  },
  'flislegging': {
    title: 'Flislegging',
    description: 'Profesjonell flislegging og flisearbeider',
    heroSubtitle: 'Få 3 gratis tilbud på flislegging fra kvalitetssikrede flisleggere',
    seo: {
      title: 'Pris på flislegging - Få 3 tilbud',
      description: 'Profesjonell flislegging for bad, kjøkken og andre rom. Få gratis tilbud fra kvalitetssikrede flisleggere.',
      keywords: 'flislegging, fliser, flislegger, bad, kjøkken, gulvfliser, veggfliser, entreprenør'
    },
    services: [
      'Flislegging på gulv og vegger',
      'Membranlegging og fuktsikring',
      'Naturstein og keramiske fliser',
      'Mosaikk og designfliser',
      'Fugelegging og etterjustering',
      'Flisereparasjoner og utskifting',
      'Kantlister og avslutningsmaterialer',
      'Spesialfliser for utendørs bruk'
    ],
    benefits: [
      'Slitesterke og vanntette overflater',
      'Enkelt vedlikehold og rengjøring',
      'Mange design- og fargealternativer',
      'Økt hygiene og funksjonalitet',
      'Lang levetid med riktig installasjon'
    ],
    pricing: {
      small: { range: '8,000 - 20,000 kr', description: 'Mindre flater eller reparasjoner' },
      medium: { range: '20,000 - 50,000 kr', description: 'Komplett bad eller kjøkkenfliser' },
      large: { range: '50,000 - 100,000 kr', description: 'Store flater eller premium materialer' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar flislegging?',
        answer: 'Et vanlig bad tar 3-5 dager å flislegge, inkludert membranlegging og fuging.'
      },
      {
        question: 'Hvilke fliser anbefaler dere?',
        answer: 'Det avhenger av rom og bruk. Vi gir rådgivning om beste flisetype for ditt prosjekt.'
      },
      {
        question: 'Trenger jeg membran under flisene?',
        answer: 'Ja, i våtrom er membran påkrevd for tetthet. Vi bruker kun godkjente membraner.'
      }
    ],
    content: {
      about: 'Flislegging krever presisjon og kunnskap om fuktsikring. Våre erfarne flisleggere leverer varige og vakre fliseløsninger.',
      process: 'Vi forbereder underlag, legger membran i våtrom, setter fliser med presisjon, og avslutter med fuging og rengjøring.',
      why: 'Med spesialisert utstyr og erfaring leverer våre flisleggere et resultat som ser bra ut og fungerer optimalt.'
    },
    testimonials: [
      {
        name: 'Marta Olsen',
        location: 'Trondheim',
        text: 'Fantastisk flislegging på badet! Så profesjonelt utført.',
        rating: 5
      },
      {
        name: 'Erik Svendsen',
        location: 'Stavanger',
        text: 'Utmerket jobb med kjøkkenflisene. Nøyaktig og ryddig arbeid.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Flislegging',
    image: '/baderom.jpg'
  },
  'snekkertjenester': {
    title: 'Snekkertjenester',
    description: 'Profesjonelle snekkerarbeider og tømrerarbeid',
    heroSubtitle: 'Få 3 gratis tilbud på snekkerarbeider fra kvalitetssikrede snekkere',
    seo: {
      title: 'Pris på snekkertjenester - Få 3 tilbud',
      description: 'Profesjonelle snekkerarbeider og tømrerarbeid. Få gratis tilbud fra kvalitetssikrede snekkere.',
      keywords: 'snekkertjenester, snekker, tømrer, trearbeider, møbler, innredning, entreprenør'
    },
    services: [
      'Innredning og skreddersydde løsninger',
      'Kjøkkenmontering og tilpasning',
      'Garderober og oppbevaringsløsninger',
      'Trapper og rekkverk',
      'Vinduer og dører',
      'Terrasser og utendørs trearbeider',
      'Møbler og spesialløsninger',
      'Reparasjoner og vedlikehold'
    ],
    benefits: [
      'Skreddersydde løsninger for ditt hjem',
      'Økt funksjonalitet og oppbevaring',
      'Kvalitetshåndverk som varer',
      'Økt boligverdi med smarte løsninger',
      'Personlig design og stil'
    ],
    pricing: {
      small: { range: '5,000 - 15,000 kr', description: 'Mindre snekkerarbeider og reparasjoner' },
      medium: { range: '15,000 - 40,000 kr', description: 'Innredning eller større snekkerprosjekter' },
      large: { range: '40,000 - 100,000 kr', description: 'Omfattende snekkerarbeider eller skreddersøm' }
    },
    faq: [
      {
        question: 'Kan dere lage skreddersydde løsninger?',
        answer: 'Ja, det er vår spesialitet! Vi lager tilpassede løsninger som passer perfekt til ditt hjem.'
      },
      {
        question: 'Hvor lang tid tar snekkerarbeider?',
        answer: 'Avhenger av kompleksiteten. Enkle arbeider tar noen dager, mens omfattende prosjekter kan ta flere uker.'
      },
      {
        question: 'Hvilke materialer bruker dere?',
        answer: 'Vi bruker kun kvalitetstreverk og materialer. Vi gir rådgivning om beste materialvalg.'
      }
    ],
    content: {
      about: 'Snekkerarbeider handler om å skape funksjonelle og vakre løsninger i tre. Våre erfarne snekkere kombinerer tradisjonelt håndverk med moderne teknikker.',
      process: 'Vi starter med måling og design, lager detaljerte tegninger, forbereder materialer, og utfører arbeidet med høy presisjon.',
      why: 'Med lang erfaring og moderne verktøy leverer våre snekkere håndverk av høyeste kvalitet. Vi er stolte av vårt arbeid og gir garanti.'
    },
    testimonials: [
      {
        name: 'Kari Johnsen',
        location: 'Oslo',
        text: 'Fantastisk snekkerarbeid! Den tilpassede garderoben er akkurat som vi ønsket oss.',
        rating: 5
      },
      {
        name: 'Petter Lie',
        location: 'Bergen',
        text: 'Utmerket håndverk på trappen vår. Snekkeren var kreativ og løsningsorientert.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Snekkertjenester',
    image: '/oppussing.jpg'
  },
  'tomrerarbeid': {
    title: 'Tømrerarbeid',
    description: 'Profesjonelle tømrerarbeider og byggearbeider',
    heroSubtitle: 'Få 3 gratis tilbud på tømrerarbeid fra kvalitetssikrede tømrere',
    seo: {
      title: 'Pris på tømrerarbeid - Få 3 tilbud',
      description: 'Profesjonelle tømrerarbeider og byggearbeider. Få gratis tilbud fra kvalitetssikrede tømrere.',
      keywords: 'tømrerarbeid, tømrer, byggearbeider, konstruksjon, trearbeider, entreprenør'
    },
    services: [
      'Konstruksjonsarbeider og rammer',
      'Takstol og takarbeider',
      'Gulvbjelker og understøtting',
      'Utvendige vegger og kledning',
      'Vinduer og dørinnsetting',
      'Terrasser og utebygninger',
      'Tilbygg og påbygg',
      'Reparasjoner og forsterkning'
    ],
    benefits: [
      'Solid og trygg konstruksjon',
      'Fagmessig utførelse etter forskrifter',
      'Lang levetid på trearbeider',
      'Økt eiendomsverdi',
      'Moderne byggemetoder'
    ],
    pricing: {
      small: { range: '10,000 - 30,000 kr', description: 'Mindre tømrerarbeider og reparasjoner' },
      medium: { range: '30,000 - 80,000 kr', description: 'Større konstruksjonsarbeider' },
      large: { range: '80,000 - 200,000 kr', description: 'Omfattende tømrerprosjekter eller tilbygg' }
    },
    faq: [
      {
        question: 'Trenger jeg byggetillatelse for tømrerarbeider?',
        answer: 'Det avhenger av omfanget. Vi hjelper deg med å vurdere om tillatelse er nødvendig og håndterer søknadsprosessen.'
      },
      {
        question: 'Hvor lang tid tar tømrerarbeider?',
        answer: 'Avhenger av prosjektets størrelse. Vi gir deg en realistisk tidsplan basert på ditt spesifikke prosjekt.'
      },
      {
        question: 'Hvilke materialer anbefaler dere?',
        answer: 'Vi anbefaler materialer basert på bruksområde og budsjett. Impregnert tre, laminert tre og stål er populære valg.'
      }
    ],
    content: {
      about: 'Tømrerarbeid er grunnlaget for solid og trygg bygging. Våre erfarne tømrere har kompetanse på alt fra små reparasjoner til store konstruksjonsarbeider.',
      process: 'Vi starter med teknisk vurdering og planlegging, forbereder materialer, og utfører arbeidet i henhold til byggtekniske forskrifter og sikkerhetskrav.',
      why: 'Som erfarne tømrere kjenner vi byggtekniske forskrifter og sikkerhetskrav. Vi leverer solid håndverk som tåler tidens tann og gir trygghet.'
    },
    testimonials: [
      {
        name: 'Bjørn Andersen',
        location: 'Drammen',
        text: 'Solid tømrerarbeid på tilbygget vårt. Nøyaktig og profesjonelt utført.',
        rating: 5
      },
      {
        name: 'Inger Haugen',
        location: 'Kristiansand',
        text: 'Fantastisk jobb med terrassen. Tømreren var kunnskapsrik og ryddig.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Tømrerarbeid',
    image: '/nybygg.jpg'
  },
  'etterisolering': {
    title: 'Etterisolering',
    description: 'Profesjonell etterisolering og energieffektivisering',
    heroSubtitle: 'Få 3 gratis tilbud på etterisolering fra kvalitetssikrede isoleringseksperter',
    seo: {
      title: 'Pris på etterisolering - Få 3 tilbud',
      description: 'Profesjonell etterisolering og energieffektivisering. Få gratis tilbud fra kvalitetssikrede isoleringseksperter.',
      keywords: 'etterisolering, isolering, energieffektivisering, varmetap, strømsparing, entreprenør'
    },
    services: [
      'Loftsisolering og takstolisolering',
      'Vegg- og fasadeisolering',
      'Kjellervegg og grunnmursisolering',
      'Gulvisolering og underetasjer',
      'Vindus- og dørtetting',
      'Energirådgivning og kartlegging',
      'Dampsperre og vindtetting',
      'Isoleringsmaterialer og teknikker'
    ],
    benefits: [
      'Betydelig reduksjon i strømregning',
      'Økt komfort og jevnere temperatur',
      'Miljøvennlig og bærekraftig',
      'Økt eiendomsverdi',
      'Bedre inneklima og luftkvalitet'
    ],
    pricing: {
      small: { range: '15,000 - 40,000 kr', description: 'Loftsisolering eller mindre flater' },
      medium: { range: '40,000 - 100,000 kr', description: 'Vegg- eller fasadeisolering' },
      large: { range: '100,000 - 250,000 kr', description: 'Komplett etterisolering av hele huset' }
    },
    faq: [
      {
        question: 'Hvor mye sparer jeg på strømregningen?',
        answer: 'Etterisolering kan redusere strømregningen med 20-40%. Vi kan beregne forventet besparelse for ditt hjem.'
      },
      {
        question: 'Hvilken isolering anbefaler dere?',
        answer: 'Det avhenger av område og behov. Glasull, steinull og cellulosefiber er populære valg. Vi gir personlig rådgivning.'
      },
      {
        question: 'Får jeg støtte til etterisolering?',
        answer: 'Ja, det finnes ulike støtteordninger for energieffektivisering. Vi hjelper deg med å finne aktuelle ordninger.'
      }
    ],
    content: {
      about: 'Etterisolering er en av de beste investeringene du kan gjøre for å redusere energiforbruk og øke komfort. Våre isoleringseksperter hjelper deg med å finne de beste løsningene for ditt hjem.',
      process: 'Vi starter med en energikartlegging for å identifisere varmetap. Deretter planlegges isoleringsarbeidet og utføres med riktige materialer og teknikker.',
      why: 'Med spesialkompetanse på energieffektivisering sikrer vi at du får maksimal effekt av isoleringsarbeidet. Vi følger alle forskrifter og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Rolf Hansen',
        location: 'Oslo',
        text: 'Strømregningen ble halvert etter etterisolering! Fantastisk resultat og profesjonell utførelse.',
        rating: 5
      },
      {
        name: 'Grete Olsen',
        location: 'Trondheim',
        text: 'Mye varmere hus og lavere strømregning. Meget fornøyd med isoleringsarbeidet.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Etterisolering',
    image: '/nybygg.jpg'
  },
  'skifte-av-vinduer': {
    title: 'Skifte av vinduer',
    description: 'Profesjonell vindusskifte og vindusinstallasjon',
    heroSubtitle: 'Få 3 gratis tilbud på vindusskifte fra kvalitetssikrede vindusinstallatører',
    seo: {
      title: 'Pris på skifte av vinduer - Få 3 tilbud',
      description: 'Profesjonell vindusskifte og vindusinstallasjon. Få gratis tilbud fra kvalitetssikrede vindusinstallatører.',
      keywords: 'skifte av vinduer, vinduer, vindusskifte, energivinduer, isolering, entreprenør'
    },
    services: [
      'Skifte av alle vindustyper',
      'Energieffektive vinduer',
      'Treglass og isolerglass',
      'Vinduskarmer og lister',
      'Tetting og isolering',
      'Persienner og markiser',
      'Vindusreparasjoner',
      'Sikkerhetsvinduer'
    ],
    benefits: [
      'Betydelig energibesparelse',
      'Bedre komfort og mindre trekk',
      'Redusert støy fra utsiden',
      'Økt sikkerhet og innbruddsikring',
      'Moderne utseende og økt boligverdi'
    ],
    pricing: {
      small: { range: '8,000 - 15,000 kr', description: 'Ett eller få vinduer' },
      medium: { range: '15,000 - 40,000 kr', description: 'Flere vinduer eller leilighet' },
      large: { range: '40,000 - 100,000 kr', description: 'Alle vinduer i hus eller premium vinduer' }
    },
    faq: [
      {
        question: 'Hvor mye sparer jeg på nye vinduer?',
        answer: 'Energieffektive vinduer kan redusere varmetap med 20-30%. Vi kan beregne forventet besparelse for ditt hjem.'
      },
      {
        question: 'Hvor lang tid tar vindusskifte?',
        answer: 'Et vindu tar 2-4 timer å skifte. Vi kan ofte skifte flere vinduer samme dag.'
      },
      {
        question: 'Hvilke vinduer anbefaler dere?',
        answer: 'Vi anbefaler energieffektive vinduer tilpasset ditt hus og klima. Vi gir personlig rådgivning om beste løsning.'
      }
    ],
    content: {
      about: 'Vinduer påvirker både energiforbruk, komfort og utseende på hjemmet ditt. Våre vindusinstallatører hjelper deg med å velge og installere vinduer som gir optimal funksjon.',
      process: 'Vi måler nøyaktig, bestiller vinduer, forbereder åpningene, installerer nye vinduer med riktig tetting og isolering, og rydder opp etter oss.',
      why: 'Med spesialkompetanse på vindusinstallasjon sikrer vi at vinduene blir riktig montert for optimal energieffekt og tetthet. Vi gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Astrid Larsen',
        location: 'Oslo',
        text: 'Nye vinduer har gjort huset mye varmere! Profesjonell installasjon og god rådgivning.',
        rating: 5
      },
      {
        name: 'Gunnar Vik',
        location: 'Bergen',
        text: 'Utmerket jobb med vindusskiftet. Mye mindre trekk og støy nå.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Skifte av vinduer',
    image: '/nybygg.jpg'
  },
  'skifte-av-dorer': {
    title: 'Skifte av dører',
    description: 'Profesjonell dørskifte og dørinstallasjon',
    heroSubtitle: 'Få 3 gratis tilbud på dørskifte fra kvalitetssikrede dørmontører',
    seo: {
      title: 'Pris på skifte av dører - Få 3 tilbud',
      description: 'Profesjonell dørskifte og dørinstallasjon. Få gratis tilbud fra kvalitetssikrede dørmontører.',
      keywords: 'skifte av dører, dører, dørskifte, ytterdør, innerdør, dørmontør, entreprenør'
    },
    services: [
      'Ytterdører og inngangsdører',
      'Innerdører og romdører',
      'Skyvedører og foldedører',
      'Sikkerhetsdører og låsesystemer',
      'Dørkarmer og lister',
      'Terskler og tetningslister',
      'Dørbeslag og håndtak',
      'Dørautomatikk og adgangskontroll'
    ],
    benefits: [
      'Økt sikkerhet og innbruddsikring',
      'Bedre isolasjon og energieffektivitet',
      'Moderne design og funksjonalitet',
      'Redusert støy og trekk',
      'Økt komfort og tilgjengelighet'
    ],
    pricing: {
      small: { range: '3,000 - 8,000 kr', description: 'Innerdør eller enkel ytterdør' },
      medium: { range: '8,000 - 20,000 kr', description: 'Flere dører eller premium ytterdør' },
      large: { range: '20,000 - 50,000 kr', description: 'Alle dører i hus eller sikkerhetsdører' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar dørskifte?',
        answer: 'En dør tar 2-4 timer å skifte, avhengig av type og eventuelle tilpasninger av karmer.'
      },
      {
        question: 'Hvilken dørtype anbefaler dere?',
        answer: 'Det avhenger av bruk og stil. Vi gir rådgivning om beste dørtype for ditt hjem og behov.'
      },
      {
        question: 'Kan dere installere smart låsesystem?',
        answer: 'Ja, vi installerer moderne låsesystemer og adgangskontroll tilpasset dine sikkerhetsbehov.'
      }
    ],
    content: {
      about: 'Dører er viktige for både sikkerhet, energieffektivitet og design. Våre dørmontører hjelper deg med å velge og installere dører som gir optimal funksjon og utseende.',
      process: 'Vi måler nøyaktig, velger riktig dørtype, forbereder åpningen, installerer døren med karmer og beslag, og justerer for perfekt funksjon.',
      why: 'Med erfaring fra tusenvis av dørinstallasjoner leverer vi et resultat som fungerer perfekt og ser bra ut. Vi bruker kun kvalitetsdører og gir garanti.'
    },
    testimonials: [
      {
        name: 'Marit Svendsen',
        location: 'Stavanger',
        text: 'Fantastisk ny ytterdør! Mye varmere og tryggere følelse. Profesjonell installasjon.',
        rating: 5
      },
      {
        name: 'Jan Eriksen',
        location: 'Trondheim',
        text: 'Perfekt utført dørskifte. Alle dørene fungerer som de skal.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Skifte av dører',
    image: '/nybygg.jpg'
  },
  'drenering': {
    title: 'Drenering',
    description: 'Profesjonell drenering og vannavledning',
    heroSubtitle: 'Få 3 gratis tilbud på drenering fra kvalitetssikrede dreneringseksperter',
    seo: {
      title: 'Pris på drenering - Få 3 tilbud',
      description: 'Profesjonell drenering og vannavledning. Få gratis tilbud fra kvalitetssikrede dreneringseksperter.',
      keywords: 'drenering, vannavledning, fuktsikring, grunnarbeid, entreprenør'
    },
    services: [
      'Husdrens og fundamentdrenering',
      'Hagedrens og overflatevann',
      'Drensrør og drensbrønner',
      'Membran og fuktsikring',
      'Grøftearbeider og utgraving',
      'Pumpesystemer og heving',
      'Vedlikehold av eksisterende drens',
      'Inspeksjon og kartlegging'
    ],
    benefits: [
      'Beskyttelse mot fuktskader',
      'Tørr kjeller og fundamenter',
      'Økt levetid på bygningskonstruksjon',
      'Bedre inneklima og luftkvalitet',
      'Forebygger kostbare vannskader'
    ],
    pricing: {
      small: { range: '15,000 - 40,000 kr', description: 'Mindre dreneringsarbeider' },
      medium: { range: '40,000 - 80,000 kr', description: 'Husdrens eller større prosjekter' },
      large: { range: '80,000 - 150,000 kr', description: 'Omfattende drenering eller komplekse løsninger' }
    },
    faq: [
      {
        question: 'Hvordan vet jeg om jeg trenger drenering?',
        answer: 'Tegn på dårlig drenering er fukt i kjeller, mugglukt eller vannpytter rundt huset. Vi kan gjøre en vurdering.'
      },
      {
        question: 'Hvor lang tid tar dreneringsarbeider?',
        answer: 'Avhenger av omfanget. Mindre arbeider tar noen dager, mens omfattende drenering kan ta 1-2 uker.'
      },
      {
        question: 'Hvor dypt må drensen ligge?',
        answer: 'Drensen må ligge under fundamentnivå, typisk 30-50 cm under kjellergulv. Vi følger tekniske forskrifter.'
      }
    ],
    content: {
      about: 'Drenering er kritisk for å beskytte bygninger mot fuktskader. Våre dreneringseksperter sikrer at vannet ledes bort fra fundamenter og kjellervegger på en effektiv måte.',
      process: 'Vi starter med kartlegging av vannstrømmer og problemområder. Deretter graver vi ut, installerer drensrør og membran, og sørger for riktig fall og avledning.',
      why: 'Med spesialkompetanse på drenering og vannavledning sikrer vi at løsningen fungerer optimalt i mange år. Vi bruker kun godkjente materialer og følger tekniske forskrifter.'
    },
    testimonials: [
      {
        name: 'Tor Andersen',
        location: 'Oslo',
        text: 'Endelig tørr kjeller! Dreneringsarbeidet løste alle fuktproblemene våre.',
        rating: 5
      },
      {
        name: 'Bente Haugen',
        location: 'Bergen',
        text: 'Profesjonell drenering som fungerer perfekt. Ingen flere vannproblemer!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Drenering',
    image: '/nybygg.jpg'
  },
  'bygging-av-terrasse': {
    title: 'Bygging av terrasse',
    description: 'Profesjonell terrassebygging og uteplasser',
    heroSubtitle: 'Få 3 gratis tilbud på terrassebygging fra kvalitetssikrede snekkere',
    seo: {
      title: 'Pris på bygging av terrasse - Få 3 tilbud',
      description: 'Profesjonell terrassebygging og uteplasser. Få gratis tilbud fra kvalitetssikrede snekkere.',
      keywords: 'bygging av terrasse, terrasse, veranda, uteplass, snekker, entreprenør'
    },
    services: [
      'Terrasser i tre og kompositt',
      'Verandaer og overdekte uteplasser',
      'Fundamenter og bærekonstruksjon',
      'Rekkverk og gelender',
      'Trapper og adkomst',
      'Utendørs belysning og strøm',
      'Terrassemøbler og oppbevaring',
      'Vedlikehold og impregnering'
    ],
    benefits: [
      'Økt utendørs oppholdsareal',
      'Økt boligverdi og attraktivitet',
      'Bedre utnyttelse av hagen',
      'Sosial møteplass for familie og venner',
      'Tilpasset design og funksjonalitet'
    ],
    pricing: {
      small: { range: '25,000 - 50,000 kr', description: 'Mindre terrasse (10-20 m²)' },
      medium: { range: '50,000 - 100,000 kr', description: 'Vanlig terrasse (20-40 m²)' },
      large: { range: '100,000 - 200,000 kr', description: 'Stor terrasse eller veranda med tak' }
    },
    faq: [
      {
        question: 'Trenger jeg byggetillatelse for terrasse?',
        answer: 'Terrasser over 15 m² krever som regel byggetillatelse. Vi hjelper deg med søknadsprosessen.'
      },
      {
        question: 'Hvilke materialer anbefaler dere?',
        answer: 'Impregnert tre, kompositt og hardtre er populære valg. Vi gir rådgivning basert på budsjett og ønsker.'
      },
      {
        question: 'Hvor lang tid tar det å bygge terrasse?',
        answer: 'En vanlig terrasse tar 3-7 dager å bygge, avhengig av størrelse og kompleksitet.'
      }
    ],
    content: {
      about: 'En terrasse utvider hjemmet ditt utover og skaper verdifull uteplass for hele familien. Våre erfarne snekkere bygger terrasser som er både funksjonelle og estetisk tiltalende.',
      process: 'Vi starter med planlegging og søknad om nødvendige tillatelser. Deretter bygges fundamenter, bærekonstruksjon, dekke og rekkverk. Alt avsluttes med impregnering og ferdigstillelse.',
      why: 'Med erfaring fra hundrevis av terrasseprosjekter vet vi hvordan vi bygger terrasser som tåler norsk klima og gir deg mange års glede. Vi bruker kun kvalitetsmaterialer.'
    },
    testimonials: [
      {
        name: 'Lise og Tom Eriksen',
        location: 'Stavanger',
        text: 'Fantastisk terrasse som har blitt familiens favorittsted! Profesjonell utførelse og flott design.',
        rating: 5
      },
      {
        name: 'Knut Svendsen',
        location: 'Trondheim',
        text: 'Utmerket håndverk på terrassen. Holdt alle tidsfrister og budsjett.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Bygging av terrasse',
    image: '/hage.jpg'
  },
  'lydisolering': {
    title: 'Lydisolering',
    description: 'Profesjonell lydisolering og støyreduksjon',
    heroSubtitle: 'Få 3 gratis tilbud på lydisolering fra kvalitetssikrede lydeksperter',
    seo: {
      title: 'Pris på lydisolering - Få 3 tilbud',
      description: 'Profesjonell lydisolering og støyreduksjon. Få gratis tilbud fra kvalitetssikrede lydeksperter.',
      keywords: 'lydisolering, støyisolering, akustikk, støyreduksjon, entreprenør'
    },
    services: [
      'Lydisolering av vegger og tak',
      'Gulvlydisolering og trinnlyd',
      'Akustiske paneler og løsninger',
      'Vindus- og dørisolering',
      'Hjemmekino og musikkrom',
      'Kontorlydisolering',
      'Støyskjermer og barrierer',
      'Lydmålinger og akustikkanalyse'
    ],
    benefits: [
      'Betydelig reduksjon av støy',
      'Økt komfort og ro i hjemmet',
      'Bedre søvnkvalitet',
      'Økt konsentrasjon og produktivitet',
      'Økt boligverdi og attraktivitet'
    ],
    pricing: {
      small: { range: '8,000 - 20,000 kr', description: 'Ett rom eller mindre flater' },
      medium: { range: '20,000 - 50,000 kr', description: 'Flere rom eller leilighet' },
      large: { range: '50,000 - 120,000 kr', description: 'Hele hus eller spesialiserte løsninger' }
    },
    faq: [
      {
        question: 'Hvor mye støy kan lydisolering redusere?',
        answer: 'God lydisolering kan redusere støy med 20-40 dB, som oppleves som en betydelig forbedring.'
      },
      {
        question: 'Hvilken type lydisolering anbefaler dere?',
        answer: 'Det avhenger av støytype og rom. Vi gjør en lydanalyse og anbefaler beste løsning for ditt behov.'
      },
      {
        question: 'Hvor lang tid tar lydisoleringen?',
        answer: 'Et vanlig rom tar 1-3 dager å lydisolere, avhengig av metode og omfang.'
      }
    ],
    content: {
      about: 'Lydisolering kan dramatisk forbedre livskvaliteten i hjemmet ditt. Våre lydeksperter hjelper deg med å finne effektive løsninger for å redusere uønsket støy.',
      process: 'Vi starter med lydmålinger og analyse av støyproblemer. Deretter velges riktige materialer og teknikker, og lydisoleringen installeres profesjonelt.',
      why: 'Med spesialkompetanse på akustikk og lydisolering sikrer vi at du får maksimal støyreduksjon. Vi bruker kun dokumenterte materialer og gir garanti på effekten.'
    },
    testimonials: [
      {
        name: 'Morten Lie',
        location: 'Oslo',
        text: 'Fantastisk lydisolering! Mye roligere hjem og bedre søvn. Høyst anbefalt!',
        rating: 5
      },
      {
        name: 'Ingrid Haugen',
        location: 'Bergen',
        text: 'Utmerket jobb med lydisoleringen. Nesten ingen støy fra naboene lenger.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Lydisolering',
    image: '/oppussing.jpg'
  },
  'gipstak-og-takplater': {
    title: 'Gipstak og takplater',
    description: 'Profesjonell montering av gipstak og takplater',
    heroSubtitle: 'Få 3 gratis tilbud på gipstak fra kvalitetssikrede gipsere',
    seo: {
      title: 'Pris på gipstak og takplater - Få 3 tilbud',
      description: 'Profesjonell montering av gipstak og takplater. Få gratis tilbud fra kvalitetssikrede gipsere.',
      keywords: 'gipstak, takplater, gipser, himling, tak, entreprenør'
    },
    services: [
      'Gipstak og himling',
      'Takplater og mineralplater',
      'Nedhengte tak og systemer',
      'Lysinnsetting og belysning',
      'Akustikktak og lyddemping',
      'Fuktbestandige takløsninger',
      'Designtak og spesialløsninger',
      'Reparasjoner av eksisterende tak'
    ],
    benefits: [
      'Jevnt og moderne takutseende',
      'Skjuler rør og kabler',
      'Bedre akustikk og lyddemping',
      'Enkel tilgang til tekniske installasjoner',
      'Økt romhøyde og luftighet'
    ],
    pricing: {
      small: { range: '8,000 - 15,000 kr', description: 'Ett rom eller mindre flater' },
      medium: { range: '15,000 - 35,000 kr', description: 'Flere rom eller leilighet' },
      large: { range: '35,000 - 70,000 kr', description: 'Hele hus eller spesialløsninger' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar montering av gipstak?',
        answer: 'Et vanlig rom tar 1-2 dager å montere gipstak i, inkludert spartling og finishing.'
      },
      {
        question: 'Kan dere montere lys i gipstaket?',
        answer: 'Ja, vi samarbeider med elektrikere for å installere spotlights og annen belysning i gipstaket.'
      },
      {
        question: 'Hvilken type gipstak anbefaler dere?',
        answer: 'Det avhenger av rom og bruk. Vi gir rådgivning om beste taktype for ditt prosjekt og ønsker.'
      }
    ],
    content: {
      about: 'Gipstak gir et moderne og rent utseende samtidig som det skjuler tekniske installasjoner. Våre gipsere leverer profesjonelle takløsninger som er både funksjonelle og estetisk tiltalende.',
      process: 'Vi starter med måling og planlegging av takløsning. Deretter monteres bæresystem, gipsplater festes, spartles og slipen, og avsluttes med maling eller annen overflatebehandling.',
      why: 'Med erfaring og moderne teknikker leverer våre gipsere jevne og varige takløsninger. Vi bruker kun kvalitetsmaterialer og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Solveig Hansen',
        location: 'Drammen',
        text: 'Fantastisk gipstak som forvandlet hele rommet! Så jevnt og profesjonelt utført.',
        rating: 5
      },
      {
        name: 'Odd Larsen',
        location: 'Kristiansand',
        text: 'Utmerket jobb med gipstaket. Perfekt finish og god rådgivning om belysning.',
        rating: 5
      }
    ],
    imagePlaceholder: 'Gipstak og takplater',
    image: '/oppussing.jpg'
  },
  'stoping-av-gulv': {
    title: 'Støping av gulv',
    description: 'Profesjonell gulvstøping og grunnarbeider',
    heroSubtitle: 'Få 3 gratis tilbud på gulvstøping fra kvalitetssikrede betongarbeidere',
    seo: {
      title: 'Støping av Gulv - Få 3 Gratis Tilbud | Oppussing Hjelpen',
      description: 'Profesjonell gulvstøping og grunnarbeider. Få gratis tilbud fra kvalitetssikrede betongarbeidere.',
      keywords: 'støping av gulv, gulvstøping, betong, grunnarbeid, entreprenør'
    },
    services: [
      'Gulvstøping og betongarbeider',
      'Fundamenter og sokkelmurer',
      'Armering og forsterkning',
      'Gulvvarme i betong',
      'Utjevning og overflatebehandling',
      'Fuktsperre og isolasjon',
      'Industrielle gulvløsninger',
      'Reparasjoner av betonggulv'
    ],
    benefits: [
      'Solid og varig gulvløsning',
      'Jevn og plan overflate',
      'Mulighet for gulvvarme',
      'Slitesterk og vedlikeholdsfri',
      'Økt eiendomsverdi'
    ],
    pricing: {
      small: { range: '15,000 - 30,000 kr', description: 'Mindre flater eller reparasjoner' },
      medium: { range: '30,000 - 60,000 kr', description: 'Vanlig rom eller kjeller' },
      large: { range: '60,000 - 120,000 kr', description: 'Store flater eller spesialløsninger' }
    },
    faq: [
      {
        question: 'Hvor lang tid tar gulvstøping?',
        answer: 'Gulvstøping tar 1-2 dager, men betongen trenger 2-4 uker for full herding før belastning.'
      },
      {
        question: 'Kan jeg få gulvvarme i betonggulvet?',
        answer: 'Ja, gulvvarme kan installeres i betongen. Dette gir jevn varme og god komfort.'
      },
      {
        question: 'Hvilken betongkvalitet anbefaler dere?',
        answer: 'Vi anbefaler betongkvalitet basert på bruk og belastning. Vi gir rådgivning om beste løsning.'
      }
    ],
    content: {
      about: 'Gulvstøping gir en solid og varig gulvløsning som tåler store belastninger. Våre betongarbeidere leverer profesjonelle løsninger for både private og kommersielle prosjekter.',
      process: 'Vi starter med forberedelse av underlag, installerer armering og eventuelle rør, støper betongen, og avslutter med overflatebehandling og herding.',
      why: 'Med erfaring og moderne utstyr leverer våre betongarbeidere gulv som er både sterke og jevne. Vi følger alle tekniske krav og gir garanti på vårt arbeid.'
    },
    testimonials: [
      {
        name: 'Rune Eriksen',
        location: 'Oslo',
        text: 'Perfekt støpt gulv i garasjen! Så jevnt og solid. Profesjonell utførelse.',
        rating: 5
      },
      {
        name: 'Kari Svendsen',
        location: 'Stavanger',
        text: 'Utmerket jobb med kjellergulvet. Gulvvarmen fungerer perfekt!',
        rating: 5
      }
    ],
    imagePlaceholder: 'Støping av gulv',
    image: '/gulv.jpg'
  },

  'totalrenovering-av-bolig': {
    title: 'Totalrenovering av bolig',
    description: 'Komplett renovering av hele boligen med profesjonell planlegging og gjennomføring.',
    hero: {
      title: 'Totalrenovering av bolig',
      subtitle: 'Fra planlegging til innflytting - vi håndterer alt',
      description: 'Få en komplett forvandling av hele boligen din med våre erfarne totalentreprenører. Vi tar oss av alt fra planlegging og søknader til siste finish.',
    },
    benefits: [
      'Én kontaktperson gjennom hele prosjektet',
      'Komplett prosjektledelse og koordinering',
      'Alle fagområder under ett tak',
      'Garantert fremdrift og kvalitet',
      'Transparent prising uten skjulte kostnader',
      'Profesjonell planlegging og design'
    ],
    services: [
      'Prosjektplanlegging og design',
      'Søknader og byggetillatelser',
      'Rivning og forberedende arbeider',
      'VVS og elektriske installasjoner',
      'Byggearbeider og konstruksjon',
      'Isolering og tetting',
      'Gulvlegging og flisarbeid',
      'Malingsarbeider innvendig/utvendig',
      'Kjøkken og badromsmontering',
      'Finish og detaljarbeid'
    ],
    pricing: {
      title: 'Investering i totalrenovering',
      ranges: [
        { size: 'Leilighet (50-80 kvm)', price: '800.000 - 1.400.000 kr' },
        { size: 'Enebolig (100-150 kvm)', price: '1.500.000 - 2.800.000 kr' },
        { size: 'Villa (150-250 kvm)', price: '2.500.000 - 4.500.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Befaring og konsept', description: 'Grundig gjennomgang og utvikling av konsept' },
      { step: 2, title: 'Detaljplanlegging', description: 'Tekniske tegninger og materiallister' },
      { step: 3, title: 'Søknader', description: 'Håndtering av byggetillatelser og meldinger' },
      { step: 4, title: 'Oppstart og rivning', description: 'Forberedende arbeider og rivning' },
      { step: 5, title: 'Byggearbeider', description: 'Gjennomføring av alle byggearbeider' },
      { step: 6, title: 'Finish og overlevering', description: 'Sluttarbeider og kvalitetssikring' }
    ],
    content: {
      sections: [
        {
          title: 'Planlegging og gjennomføring',
          text: 'En totalrenovering krever grundig planlegging og koordinering av mange fagområder. Våre erfarne prosjektledere sikrer at alt går etter planen.'
        },
        {
          title: 'Kvalitet og garanti',
          text: 'Vi bruker kun kvalitetsmaterialer og erfarne håndverkere. Alle arbeider leveres med omfattende garanti og dokumentasjon.'
        }
      ]
    },
    guarantees: [
      '10 års garanti på byggearbeider',
      '5 års garanti på VVS og elektro',
      '3 års garanti på overflater og finish',
      'Komplett ansvarsdekning'
    ],
    testimonials: [
      {
        name: 'Familie Hansen',
        location: 'Oslo',
        text: 'Totalrenoveringen av vårt hus ble gjennomført perfekt. Profesjonell håndtering fra start til slutt.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar en totalrenovering?',
        answer: 'Avhengig av størrelse og kompleksitet, tar en totalrenovering vanligvis 4-8 måneder fra oppstart til ferdigstillelse.'
      },
      {
        question: 'Kan vi bo i huset under renoveringen?',
        answer: 'Dette avhenger av omfanget. Ved omfattende arbeider anbefaler vi midlertidig utflytting for beste resultat og sikkerhet.'
      }
    ],
    seo: {
      title: 'Pris på totalrenovering av bolig - Få 3 tilbud',
      description: 'Totalrenovering av bolig med erfarne entreprenører. Komplett prosjektledelse fra start til slutt. Få gratis tilbud.',
      keywords: 'totalrenovering, komplett renovering, boligrenovering, totalentreprenør, husrenovering'
    },
    imagePlaceholder: 'Totalrenovering av bolig',
    image: '/renovering.jpg'
  },

  'pusse-opp-leilighet': {
    title: 'Pusse opp leilighet',
    description: 'Profesjonell oppussing av leiligheter med fokus på maksimal utnyttelse av plassen.',
    hero: {
      title: 'Pusse opp leilighet',
      subtitle: 'Maksimer potensialet i din leilighet',
      description: 'Forvandl din leilighet til et moderne og funksjonelt hjem. Våre eksperter hjelper deg med alt fra små oppgraderinger til total transformasjon.',
    },
    benefits: [
      'Skreddersydde løsninger for små rom',
      'Maksimal utnyttelse av tilgjengelig plass',
      'Moderne og tidløst design',
      'Økt verdi på leiligheten',
      'Profesjonelle håndverkere',
      'Transparent prising'
    ],
    services: [
      'Baderomsoppussing',
      'Kjøkkenrenovering',
      'Gulvlegging og flisarbeid',
      'Malingsarbeider',
      'Elektriske oppgraderinger',
      'VVS-arbeider',
      'Innbyggede løsninger',
      'Belysningsdesign',
      'Oppbevaring og garderober',
      'Balkongrenovering'
    ],
    pricing: {
      title: 'Investering i leilighetsoppussing',
      ranges: [
        { size: '1-roms (25-35 kvm)', price: '200.000 - 400.000 kr' },
        { size: '2-roms (40-60 kvm)', price: '350.000 - 650.000 kr' },
        { size: '3-roms (60-80 kvm)', price: '500.000 - 900.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Befaring og planlegging', description: 'Vurdering av muligheter og ønsker' },
      { step: 2, title: 'Design og tegninger', description: 'Utvikling av løsninger og design' },
      { step: 3, title: 'Materialvalg', description: 'Utvelgelse av materialer og farger' },
      { step: 4, title: 'Gjennomføring', description: 'Profesjonell utførelse av alle arbeider' },
      { step: 5, title: 'Kvalitetssikring', description: 'Grundig gjennomgang og retting' },
      { step: 6, title: 'Overlevering', description: 'Ferdig oppusset leilighet klar til bruk' }
    ],
    content: {
      sections: [
        {
          title: 'Smart planlegging for små rom',
          text: 'Leiligheter krever spesiell oppmerksomhet på planutnyttelse og smarte løsninger. Vi har lang erfaring med å maksimere potensialet i små rom.'
        },
        {
          title: 'Moderne standarder',
          text: 'Vi oppgraderer til moderne standarder innen isolasjon, ventilasjon og energieffektivitet, samtidig som vi bevarer leilighetens karakter.'
        }
      ]
    },
    guarantees: [
      '5 års garanti på byggearbeider',
      '3 års garanti på VVS og elektro',
      '2 års garanti på overflater',
      'Komplett dokumentasjon'
    ],
    testimonials: [
      {
        name: 'Maria Andersen',
        location: 'Bergen',
        text: 'Leiligheten vår ble totalt forvandlet! De klarte å skape så mye mer plass enn vi trodde var mulig.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar det å pusse opp en leilighet?',
        answer: 'Avhengig av omfang tar det vanligvis 3-8 uker å pusse opp en leilighet, med mindre det er omfattende strukturelle endringer.'
      },
      {
        question: 'Kan vi bo i leiligheten under oppussingen?',
        answer: 'Ved mindre arbeider kan det være mulig, men ved omfattende oppussing anbefaler vi midlertidig utflytting.'
      }
    ],
    seo: {
      title: 'Pris på oppussing av leilighet - Få 3 tilbud',
      description: 'Profesjonell oppussing av leiligheter. Maksimer plassen og verdien. Få gratis tilbud på leilighetsoppussing.',
      keywords: 'pusse opp leilighet, leilighetsoppussing, leilighetsrenovering, oppgradering leilighet'
    },
    imagePlaceholder: 'Leilighetsoppussing',
    image: '/oppussing.jpg'
  },

  'pusse-opp-enebolig': {
    title: 'Pusse opp enebolig',
    description: 'Komplett oppussing av eneboliger med fokus på moderne komfort og energieffektivitet.',
    hero: {
      title: 'Pusse opp enebolig',
      subtitle: 'Gi ditt hjem nytt liv og moderne standard',
      description: 'Forvandl din enebolig til et moderne og energieffektivt hjem. Fra små oppgraderinger til total transformasjon - vi har løsningen for deg.',
    },
    benefits: [
      'Økt bokomfort og livskvalitet',
      'Moderne energieffektive løsninger',
      'Betydelig verdiøkning på boligen',
      'Skreddersydde famililøsninger',
      'Profesjonell prosjektledelse',
      'Garantert kvalitet og fremdrift'
    ],
    services: [
      'Fasaderenovering og isolering',
      'Vindus- og dørskifte',
      'Takarbeider og takskifte',
      'Baderom og kjøkkenrenovering',
      'Gulvlegging i alle rom',
      'Malingsarbeider inn/ut',
      'Elektriske oppgraderinger',
      'VVS-modernisering',
      'Terrassbygging',
      'Landskapsarbeider'
    ],
    pricing: {
      title: 'Investering i eneboligoppussing',
      ranges: [
        { size: 'Mindre enebolig (80-120 kvm)', price: '800.000 - 1.500.000 kr' },
        { size: 'Standard enebolig (120-180 kvm)', price: '1.200.000 - 2.500.000 kr' },
        { size: 'Stor enebolig (180-300 kvm)', price: '2.000.000 - 4.000.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Helhetsvurdering', description: 'Grundig gjennomgang av hele eiendommen' },
      { step: 2, title: 'Prioritering og planlegging', description: 'Utvikling av faseplan og prioriteringer' },
      { step: 3, title: 'Søknader og tillatelser', description: 'Håndtering av nødvendige tillatelser' },
      { step: 4, title: 'Utførelse', description: 'Systematisk gjennomføring av alle arbeider' },
      { step: 5, title: 'Koordinering', description: 'Koordinering av alle fagområder' },
      { step: 6, title: 'Sluttføring', description: 'Kvalitetssikring og overlevering' }
    ],
    content: {
      sections: [
        {
          title: 'Helhetlig tilnærming',
          text: 'En enebolig gir muligheter for omfattende forbedringer. Vi tar en helhetlig tilnærming som sikrer at alle elementer fungerer sammen optimalt.'
        },
        {
          title: 'Energieffektivitet',
          text: 'Moderne oppussing inkluderer energieffektivisering som reduserer driftskostnader og øker komforten betydelig.'
        }
      ]
    },
    guarantees: [
      '10 års garanti på strukturelle arbeider',
      '5 års garanti på VVS og elektro',
      '3 års garanti på overflater',
      'Omfattende dokumentasjon'
    ],
    testimonials: [
      {
        name: 'Familie Eriksen',
        location: 'Stavanger',
        text: 'Huset vårt fra 80-tallet ble helt forvandlet! Moderne, energieffektivt og så mye mer funksjonelt.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar det å pusse opp en enebolig?',
        answer: 'Avhengig av omfang tar det vanligvis 3-8 måneder å gjennomføre en omfattende eneboligoppussing.'
      },
      {
        question: 'Kan vi bo i huset under oppussingen?',
        answer: 'Ved planlagt fasevis oppussing kan deler av huset ofte brukes, men det avhenger av arbeidsomfanget.'
      }
    ],
    seo: {
      title: 'Pris på oppussing av enebolig - Få 3 tilbud',
      description: 'Profesjonell oppussing av eneboliger. Moderne standard og økt verdi. Få gratis tilbud på eneboligoppussing.',
      keywords: 'pusse opp enebolig, husoppussing, eneboligrenovering, husrenovering, oppgradering enebolig'
    },
    imagePlaceholder: 'Eneboligoppussing',
    image: '/renovering.jpg'
  },

  'oppussing-av-soverom': {
    title: 'Oppussing av soverom',
    description: 'Skape det perfekte soverommet med profesjonell oppussing og design.',
    hero: {
      title: 'Oppussing av soverom',
      subtitle: 'Skape ditt perfekte hvilested',
      description: 'Forvandl soverommet til et rolig og komfortabelt tilfluktssted. Vi hjelper deg med å skape det perfekte rommet for hvile og avslapning.',
    },
    benefits: [
      'Personlig og rolig atmosfære',
      'Optimalisert belysning og fargevalg',
      'Smarte oppbevaringsløsninger',
      'Forbedret søvnkvalitet',
      'Økt komfort og trivsel',
      'Profesjonell rådgivning'
    ],
    services: [
      'Malings- og tapetseringsarbeider',
      'Gulvlegging og tepper',
      'Belysningsdesign og installasjon',
      'Innbyggede garderober',
      'Vindusbehandling',
      'Elektriske oppgraderinger',
      'Isolering og lydisolering',
      'Oppbevaringsløsninger',
      'Dekorative elementer',
      'Klimakontroll'
    ],
    pricing: {
      title: 'Investering i soveromoppussing',
      ranges: [
        { size: 'Mindre soverom (10-15 kvm)', price: '80.000 - 150.000 kr' },
        { size: 'Standard soverom (15-20 kvm)', price: '120.000 - 220.000 kr' },
        { size: 'Stort soverom (20-30 kvm)', price: '180.000 - 320.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Planlegging og design', description: 'Utvikling av konsept og fargepalett' },
      { step: 2, title: 'Forberedelser', description: 'Rydding og beskyttelse av møbler' },
      { step: 3, title: 'Overflatebehandling', description: 'Maling, tapetsering eller paneling' },
      { step: 4, title: 'Gulvarbeider', description: 'Legging av nye gulv eller oppussing' },
      { step: 5, title: 'Installasjon', description: 'Montering av belysning og garderober' },
      { step: 6, title: 'Finish og styling', description: 'Siste detaljer og innredning' }
    ],
    content: {
      sections: [
        {
          title: 'Atmosfære og komfort',
          text: 'Et godt soverom skal fremme hvile og avslapning. Vi fokuserer på å skape en rolig atmosfære med riktige farger, belysning og materialer.'
        },
        {
          title: 'Funksjonalitet',
          text: 'Moderne soverom kombinerer komfort med praktiske løsninger for oppbevaring og organisering av personlige eiendeler.'
        }
      ]
    },
    guarantees: [
      '3 års garanti på malerarbeider',
      '5 års garanti på gulvlegging',
      '2 års garanti på elektriske installasjoner',
      'Kvalitetsgaranti på alle materialer'
    ],
    testimonials: [
      {
        name: 'Anne Kristin',
        location: 'Trondheim',
        text: 'Soverommet vårt ble så vakkert! Perfekt atmosfære for god søvn og avslapning.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar det å pusse opp et soverom?',
        answer: 'En soveromoppussing tar vanligvis 1-3 uker avhengig av omfanget av arbeidene.'
      },
      {
        question: 'Kan vi sove i rommet under oppussingen?',
        answer: 'Det anbefales å bruke et annet rom under oppussingen på grunn av støv, lukt og støy.'
      }
    ],
    seo: {
      title: 'Pris på oppussing av soverom - Få 3 tilbud',
      description: 'Profesjonell oppussing av soverom. Skape det perfekte hvilested. Få gratis tilbud på soveromoppussing.',
      keywords: 'oppussing soverom, soveromrenovering, soveromdesign, soveromoppgradering'
    },
    imagePlaceholder: 'Soveromoppussing',
    image: '/oppussing.jpg'
  },

  'oppussing-av-stue': {
    title: 'Oppussing av stue',
    description: 'Moderne og funksjonell stueoppussing som samler familien.',
    hero: {
      title: 'Oppussing av stue',
      subtitle: 'Hjertets rom i ditt hjem',
      description: 'Skape en stue som inviterer til samvær og trivsel. Vi hjelper deg med å designe og renovere det perfekte familierommet.',
    },
    benefits: [
      'Økt trivsel og samhold',
      'Moderne og funksjonell innredning',
      'Optimalisert rom og lysforhold',
      'Personlig stil og uttrykk',
      'Forbedret verdi på boligen',
      'Profesjonell planlegging'
    ],
    services: [
      'Åpne romløsninger',
      'Moderne belysningsdesign',
      'Gulvlegging og tepper',
      'Veggbehandling og farger',
      'Peis og varmeløsninger',
      'Innbyggede løsninger',
      'Lydanlegg og TV-vegger',
      'Vindusbehandling',
      'Møbelplassering',
      'Dekorative elementer'
    ],
    pricing: {
      title: 'Investering i stueoppussing',
      ranges: [
        { size: 'Mindre stue (20-30 kvm)', price: '150.000 - 280.000 kr' },
        { size: 'Standard stue (30-45 kvm)', price: '220.000 - 400.000 kr' },
        { size: 'Stor stue (45-70 kvm)', price: '350.000 - 600.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Konseptutvikling', description: 'Planlegging av romløsning og stil' },
      { step: 2, title: 'Forberedende arbeider', description: 'Riving og forberedelser' },
      { step: 3, title: 'Tekniske installasjoner', description: 'Elektro, lyd og belysning' },
      { step: 4, title: 'Overflater', description: 'Gulv, vegger og tak' },
      { step: 5, title: 'Innredning', description: 'Montering av innredning og løsninger' },
      { step: 6, title: 'Styling og ferdigstillelse', description: 'Siste detaljer og innflytting' }
    ],
    content: {
      sections: [
        {
          title: 'Familiens samlingspunkt',
          text: 'Stuen er hjemmets hjerte hvor familien samles. Vi designer rommet for maksimal komfort og funksjonalitet for hele familien.'
        },
        {
          title: 'Moderne løsninger',
          text: 'Dagens stuer kombinerer tradisjonell hygge med moderne teknologi og smarte løsninger for oppbevaring og underholdning.'
        }
      ]
    },
    guarantees: [
      '5 års garanti på gulvlegging',
      '3 års garanti på malerarbeider',
      '2 års garanti på elektriske installasjoner',
      'Komplett materialgaranti'
    ],
    testimonials: [
      {
        name: 'Familie Olsen',
        location: 'Kristiansand',
        text: 'Stuen vår ble perfekt! Åpen, lys og så innbydende. Hele familien elsker det nye rommet.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar en stueoppussing?',
        answer: 'Avhengig av omfang tar det vanligvis 2-5 uker å pusse opp en stue.'
      },
      {
        question: 'Kan vi bruke andre rom under oppussingen?',
        answer: 'Ja, vi planlegger arbeidet slik at resten av hjemmet kan brukes normalt så langt det er mulig.'
      }
    ],
    seo: {
      title: 'Pris på oppussing av stue - Få 3 tilbud',
      description: 'Profesjonell oppussing av stue. Moderne design og funksjonelle løsninger. Få gratis tilbud på stueoppussing.',
      keywords: 'oppussing stue, stuerenovering, stuedesign, moderne stue, familierom'
    },
    imagePlaceholder: 'Stueoppussing',
    image: '/oppussing.jpg'
  },

  'loft-og-kjellerinnredning': {
    title: 'Loft- og kjellerinnredning',
    description: 'Utnytt loft og kjeller til fullverdig boligområde med profesjonell innredning.',
    hero: {
      title: 'Loft- og kjellerinnredning',
      subtitle: 'Skape mer plass i ditt hjem',
      description: 'Forvandl ubrukte loft og kjellerområder til funksjonelle og komfortable rom. Øk boligens verdi og få mer plass til familien.',
    },
    benefits: [
      'Betydelig økning av boligverdi',
      'Mer brukbar plass til familien',
      'Energieffektive løsninger',
      'Skreddersydde romløsninger',
      'Profesjonell prosjektledelse',
      'Alle nødvendige tillatelser'
    ],
    services: [
      'Isolering og tetting',
      'Ventilasjon og klimakontroll',
      'Elektriske installasjoner',
      'VVS og oppvarming',
      'Gulvlegging og underlag',
      'Vegg- og takløsninger',
      'Trapper og adkomst',
      'Vinduer og lyskilder',
      'Brannsikkerhet',
      'Innredning og finish'
    ],
    pricing: {
      title: 'Investering i loft/kjellerinnredning',
      ranges: [
        { size: 'Mindre område (30-50 kvm)', price: '400.000 - 700.000 kr' },
        { size: 'Standard område (50-80 kvm)', price: '650.000 - 1.100.000 kr' },
        { size: 'Stort område (80-120 kvm)', price: '900.000 - 1.600.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Teknisk vurdering', description: 'Befaring og vurdering av muligheter' },
      { step: 2, title: 'Søknader', description: 'Byggetillatelse og meldinger' },
      { step: 3, title: 'Forberedelser', description: 'Isolering, ventilasjon og teknikk' },
      { step: 4, title: 'Byggearbeider', description: 'Oppføring av vegger og innredning' },
      { step: 5, title: 'Installasjoner', description: 'Elektro, VVS og oppvarming' },
      { step: 6, title: 'Ferdigstillelse', description: 'Overflater og innflytting' }
    ],
    content: {
      sections: [
        {
          title: 'Maksimer hjemmets potensial',
          text: 'Loft og kjeller representerer ofte stor ubrukt kapasitet i hjemmet. Med riktig planlegging kan disse områdene bli verdifulle tillegg til boligen.'
        },
        {
          title: 'Tekniske utfordringer',
          text: 'Innredning av loft og kjeller krever spesialkompetanse innen isolering, ventilasjon og fuktighetsforebygging for optimalt resultat.'
        }
      ]
    },
    guarantees: [
      '10 års garanti på isolering og tetting',
      '5 års garanti på VVS og elektro',
      '3 års garanti på overflater',
      'Komplett dokumentasjon og attester'
    ],
    testimonials: [
      {
        name: 'Lars og Kari',
        location: 'Drammen',
        text: 'Kjelleren vår ble til et fantastisk familierom! Perfekt temperatur og helt tett. Utmerket håndverk.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Trenger jeg byggetillatelse for loft/kjellerinnredning?',
        answer: 'Ja, vanligvis kreves det byggetillatelse. Vi hjelper med alle søknader og dokumentasjon som trengs.'
      },
      {
        question: 'Hvor lang tid tar et loft/kjellerprosjekt?',
        answer: 'Avhengig av størrelse og kompleksitet tar det vanligvis 2-4 måneder fra oppstart til ferdigstillelse.'
      }
    ],
    seo: {
      title: 'Pris på loft- og kjellerinnredning - Få 3 tilbud',
      description: 'Profesjonell innredning av loft og kjeller. Øk boligens verdi og få mer plass. Få gratis tilbud.',
      keywords: 'loftinnredning, kjellerinnredning, loftutbygging, kjellerutbygging, boligutvidelse'
    },
    imagePlaceholder: 'Loft- og kjellerinnredning',
    image: '/kjeller-loft.jpg'
  },

  'renovering-av-bad': {
    title: 'Renovering av bad',
    description: 'Komplett baderomsrenovering med moderne design og høy kvalitet.',
    hero: {
      title: 'Renovering av bad',
      subtitle: 'Ditt drømmebaderom blir virkelighet',
      description: 'Forvandl ditt gamle baderom til et moderne spa-lignende rom. Vi håndterer alt fra planlegging til ferdigstillelse.',
    },
    benefits: [
      'Moderne og funksjonelt design',
      'Økt komfort og trivsel',
      'Betydelig verdiøkning på boligen',
      'Energieffektive løsninger',
      'Profesjonell prosjektledelse',
      'Komplett garanti på alle arbeider'
    ],
    services: [
      'Komplett riving og forberedelse',
      'VVS-installasjoner og oppvarming',
      'Elektriske installasjoner og belysning',
      'Flislegging vegger og gulv',
      'Montering av sanitærutstyr',
      'Dusjløsninger og badekar',
      'Ventilasjon og avtrekk',
      'Speil og innredning',
      'Maling og finish',
      'Rydding og sluttrengjøring'
    ],
    pricing: {
      title: 'Investering i baderomsrenovering',
      ranges: [
        { size: 'Lite bad (3-5 kvm)', price: '180.000 - 320.000 kr' },
        { size: 'Standard bad (5-8 kvm)', price: '280.000 - 450.000 kr' },
        { size: 'Stort bad (8-12 kvm)', price: '400.000 - 650.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Planlegging og design', description: 'Utvikling av løsning og materialvalg' },
      { step: 2, title: 'Riving og forberedelse', description: 'Riving av eksisterende og forberedelser' },
      { step: 3, title: 'Tekniske installasjoner', description: 'VVS, elektro og ventilasjon' },
      { step: 4, title: 'Flislegging', description: 'Legging av fliser på gulv og vegger' },
      { step: 5, title: 'Montering', description: 'Montering av sanitærutstyr og innredning' },
      { step: 6, title: 'Ferdigstillelse', description: 'Finish, rydding og overlevering' }
    ],
    content: {
      sections: [
        {
          title: 'Moderne baderomsdesign',
          text: 'Vi skaper baderom som kombinerer funksjonalitet med estetikk. Moderne materialer og smart planlegging gir deg et baderom du vil elske.'
        },
        {
          title: 'Kvalitet og holdbarhet',
          text: 'Vi bruker kun førsteklasses materialer og proven metoder som sikrer at ditt nye baderom holder i mange år fremover.'
        }
      ]
    },
    guarantees: [
      '10 års garanti på VVS-arbeider',
      '5 års garanti på flisarbeid',
      '3 års garanti på elektriske installasjoner',
      '2 års garanti på overflater og finish'
    ],
    testimonials: [
      {
        name: 'Inger og Ola',
        location: 'Fredrikstad',
        text: 'Badet vårt ble helt fantastisk! Profesjonell jobb fra start til slutt. Anbefaler på det sterkeste.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar en baderomsrenovering?',
        answer: 'En komplett baderomsrenovering tar vanligvis 2-4 uker avhengig av størrelse og kompleksitet.'
      },
      {
        question: 'Kan vi bruke badet under renoveringen?',
        answer: 'Nei, badet vil ikke være tilgjengelig under renoveringen. Vi anbefaler å planlegge alternative løsninger.'
      }
    ],
    seo: {
      title: 'Pris på renovering av bad - Få 3 tilbud',
      description: 'Komplett baderomsrenovering med moderne design. Profesjonelle håndverkere. Få gratis tilbud.',
      keywords: 'baderomsrenovering, renovering bad, nytt baderom, baderomsoppussing'
    },
    imagePlaceholder: 'Baderomsrenovering',
    image: '/bad.webp'
  },

  'renovering-av-kjokken': {
    title: 'Renovering av kjøkken',
    description: 'Komplett kjøkkenrenovering med moderne design og funksjonelle løsninger.',
    hero: {
      title: 'Renovering av kjøkken',
      subtitle: 'Hjemmets hjerte får nytt liv',
      description: 'Skape det perfekte kjøkkenet for din familie. Vi kombinerer funksjonalitet med vakker design for et kjøkken du vil elske å bruke.',
    },
    benefits: [
      'Moderne og funksjonelt design',
      'Optimalisert arbeidsflyt',
      'Økt oppbevaringsplass',
      'Energieffektive løsninger',
      'Betydelig verdiøkning',
      'Skreddersydde løsninger'
    ],
    services: [
      'Planlegging og design',
      'Riving av eksisterende kjøkken',
      'VVS og elektriske installasjoner',
      'Gulvlegging og flisarbeid',
      'Montering av kjøkkeninnredning',
      'Benkeplater og oppstank',
      'Hvitevarer og ventilasjon',
      'Belysning og elektriske punkter',
      'Maling og finish',
      'Rydding og sluttrengjøring'
    ],
    pricing: {
      title: 'Investering i kjøkkenrenovering',
      ranges: [
        { size: 'Lite kjøkken (8-12 kvm)', price: '250.000 - 450.000 kr' },
        { size: 'Standard kjøkken (12-18 kvm)', price: '400.000 - 700.000 kr' },
        { size: 'Stort kjøkken (18-25 kvm)', price: '600.000 - 1.000.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Design og planlegging', description: 'Utvikling av kjøkkenløsning og layout' },
      { step: 2, title: 'Riving og forberedelse', description: 'Riving av gammelt kjøkken og forberedelser' },
      { step: 3, title: 'Installasjoner', description: 'VVS, elektro og ventilasjon' },
      { step: 4, title: 'Overflater', description: 'Gulv, vegger og tak' },
      { step: 5, title: 'Montering', description: 'Kjøkkeninnredning og hvitevarer' },
      { step: 6, title: 'Ferdigstillelse', description: 'Finish, testing og overlevering' }
    ],
    content: {
      sections: [
        {
          title: 'Funksjonelt kjøkkendesign',
          text: 'Et godt kjøkken kombinerer estetikk med praktisk funksjonalitet. Vi designer kjøkken som gjør matlaging til en glede.'
        },
        {
          title: 'Kvalitetsmaterialer',
          text: 'Vi bruker kun materialer av høy kvalitet som tåler daglig bruk og gir deg et kjøkken som holder i mange år.'
        }
      ]
    },
    guarantees: [
      '5 års garanti på kjøkkeninnredning',
      '10 års garanti på VVS-arbeider',
      '3 års garanti på elektriske installasjoner',
      '2 års garanti på overflater'
    ],
    testimonials: [
      {
        name: 'Anne og Per',
        location: 'Tønsberg',
        text: 'Kjøkkenet vårt ble akkurat som vi drømte om! Fantastisk arbeidsflyt og så vakkert. Tusen takk!',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar en kjøkkenrenovering?',
        answer: 'En komplett kjøkkenrenovering tar vanligvis 3-6 uker avhengig av størrelse og kompleksitet.'
      },
      {
        question: 'Kan vi lage mat under renoveringen?',
        answer: 'Vi anbefaler å sette opp et midlertidig kjøkken i en annen del av hjemmet under renoveringen.'
      }
    ],
    seo: {
      title: 'Pris på renovering av kjøkken - Få 3 tilbud',
      description: 'Komplett kjøkkenrenovering med moderne design og funksjonelle løsninger. Få gratis tilbud.',
      keywords: 'kjøkkenrenovering, renovering kjøkken, nytt kjøkken, kjøkkenoppussing'
    },
    imagePlaceholder: 'Kjøkkenrenovering',
    image: '/kjokken.jpg'
  },

  'montering-av-kjokken': {
    title: 'Montering av kjøkken',
    description: 'Profesjonell montering av kjøkkeninnredning med presisjon og kvalitet.',
    hero: {
      title: 'Montering av kjøkken',
      subtitle: 'Ekspertmontering av ditt drømmekjøkken',
      description: 'Vi monterer kjøkkenet ditt med høyeste presisjon og kvalitet. Fra IKEA-kjøkken til skreddersydde løsninger.',
    },
    benefits: [
      'Profesjonell og presis montering',
      'Erfaring med alle kjøkkenmerker',
      'Riktig verktøy og teknikker',
      'Garanti på monteringsarbeid',
      'Rask og effektiv gjennomføring',
      'Rydding og opprydning inkludert'
    ],
    services: [
      'IKEA kjøkkenmontering',
      'Skreddersydde kjøkken',
      'Benkeplatemontasje',
      'Oppstank og flislegging',
      'Hvitevaremontering',
      'Ventilasjon og avtrekk',
      'Belysning under skap',
      'Vannkran og oppvaskmaskin',
      'Justering og kalibrering',
      'Sluttrengjøring'
    ],
    pricing: {
      title: 'Investering i kjøkkenmontering',
      ranges: [
        { size: 'IKEA kjøkken (standard)', price: '25.000 - 45.000 kr' },
        { size: 'Skreddersydd kjøkken', price: '35.000 - 65.000 kr' },
        { size: 'Luksuriøst kjøkken', price: '50.000 - 85.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Planlegging', description: 'Gjennomgang av tegninger og materialer' },
      { step: 2, title: 'Forberedelse', description: 'Klargjøring av arbeidsområde' },
      { step: 3, title: 'Montering av skap', description: 'Montering av over- og underskap' },
      { step: 4, title: 'Benkeplate', description: 'Montering og tilpasning av benkeplate' },
      { step: 5, title: 'Hvitevarer', description: 'Tilkobling av hvitevarer og ventilasjon' },
      { step: 6, title: 'Finish', description: 'Justering og sluttrengjøring' }
    ],
    content: {
      sections: [
        {
          title: 'Presisjon og kvalitet',
          text: 'Kjøkkenmontering krever høy presisjon og erfaring. Vi sikrer at alt passer perfekt og fungerer optimalt.'
        },
        {
          title: 'Alle kjøkkenmerker',
          text: 'Vi har erfaring med montering av alle kjøkkenmerker, fra IKEA til eksklusive skreddersydde løsninger.'
        }
      ]
    },
    guarantees: [
      '3 års garanti på monteringsarbeid',
      '1 års garanti på justeringer',
      'Garanti på alle tilkoblinger',
      'Oppfølging ved eventuelle problemer'
    ],
    testimonials: [
      {
        name: 'Kari Nilsen',
        location: 'Sandnes',
        text: 'Perfekt montering av IKEA-kjøkkenet vårt! Alt passer som det skal og ser så profesjonelt ut.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar kjøkkenmontering?',
        answer: 'Et standard kjøkken tar vanligvis 2-4 dager å montere, avhengig av størrelse og kompleksitet.'
      },
      {
        question: 'Kan dere montere kjøkken fra alle leverandører?',
        answer: 'Ja, vi monterer kjøkken fra alle leverandører, inkludert IKEA, Sigdal, Drømmekjøkkenet og skreddersydde løsninger.'
      }
    ],
    seo: {
      title: 'Pris på montering av kjøkken - Få 3 tilbud',
      description: 'Profesjonell montering av kjøkken fra alle leverandører. IKEA, Sigdal og skreddersydde løsninger.',
      keywords: 'kjøkkenmontering, montering kjøkken, IKEA montering, kjøkkeninstallasjon'
    },
    imagePlaceholder: 'Kjøkkenmontering',
    image: '/kjokken.jpg'
  },

  'trapp-og-trapperehabilitering': {
    title: 'Trapp og trapperehabilitering',
    description: 'Renovering og rehabilitering av trapper for sikkerhet og estetikk.',
    hero: {
      title: 'Trapp og trapperehabilitering',
      subtitle: 'Sikre og vakre trapper til ditt hjem',
      description: 'Renover eller rehabiliter trappen din for økt sikkerhet og estetikk. Vi håndterer alt fra små reparasjoner til komplett nybygging.',
    },
    benefits: [
      'Økt sikkerhet og stabilitet',
      'Moderne og tidløst design',
      'Tilpasset ditt hjem og stil',
      'Økt verdi på eiendommen',
      'Profesjonell utførelse',
      'Alle materialer og stiler'
    ],
    services: [
      'Trapperenovering og oppussing',
      'Rekkverk og gelender',
      'Trinn og settetrinn',
      'Understell og bærekonstruksjon',
      'Overflatebehandling og maling',
      'Belysning i trapp',
      'Sikkerhetstiltak',
      'Tilpasning til funksjonshemmede',
      'Lyddemping',
      'Vedlikehold og reparasjoner'
    ],
    pricing: {
      title: 'Investering i trapperenovering',
      ranges: [
        { size: 'Mindre reparasjoner', price: '15.000 - 35.000 kr' },
        { size: 'Trapperenovering', price: '45.000 - 85.000 kr' },
        { size: 'Ny trapp komplett', price: '80.000 - 150.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Befaring og vurdering', description: 'Vurdering av tilstand og muligheter' },
      { step: 2, title: 'Planlegging', description: 'Design og materialvalg' },
      { step: 3, title: 'Forberedelse', description: 'Beskyttelse og klargjøring' },
      { step: 4, title: 'Utførelse', description: 'Renovering eller nybygging' },
      { step: 5, title: 'Finish', description: 'Overflatebehandling og detaljer' },
      { step: 6, title: 'Kvalitetssikring', description: 'Testing og godkjenning' }
    ],
    content: {
      sections: [
        {
          title: 'Sikkerhet først',
          text: 'En trapp må først og fremst være sikker. Vi sikrer at alle trapper oppfyller gjeldende sikkerhetskrav og byggeregler.'
        },
        {
          title: 'Design og funksjonalitet',
          text: 'Moderne trapper kombinerer sikkerhet med vakker design som passer inn i hjemmets arkitektur og stil.'
        }
      ]
    },
    guarantees: [
      '10 års garanti på bærekonstruksjon',
      '5 års garanti på overflatebehandling',
      '3 års garanti på rekkverk og gelender',
      'Komplett sikkerhetsgodkjenning'
    ],
    testimonials: [
      {
        name: 'Bjørn Hansen',
        location: 'Lillehammer',
        text: 'Den gamle trappen vår ble totalt forvandlet! Trygg, vakker og perfekt tilpasset hjemmet vårt.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar trapperenovering?',
        answer: 'Avhengig av omfang tar trapperenovering vanligvis 1-3 uker fra oppstart til ferdigstillelse.'
      },
      {
        question: 'Kan vi bruke trappen under renoveringen?',
        answer: 'Vi planlegger arbeidet slik at trappen kan brukes så mye som mulig, men det kan være perioder hvor den ikke er tilgjengelig.'
      }
    ],
    seo: {
      title: 'Pris på trapp og trapperehabilitering - Få 3 tilbud',
      description: 'Profesjonell renovering og rehabilitering av trapper. Økt sikkerhet og vakker design.',
      keywords: 'trapperenovering, trapperehabilitering, ny trapp, rekkverk, gelender'
    },
    imagePlaceholder: 'Trapperenovering',
    image: '/renovering.jpg'
  },

  'bytte-av-kledning': {
    title: 'Bytte av kledning',
    description: 'Profesjonell utskifting av fasadekledning for et moderne og beskyttet hjem.',
    hero: {
      title: 'Bytte av kledning',
      subtitle: 'Gi fasaden din et helt nytt utseende',
      description: 'Skift ut gammel fasadekledning med moderne og vedlikeholdsfrie materialer. Beskytt hjemmet ditt og øk verdien betydelig.',
    },
    benefits: [
      'Moderne og vedlikeholdsfritt utseende',
      'Bedre isolasjon og energieffektivitet',
      'Økt beskyttelse mot vær og vind',
      'Betydelig verdiøkning på boligen',
      'Reduserte vedlikeholdskostnader',
      'Profesjonell utførelse og garanti'
    ],
    services: [
      'Riving av gammel kledning',
      'Vurdering av underliggende konstruksjon',
      'Isolering og dampsperre',
      'Montering av ny kledning',
      'Vinduer og dørkarmer',
      'Hjørneløsninger og profiler',
      'Maling og overflatebehandling',
      'Takskjegg og vindskier',
      'Rydding og avfallshåndtering',
      'Kvalitetssikring og dokumentasjon'
    ],
    pricing: {
      title: 'Investering i ny fasadekledning',
      ranges: [
        { size: 'Mindre hus (100-150 kvm)', price: '250.000 - 400.000 kr' },
        { size: 'Standard hus (150-200 kvm)', price: '350.000 - 550.000 kr' },
        { size: 'Stort hus (200-300 kvm)', price: '500.000 - 800.000 kr' }
      ]
    },
    process: [
      { step: 1, title: 'Befaring og planlegging', description: 'Vurdering av eksisterende kledning og behov' },
      { step: 2, title: 'Materialvalg', description: 'Utvelgelse av kledning og farger' },
      { step: 3, title: 'Riving', description: 'Fjerning av gammel kledning' },
      { step: 4, title: 'Forberedelse', description: 'Isolering og underlagskonstruksjon' },
      { step: 5, title: 'Montering', description: 'Montering av ny kledning' },
      { step: 6, title: 'Finish', description: 'Detaljer, maling og sluttføring' }
    ],
    content: {
      sections: [
        {
          title: 'Moderne kledningsmaterialer',
          text: 'Vi tilbyr et bredt utvalg av moderne kledningsmaterialer som tre, fiber, metall og kompositt. Alle materialer er valgt for holdbarhet og estetikk.'
        },
        {
          title: 'Energieffektivitet',
          text: 'Utskifting av kledning gir mulighet for oppgradering av isolasjon, noe som reduserer energiforbruk og øker komforten i hjemmet.'
        }
      ]
    },
    guarantees: [
      '20 års garanti på kledningsmaterialer',
      '10 års garanti på monteringsarbeid',
      '5 års garanti på maling og finish',
      'Komplett værbestandighetsgaranti'
    ],
    testimonials: [
      {
        name: 'Knut og Astrid',
        location: 'Hamar',
        text: 'Huset vårt ser helt nytt ut! Fantastisk håndverk og den nye kledningen er så vakker. Anbefaler på det sterkeste.',
        rating: 5
      }
    ],
    faq: [
      {
        question: 'Hvor lang tid tar det å bytte kledning?',
        answer: 'Avhengig av husets størrelse tar det vanligvis 2-4 uker å bytte fasadekledning på et hus.'
      },
      {
        question: 'Kan vi bo i huset under arbeidet?',
        answer: 'Ja, dere kan bo i huset under arbeidet. Vi beskytter alle åpninger og sikrer at hjemmet forblir tett og komfortabelt.'
      }
    ],
    seo: {
      title: 'Pris på bytte av kledning - Få 3 tilbud',
      description: 'Profesjonell utskifting av fasadekledning. Moderne materialer og økt verdi på boligen.',
      keywords: 'bytte kledning, fasadekledning, kledningsskifte, ny fasade, utvendig kledning'
    },
    imagePlaceholder: 'Fasadekledning',
    image: '/tak-fasade.jpg'
  }
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categoryData[slug]

  if (!category) {
    return {
      title: 'Side ikke funnet | Oppussing Hjelpen',
      description: 'Siden du leter etter finnes ikke.'
    }
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords,
    alternates: {
      canonical: `https://oppussinghjelpen.no/tjenester/${slug}`
    },
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      url: `https://oppussinghjelpen.no/tjenester/${slug}`,
      siteName: 'Oppussing Hjelpen',
      images: [
        {
          url: `https://oppussinghjelpen.no${category.image}`,
          width: 1200,
          height: 630,
          alt: category.imagePlaceholder,
        }
      ],
      locale: 'no_NO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: category.seo.title,
      description: category.seo.description,
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

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = categoryData[slug]

  if (!category) {
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
                Pris på {category.title.toLowerCase()}
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
                Få 3 tilbud nå
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src={category.image}
                  alt={category.imagePlaceholder}
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
              Slik fungerer det
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              En enkel 4-trinns prosess som sikrer at du får det beste resultatet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { step: '1', title: 'Registrer prosjekt', desc: 'Beskriv ditt prosjekt i vårt enkle skjema' },
              { step: '2', title: 'Få 3 tilbud', desc: 'Kvalitetssikrede entreprenører kontakter deg' },
              { step: '3', title: 'Sammenlign', desc: 'Velg det tilbudet som passer deg best' },
              { step: '4', title: 'Få jobben gjort', desc: 'Profesjonell utførelse med garanti' }
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
              Start prosessen nå
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alt du trenger å vite om {category.title.toLowerCase()}</h2>
          
          <div className="bg-green-50 border-l-4 border-green-700 p-6 mb-8">
            <p className="text-lg text-gray-800 font-semibold">
              💡 <strong>Eksperttips:</strong> {category.content.process}
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Hvorfor vi er ditt beste valg</h3>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            {category.content.why}
          </p>

          <div className="bg-gradient-to-r from-green-700/10 to-green-100/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏆 Garantier og trygghet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Eksperter</h4>
                  <p className="text-gray-700">På alle arbeider og materialer</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Forsikret</h4>
                  <p className="text-gray-700">Alle entreprenører er fullt forsikret</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Kvalitetssikret</h4>
                  <p className="text-gray-700">Kun godkjente og erfarne fagfolk</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Fast kontakt</h4>
                  <p className="text-gray-700">Én person følger deg hele veien</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-12 py-6 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 cursor-pointer inline-block">
              Få garantert kvalitet - Start nå
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Våre {category.title.toLowerCase()} tjenester
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
              Hva sier våre kunder?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Over 1000 fornøyde kunder har fått sitt drømmeprosjekt realisert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {category.testimonials.map((testimonial: { name: string; location: string; text: string; rating: number }, index: number) => (
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
              Bli vår neste fornøyde kunde
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ofte stilte spørsmål
            </h2>
            <p className="text-xl text-gray-700">
              Svar på de vanligste spørsmålene om {category.title.toLowerCase()}
            </p>
          </div>

          <div className="space-y-6 mb-16">
            {category.faq.map((item: { question: string; answer: string }, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center mr-4 text-white text-sm font-bold">
                    Q
                  </span>
                  {item.question}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed ml-12">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Har du flere spørsmål? Vi svarer gjerne!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrer-prosjekt" className="bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-center">
                Få tilbud nå
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klar til å starte ditt {category.title.toLowerCase()} prosjekt?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ikke vent lenger! Få 3 gratis tilbud fra våre kvalitetssikrede entreprenører og start reisen mot ditt drømmeprosjekt i dag.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/registrer-prosjekt" className="bg-white text-green-700 px-12 py-6 rounded-full hover:bg-gray-100 transition-all duration-200 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 cursor-pointer text-center">
              JA, jeg vil ha tilbud!
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-green-200 text-lg">
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
              <span>Svar innen 24 timer</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Kun kvalitetssikrede fagfolk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {category.title} tjenester i hele Norge
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Vi har kvalitetssikrede entreprenører i alle større byer og tettsteder
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
            ].map((cityName) => {
              const citySlug = cityName.toLowerCase().replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/å/g, 'a')
              return (
                <Link
                  key={cityName}
                  href={`/tjenester/${slug}/${citySlug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-700 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
              
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-700 transition-colors">
                    <svg className="w-4 h-4 text-green-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-green-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">
                    i {cityName}
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

    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map(slug => ({ slug }))
}