'use client'
import styled from 'styled-components'

export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    101.38deg,
    rgba(217, 217, 217, 0.5) 0%,
    rgba(217, 217, 217, 0.05) 100%
  );

  opacity: 0.5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(2px);
  border-radius: 25px;
  transform: rotate(90deg);

  pointer-events: none;
  z-index: -1;
`

function StyledCardBackground() {
  return <CardBackground />
}

export default StyledCardBackground
