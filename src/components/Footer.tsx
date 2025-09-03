import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Oppussing</span>
                <span className="text-lg font-medium text-gray-400 -mt-1">Hjelpen</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Vi kobler deg til kvalitetssikrede entreprenører for ditt neste renoveringsprosjekt. 
              Få informasjonen du trenger for å gjøre smarte valg i boligen din.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Hurtiglenker</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/om-oss" className="text-gray-300 hover:text-green-700 transition-colors text-lg">
                  Om oss
                </Link>
              </li>

              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-green-700 transition-colors text-lg">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Kontakt</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-lg">info@oppussinghjelpen.no</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-lg">+47 123 45 678</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Oslo, Norge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg mb-2">
            © 2020-2025 Oppussing Hjelpen. Alle rettigheter forbeholdt.
          </p>
          <p className="text-gray-500">
            En del av{' '}
            <a 
              href="https://www.leadportalen.no/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-600 transition-colors font-medium cursor-pointer"
            >
              Leadportalen.no
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
