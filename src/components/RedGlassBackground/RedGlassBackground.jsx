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
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -30;
`

const BlackGlassBackground = ({ children }) => {
  return <StyledBlackGlass>{children}</StyledBlackGlass>
}

const StyledBlackGlass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    135deg,
    rgba(92, 3, 3, 0.434) 0%,
    rgba(0, 0, 0, 0.17) 50%,
    rgba(117, 0, 0, 0.431) 100%
  );

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -30;
`

export default RedGlassBackground
export { BlackGlassBackground }
