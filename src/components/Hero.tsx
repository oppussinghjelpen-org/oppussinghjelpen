'use client'

import { useState } from 'react'
import Image from 'next/image'
import ProjectModal from './ProjectModal'

const categories = [
  {
    name: 'Tak & Fasade',
    href: '/tjenester/tak-og-fasade',
    icon: '/family-house-facade-svgrepo-com-1.svg'
  },
  {
    name: 'Oppussing',
    href: '/tjenester/oppussing',
    icon: '/paintbrush-svgrepo-com-1.svg'
  },
  {
    name: 'Renovering',
    href: '/tjenester/renovering',
    icon: '/renovering.svg'
  },
  {
    name: 'Garasje',
    href: '/tjenester/garasje',
    icon: '/garage-svgrepo-com-1.svg'
  },
  {
    name: 'Baderom',
    href: '/tjenester/baderom',
    icon: '/shower-svgrepo-com-1.svg'
  },
  {
    name: 'Loft & Kjeller',
    href: '/tjenester/loft-og-kjeller',
    icon: '/loft.svg'
  },
  {
    name: 'Nybygg',
    href: '/tjenester/nybygg',
    icon: '/nybygg.svg'
  },
  {
    name: 'Annet',
    href: '/registrer-prosjekt',
    icon: '/annet.svg'
  }
]

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCategory('')
  }

  return (
    <>
      <section className="hero bg-[#f8f8f8] lg:py-[190px] py-[125px]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center max-w-[740px] mx-auto text-4xl md:text-5xl font-semibold text-gray-900 mb-0">
            Få 3 tilbud til ditt neste byggeprosjekt
          </h1>
          
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[15px] gap-3 lg:mt-12 mt-8 max-w-[940px] mx-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category.name)}
                className="cursor-pointer text-center hover:scale-105 hover:shadow-md ease-in-out duration-200 bg-white lg:h-[126px] h-[110px] flex flex-col border border-[#eaeaea] items-center justify-center"
              >
                <div className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]">
                  <div className="flex lg:min-h-[40px] min-h-[30px]">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={40}
                      height={40}
                      className="mx-auto"
                    />
                  </div>
                </div>
                
                <p className="lg:text-[18px] text-[17px] lg:leading-[26px] lg:mt-[10px] mt-[8px] text-gray-900">
                  {category.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        category={selectedCategory}
      />
    </>
  )
}
