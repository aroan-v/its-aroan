import React from 'react'
import PaddingWrapper from '../PaddingWrapper'
import { pastWorkContent } from '@/data/pastWorksContent'
import Image from 'next/image'
import { BlackGlassBackground } from '../RedGlassBackground'

function PastWorkSection() {
  return (
    <PaddingWrapper
      as="section"
      id="projects"
      className="relative mb-30 flex min-w-screen flex-col items-center gap-8 overflow-x-clip"
    >
      {/* Heading */}
      <div className="max-w-5xl px-8 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-foreground text-shadow-md">Past Creative Works</span>
        </h2>
        <p className="text-foreground text-md leading-tight text-shadow-sm md:text-lg">
          Before diving into web development, I honed my craft in design. Here are some of the
          companies, programs, and partners I worked with as a Creatives Manager, creating visuals,
          branding, and campaigns that built my creative foundation.
        </p>
      </div>

      {/* Logo Container */}
      {pastWorkContent.map((obj, index) => (
        <div key={index} className="relative w-full max-w-2xl p-3 pt-6">
          {/* Header */}
          <div className="mx-auto w-[80%] pb-3 text-center text-wrap text-shadow-md">
            <div className="text-md font-bold">{obj.title}</div>
            <p className="text-sm leading-tight">{obj.description}</p>
          </div>

          {/* Logo container */}
          <div className="mx-auto flex flex-wrap justify-center">
            {obj?.entities.map((obj, index) => (
              <Image
                // className="grayscale hover:grayscale-0"
                key={obj.name + index}
                src={obj.src}
                alt={obj.alt}
                width={100}
                height={100}
              />
            ))}
          </div>
          <BlackGlassBackground />
          {/* <GrayGlassBackground /> */}
        </div>
      ))}

      {/* <div className="relative">
        <StyledGradientGlowBackground>Test</StyledGradientGlowBackground>
      </div> */}

      {/* Image bg */}
      <div className="absolute -top-[5%] left-1/2 -z-31 aspect-square w-full -translate-x-1/2">
        <Image
          className="rotate-30"
          src="/past-work-bg.png"
          alt="Past work gradient background"
          fill
          sizes="100vw"
        />
      </div>
    </PaddingWrapper>
  )
}

export default PastWorkSection
