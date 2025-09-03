import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Innovena Nettverk - Oppussing Hjelpen',
  description: 'Se vårt nettverk av kvalitetssikrede entreprenører og samarbeidspartnere.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Nettverk() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Innovena Nettverk
        </h1>
        
        <div id="innovena-network">
          {/* Iframe widget - always visible */}
          <iframe 
            src="https://innovena.no/nettverk/embed" 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="Innovena Nettverk"
            className="rounded-xl shadow-lg border border-gray-200"
          >
            <a href="https://innovena.no/nettverk" className="text-green-700 hover:text-green-800 font-semibold">
              Se Innovena Nettverket
            </a>
          </iframe>
          
          {/* JavaScript widget for enhanced functionality */}
          <script src="https://innovena.no/nettverk/widget.js"></script>
        </div>
      </div>
    </div>
  )
}
