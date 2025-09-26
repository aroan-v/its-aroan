'use client'
import React from 'react'
import styled from 'styled-components'

const RedGlassBackground = ({ children }) => {
  return <StyledGlass>{children}</StyledGlass>
}

const StyledGlass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(#880d0d3c, transparent);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -30;
`

export default RedGlassBackground
