'use client'
import { devLog } from '@/lib/logger'
import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui/button'
import StyledDownloadButton from '../StyledDownloadButton'
import StyledContactButton, { StyledCopyEmailButton } from '../StyledContactButton'

const ContactMeSection = () => {
  const [isShown, setIsShown] = React.useState(false)
  const wrapperRef = React.useRef()

  // Observer to animate the rotation and margin of the cards
  React.useEffect(() => {
    const node = wrapperRef.current

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsShown(entry.isIntersecting)
    })

    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [])

  devLog('isShown', isShown)

  return (
    <StyledWrapper>
      {/* Header */}
      <div className="relative mb-6 w-full text-center">
        <h2 className="text-accent font-display text-3xl font-bold md:text-4xl">
          I’d love to hear from you!
        </h2>
        <p className="text-sm italic">Check out my socials or download my resume</p>

        {/* Target element observer  */}
        <div className="absolute -bottom-30 mx-auto w-full" ref={wrapperRef}></div>
      </div>

      {/* Cards */}
      <div className="group container w-full">
        <div className={`glass ${isShown ? 'shown' : 'hidden-left'}`}>
          Github
          <StyledContactButton mode="github" />
        </div>

        <div className={`glass ${isShown ? 'shown' : 'hidden-center'}`}>
          Download CV
          <StyledContactButton mode="download-cv" />
        </div>

        <div data-text="Github" className={`glass ${isShown ? 'shown' : 'hidden-right'}`}>
          Copy Email
          <StyledCopyEmailButton />
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 50px;
  position: relative;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  .container .unstyled {
    position: relative;
    width: 125px;
    transition: 0.7s;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 125px;
    height: 125px;
    font-weight: 500;
    font-size: 0.875rem;
    text-align: center;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    transition: all 0.7s ease;
  }

  .glass.shown {
    margin: 0 8px; /* mx-2 equivalent */
    transform: rotate(0deg);
  }

  .glass.hidden-center {
    margin: -20px;
  }

  .glass.hidden-left {
    margin: -20px; /* -m-[35px] */
    transform: rotate(-15deg);
  }

  .glass.hidden-right {
    margin: -20px;
    transform: rotate(15deg);
  }
`

export default ContactMeSection
