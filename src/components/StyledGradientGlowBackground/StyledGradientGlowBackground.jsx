'use client'
import React from 'react'
import styled from 'styled-components'

function StyledGradientGlowBackground({ children }) {
  return <GradientContainer>{children}</GradientContainer>
}

export default StyledGradientGlowBackground

export const GradientContainer = styled.div`
  position: absolute;
  width: 820px;
  height: 820px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(211, 1, 4, 0.9) 0%,
    rgba(255, 154, 45, 0.46) 60%,
    transparent 100%
  );
  filter: blur(120px);
  opacity: 0.8;
  pointer-events: none;
  z-index: -30;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSdub2lzZSc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNScgbnVtT2N0YXZlcz0nNScvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCnub2lzZScpJyBvcGFjaXR5PScwLjA1Jy8+PC9zdmc+');
    background-repeat: repeat;
    mix-blend-mode: overlay;
    opacity: 0.2;
  }
`
