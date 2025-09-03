import { MetadataRoute } from 'next'

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

const services = [
  // Main categories
  'tak-og-fasade', 'oppussing', 'renovering', 'garasje', 'baderom', 'loft-og-kjeller', 'nybygg',
  
  // Specific services
  'gulvsliping', 'gulvlegging', 'maling-innendors', 'fasademaling', 'sparkling-tapetsering', 
  'taktekking', 'rorleggerarbeid', 'elektrikerarbeid', 'flislegging', 'snekkertjenester', 
  'tomrerarbeid', 'etterisolering', 'skifte-av-vinduer', 'skifte-av-dorer', 'drenering', 
  'bygging-av-terrasse', 'lydisolering', 'gipstak-og-takplater', 'stoping-av-gulv',
  
  // Additional services
  'totalrenovering-av-bolig', 'pusse-opp-leilighet', 'pusse-opp-enebolig', 'oppussing-av-soverom',
  'oppussing-av-stue', 'loft-og-kjellerinnredning', 'renovering-av-bad', 'renovering-av-kjokken',
  'montering-av-kjokken', 'trapp-og-trapperehabilitering', 'bytte-av-kledning'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oppussinghjelpen.no'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/om-oss`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },

    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/registrer-prosjekt`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/takk`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/kategorier`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ]

  // Service pages
  const servicePages = services.map(service => ({
    url: `${baseUrl}/tjenester/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // City-specific service pages
  const cityServicePages = []
  for (const service of services) {
    for (const city of cities) {
      cityServicePages.push({
        url: `${baseUrl}/tjenester/${service}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...cityServicePages
  ]
}
