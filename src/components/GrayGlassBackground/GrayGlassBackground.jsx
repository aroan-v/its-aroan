'use client'
import React from 'react'
import styled from 'styled-components'

function GrayGlassBackground() {
  return <GlassBackground />
}

export default GrayGlassBackground

export const GlassBackground = styled.div`
  position: absolute;
  inset: 0; /* fill parent */
  background: linear-gradient(#fff2, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  z-index: 29;
  backdrop-filter: blur(10px);
  transition: all 0.7s ease;
  pointer-events: none;
`
