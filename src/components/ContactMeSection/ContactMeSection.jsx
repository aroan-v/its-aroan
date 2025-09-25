'use client'
import { devLog } from '@/lib/logger'
import React from 'react'
import styled from 'styled-components'

const ContactMeSection = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yourname@email.com')
    alert('Email copied to clipboard!')
  }

  const [isShown, setIsShown] = React.useState(false)
  const wrapperRef = React.useRef()

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
      <div className="mb-6 w-full text-center">
        <h2 className="text-accent font-display text-3xl font-bold md:text-4xl">
          I’d love to hear from you!
        </h2>
        <p className="text-sm italic">Check out my socials or download my resume</p>
      </div>

      <div ref={wrapperRef} className="group container w-full">
        <div
          data-text="Contact"
          onClick={handleCopyEmail}
          className={`glass transition-all ${
            isShown ? 'mx-2 rotate-0' : '-m-[35px] -rotate-[15deg]'
          }`}
        >
          <span className="text-white">Copy Email</span>
        </div>

        <div
          data-text="Download my CV"
          className={`glass transition-all ${isShown ? 'm-2 rotate-0' : '-m-[35px] rotate-0'}`}
        >
          Okay
        </div>

        <div
          data-text="Github"
          className={`glass transition-all ${
            isShown ? 'mx-2 rotate-0' : '-m-[35px] rotate-[15deg]'
          }`}
        ></div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  margin-top: 50px;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 150px;
    height: 150px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.7s;
    border-radius: 12px;
    /* margin: 0 -45px; */
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
  }

  /* .container:hover .glass {
    margin: 0 10px;
  } */

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .container .glass svg {
    font-size: 2.5em;
    fill: #fff;
  }
`

export default ContactMeSection
