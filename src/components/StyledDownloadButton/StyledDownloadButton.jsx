import React from 'react'
import styled from 'styled-components'

const StyledDownloadButton = () => {
  return (
    <StyledWrapper>
      <a className="text-foreground flex flex-col">
        <svg viewBox="0 0 256 256" height={32} width={38} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
            fill="currentColor"
          />
        </svg>
      </a>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  a {
    position: relative;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.397);
    background: linear-gradient(#200b01, #760606);
    font-size: 0.9rem;
    font-weight: 600;
    gap: 8px;
    border-radius: 5px;
    margin: 0 5px;
    transition: 0.2s;
    border: 2px solid transparent;
  }

  a::before {
    content: '';
    position: absolute;
    left: 50%; /* base for -translate-x-1/2 */
    transform: translateX(-50%); /* -translate-x-1/2 */
    bottom: -10%;
    width: 100%;
    height: 15%;
    z-index: 0;

    background: linear-gradient(
      90deg,
      hsl(0, 100%, 63%),
      hsl(30, 100%, 63%),
      hsl(330, 100%, 63%),
      hsl(30, 100%, 63%)
    );

    filter: blur(calc(0.7 * 1rem)); /* to match Tailwind's blur */
  }

  a:hover {
    border-color: #830700;
    background: linear-gradient(#200b01, #c53800);
    box-shadow: 0 6px #830700;
    transform: translateY(-6px);
  }

  a:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`

export default StyledDownloadButton
