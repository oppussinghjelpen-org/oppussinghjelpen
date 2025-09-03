'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])



  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">Oppussing</span>
              <span className="text-base md:text-lg font-medium text-gray-600 -mt-1 group-hover:text-green-700 transition-colors duration-300">Hjelpen</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/kategorier" className="px-6 py-3 text-gray-700 hover:text-green-700 hover:bg-green-700/10 rounded-xl transition-all duration-200 font-semibold">
              Kategorier
            </Link>
            <Link href="/om-oss" className="px-6 py-3 text-gray-700 hover:text-green-700 hover:bg-green-700/10 rounded-xl transition-all duration-200 font-semibold">
              Om oss
            </Link>

            <Link href="/kontakt" className="px-6 py-3 text-gray-700 hover:text-green-700 hover:bg-green-700/10 rounded-xl transition-all duration-200 font-semibold">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {isMounted && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full transition-all duration-200"
                aria-label="Åpne mobilmeny"
                aria-expanded={isMenuOpen}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMounted && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-xl rounded-b-2xl">
              <Link href="/kategorier" className="block px-4 py-4 text-gray-700 hover:text-green-700 hover:bg-green-700/10 rounded-xl transition-colors font-semibold">
                Kategorier
              </Link>
              <Link href="/om-oss" className="block px-4 py-4 text-gray-700 hover:text-green-700 hover:bg-green-700/10 rounded-xl transition-colors font-semibold">
                Om oss
              </Link>

              <Link href="/kontakt" className="block px-4 py-4 text-gray-700 hover:text-green-700 hover:bg-green-700/10 rounded-xl transition-colors font-semibold">
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
