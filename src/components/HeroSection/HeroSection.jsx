'use client'
import React from 'react'
import DaisyWrapper from '../DaisyWrapper'
import NightContainer from '../NightContainer'
import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '../ui/button'

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  height: 95%;

  /* Background gradient with smooth blending */
  background: radial-gradient(
    102.07% 102.07% at 51.11% 1.13%,
    rgba(0, 0, 0, 0) 0%,
    #000000 47.36%,
    #d30104 78.29%,
    #ff0004 85.89%,
    #ffb800 100%
  );

  border-radius: 0px 0px 50px 50px;
  /* Rounded bottom corners */
  border-radius: 0 0 50px 50px;
  @media (max-width: 768px) {
    background-size: 140% 100%;
    background-position: center top;
  }

  pointer-events: none;
  z-index: -1;
`

function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/aroan-logo.svg" alt="Aroan's logo" className="h-auto w-1/2 max-w-lg" />

      <div className="from-primary to-secondary relative rounded-full bg-gradient-to-b p-[2px]">
        <div className="rounded-full bg-black px-4 py-2">Junior Next.js Developer</div>
      </div>

      {/* Description */}
      <p className="text-foreground w-[80%] max-w-3xl text-center text-lg leading-tight text-shadow-sm">
        Turning ideas into projects through logical problem-solving, creative experimentation, and
        attention to detail. Builds on strong fundamentals to create modern, interactive
        applications.
      </p>

      <Button asChild className="bg-white text-black hover:scale-105 hover:bg-white">
        <a href="#projects">View Projects</a>
      </Button>

      {/* Background */}
      <HeroBackground />
    </div>
  )
}

export default HeroSection
