'use client'
import React from 'react'
import styled from 'styled-components'

function StyledGradientGlowBackground({ children }) {
  return <GradientContainer>{children}</GradientContainer>
}

export default StyledGradientGlowBackground

const GradientContainer = styled.div`
  position: absolute;
  width: 820px;
  height: 820px;
  top: -5%;
  border-radius: 50%;
  pointer-events: none;
  z-index: -31;

  /* The gradient blob */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(
      95% 95% at 40% 80%,
      rgba(0, 0, 0, 0) 0%,
      #000000 45%,
      #ff2400 70%,
      #ff7300 80%,
      #ffd700 85%,
      #fff6b7 100%
    );
    filter: blur(00px);
    opacity: 0.8;
  }
`
