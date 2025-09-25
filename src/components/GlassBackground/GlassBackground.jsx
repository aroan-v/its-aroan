'use client'
import React from 'react'
import styled from 'styled-components'

const GlassBackground = ({ children }) => {
  return <StyledGlass>{children}</StyledGlass>
}
const StyledGlass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden; /* keep corners clean */

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -29;

  /* gray background overlay */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(0, 0, 0); /* gray-700 */
  }

  /* glass effect ON TOP of the gray */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(#2121bb43, transparent);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export default GlassBackground
