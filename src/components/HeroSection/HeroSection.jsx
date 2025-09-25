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
  height: 600px;

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
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center space-y-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/aroan-logo.svg" alt="Aroan's logo" className="h-auto w-1/2 max-w-lg" />

      <p className="w-[80%] max-w-3xl text-center text-lg leading-tight text-white">
        Turning ideas into projects through logical problem-solving, creative experimentation, and
        attention to detail. Builds on strong fundamentals to create modern, interactive
        applications.
      </p>

      <Button>View Projects</Button>
      <HeroBackground />
    </div>
  )

  return (
    <DaisyWrapper>
      <div className="ds-hero bg-base-200 min-h-screen">
        <div className="ds-hero-content text-center">
          <div className="max-w-md space-y-6">
            <div>
              <h1 className="text-5xl font-bold">Josh</h1>
              <p className="text-muted-foreground text-xl">Junior React / Next.js Developer</p>
            </div>

            <p className="text-lg leading-relaxed">
              Turning ideas into projects through logical problem-solving, creative experimentation,
              and attention to detail. Builds on strong fundamentals to create modern, interactive
              applications.
            </p>

            <button className="ds-btn ds-btn-primary">View my work</button>
          </div>
        </div>
      </div>
    </DaisyWrapper>
  )
}

export default HeroSection
