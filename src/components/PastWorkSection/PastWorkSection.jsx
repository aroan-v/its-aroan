import React from 'react'
import PaddingWrapper from '../PaddingWrapper'
import { pastWorkContent } from '@/data/pastWorksContent'
import Image from 'next/image'
import GlassBackground from '../GlassBackground'

function PastWorkSection() {
  const currentOrg = pastWorkContent[0]
  const currentOrg2 = pastWorkContent[1]
  const currentOrg3 = pastWorkContent[2]

  return (
    <PaddingWrapper as="section" id="projects" className="relative mx-auto w-full space-y-8 border">
      <div className="mx-auto mb-16 max-w-2xl px-8 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-foreground text-shadow-md">Past Creative Works</span>
        </h2>
        <p className="text-foreground text-lg leading-tight text-shadow-sm">
          Before diving into web development, I honed my craft in design. Here are some of the
          companies, programs, and partners I worked with as a Creatives Manager, creating visuals,
          branding, and campaigns that built my creative foundation.
        </p>
      </div>

      <div className="border-red border text-center">
        <span className="text-xl font-bold">{currentOrg.title}</span>
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center">
          {currentOrg.entities.map((obj, index) => (
            <Image
              // className="border border-white"
              key={obj.name + index}
              src={obj.src}
              alt={obj.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>

      <div className="border-red border text-center">
        <span className="text-xl font-bold">{currentOrg2.title}</span>
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center">
          {currentOrg2.entities.map((obj, index) => (
            <Image
              // className="border border-white"
              key={obj.name + index}
              src={obj.src}
              alt={obj.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>

      <div className="border-red border text-center">
        <span className="text-xl font-bold">{currentOrg3.title}</span>
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center">
          {currentOrg3.entities.map((obj, index) => (
            <Image
              // className="border border-white"
              key={obj.name + index}
              src={obj.src}
              alt={obj.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>

      <GlassBackground />
    </PaddingWrapper>
  )
}

export default PastWorkSection
