'use client'
import React from 'react'
import styled from 'styled-components'

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  height: 600px;

  /* Background gradient with smooth blending */
  background: radial-gradient(
    108.05% 108.05% at 51.11% 103.3%,
    rgba(0, 0, 0, 0) 0%,
    #000000 47.36%,
    #d30104 78.29%,
    #ff0004 85.89%,
    #ffb800 100%
  );
  border-radius: 50px 50px 0px 0px;

  @media (max-width: 768px) {
    background-size: 140% 100%;
    background-position: center top;
  }

  pointer-events: none;
  z-index: -1;
`

export const SunsetBackgroundBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 95%;
  left: 50%;
  transform: translateX(-50%);
  height: 600px;

  /* Background gradient with smooth blending */
  background: radial-gradient(
    122.07% 102.07% at 51.11% 11.13%,
    rgba(0, 0, 0, 0) 0%,
    #000000 47.36%,
    #d30104 78.29%,
    #ff0004 85.89%,
    #ffb800 100%
  );

  /* Rounded bottom corners */
  border-radius: 0 0 50px 50px;

  background-size: 100% 140%;
  background-position: center top;

  pointer-events: none;
  z-index: -15;
`

function StyledSunsetBackground() {
  return <HeroBackground />
}

export function StyledSunsetBackgroundBottom() {
  return <SunsetBackgroundBottom />
}

export default StyledSunsetBackground
