'use client'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Button = ({ project = '' }) => {
  return (
    <StyledWrapper>
      <a
        href={project?.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <Image src="/github-mark-white.svg" alt="Logo of Github" width={18} height={18} />
        Github
      </a>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  a {
    width: fit-content;
    display: flex;
    padding: 0.5rem 1rem;
    cursor: pointer;
    gap: 0.4rem;
    font-weight: bold;
    border-radius: 8px;
    background: linear-gradient(
        15deg,
        #880088,
        #aa2068,
        #cc3f47,
        #de6f3d,
        #f09f33,
        #de6f3d,
        #cc3f47,
        #aa2068,
        #880088
      )
      no-repeat;
    background-size: 00%;
    color: #fff;
    border: none;
    background-position: left center;
    box-shadow: 0 30px 10px -20px rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
  }

  a:hover {
    background-size: 320%;
    background-position: right center;
    scale: 105%;
  }

  a:hover svg {
    fill: #fff;
  }

  a svg {
    width: 23px;
    fill: #f09f33;
    transition: 0.3s ease;
  }
`

export default Button
