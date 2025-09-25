import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import ProjectCard from '../ProjectCard'
import HighlightCard from '../HighlightCard'
import Highlight from '../Highlight'
import StyledSunsetBackground from '../StyledSunsetBackground'

const highlightProjects = [
  {
    id: 1,
    title: 'Vote Dashboard',
    logoSrc: '/project-logos/vote-dashboard.jpg',
    alt: 'Logo for the Vote Dashboard project',
    description: [
      'Fans will do anything to support their favorite artists—even lose sleep to vote in online polls and awards shows. I saw this firsthand when I joined the effort to vote for Will Ashley, who was nominated for Nylon’s Boldest Breakout Star.',
      "To make the voting more interesting, and to bring out the fandom's competitive side, I created an interactive vote tracker. It was a visual tool designed to reimagine the typically boring, straightforward poll result. Inspired by the dynamic and engaging vote displays of MTV EMAs and MTV Hottest, I built a system that showcased the results with a unique visual flair.",
      <>
        {'Using '}
        <Highlight className="text-accent font-bold">cron-job.org</Highlight>
        {' and '}
        <Highlight className="text-accent font-bold">GitHub Actions</Highlight>
        {
          ', I took a snapshot of the vote standings every five minutes, from August 19 to September 1. This real-time data fed directly into the dashboard, allowing us to see our progress in an exciting new way.'
        }
      </>,
      'We used the data to figure out our strategy, and even though we only made it to second place, the whole thing proved to me how technology can rally a fandom and make even a simple online poll feel like a true team effort.',
    ],
    technologies: ['Vercel', 'Tailwind CSS', 'Zustand', 'D3-Charts', 'Shadcn/UI', 'cronjob'],
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-primary',
        items: ['Next.js'],
      },
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['Tailwind CSS', 'Zustand', 'D3-Charts'],
      },
      {
        className: 'ds-badge-outline  ds-badge-accent',
        items: ['cronjob', 'Vercel', 'Github Actions', 'Shadcn/UI'],
      },
    ],
    image: ['/projects/vote-dashboard.jpg'],
    images: {
      desktop: '/projects/dashboard-desktop.png',
      mobile: '/projects/dashboard-mobile.png',
    },
    altImages: {
      desktop: 'Ipad mockup of the Vote Dashboard page.',
      mobile: 'Macbook and iphone mockup of the Vote Dashboard page.',
    },
    liveUrl: 'https://nylon-boldest-breakout-star-will.vercel.app',
    githubUrl: 'https://github.com/aroan-v/vote-dashboard',
  },
  {
    id: 2,
    title: 'AI Macro Calculator',
    logoSrc: '/project-logos/ai-macro-calculator.jpg',
    alt: 'Logo for the AI Macro Calculator project',
    description: [
      'Tracking meals can feel overwhelming, especially when standard macro trackers force users to pick from limited serving options or predefined ingredients. It’s easy to get lost in all the details and feel restricted by the app. That’s why a simpler and more accessible solution was needed.',
      <>
        {'With the power of AI—using'}
        <Highlight className="text-secondary font-bold"> Gemma</Highlight>
        {' (by Google and Gemini) and '}
        <Highlight className="text-secondary font-bold">Groq</Highlight>
        {
          ' as the API provider—users can now just type a detailed description of what they ate. This freedom of description is the core of its accuracy. Unlike standard trackers that limit to predefined ingredients or generic meals, the AI understands the nuances of an input, such as specifying '
        }
        <span className="italic">pork adobo without potatoes</span>
        {' or '}
        <span className="italic">grilled chicken breast with minimal oil</span>
        {
          '. The AI then calculates calories and protein more accurately than traditional apps, handling the complexities of ingredients and portions.'
        }
      </>,
      "All that's really needed is a weighing scale and a record of what was eaten. Users can input the details, and let AI do the math. Simple, fast, and precise.",
    ],
    technologies: [
      'Next.js',
      'React',
      'Vercel',
      'Groq',
      'Gemma-2b',
      'Tailwind CSS',
      'Shadcn/UI',
      'DaisyUI',
    ],
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-primary',
        items: ['Next.js'],
      },
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['Groq', 'Gemma-2b', 'Tailwind CSS', 'DaisyUI'],
      },
      {
        className: 'ds-badge-outline  ds-badge-accent',
        items: ['Vercel', 'Shadcn/UI'],
      },
    ],
    image: ['/projects/macro-calculator-1.jpg', '/projects/macro-calculator-2.jpg'],
    images: {
      desktop: '/projects/calculator-desktop.png',
      mobile: '/projects/calculator-mobile.png',
    },
    altImages: {
      desktop: 'Ipad mockup of AI Macro Calculator project.',
      mobile: 'Ipad mockup of AI Macro Calculator project.',
    },
    liveUrl: 'https://ai-macro-calculator.vercel.app',
    githubUrl: 'https://github.com/aroan-v/forge-app',
  },
  {
    id: 3,
    title: 'Nylon Vote Page',
    logoSrc: '/project-logos/vote-page.jpg',
    alt: 'Logo for Nylon Vote Page project',
    description: [
      <>
        {
          'This project started during a fandom vote competition where our team was falling behind. The gap was widening, and to make things worse, participation from our fandom was low. The few of us who were still voting felt like our efforts weren’t moving the needle. That’s when I began thinking: how can I make voting easier and more motivating for the ones still in the fight?'
        }
      </>,
      <>
        {'My first idea was '}
        <Highlight className="text-accent font-bold">efficiency</Highlight>
        {
          '. I dug into the host poll’s script, rooted it out, and re-injected it into my own page. Then I made five iframe copies of it, so voters could cast multiple votes faster across different browsers and devices. To prevent issues, I also figured out what triggered the '
        }
        <span className="italic">rate limits</span>
        {' and added instructions so voters could avoid getting blocked.'}
      </>,
      <>
        {'The second idea was '}
        <Highlight className="text-accent font-bold">morale</Highlight>
        {
          '. I built a votes sent tracker that counted every successful vote through the server’s response and stored the number in local storage. This way, each voter could see their personal total across sessions — a number they could proudly share with the group.'
        }
      </>,
      <>
        {
          'I also added a live gap counter that refreshed every 3 seconds, plus a redesigned results page that was far more engaging than the dull original.'
        }
      </>,
      <>
        {'In the end, the project hit its two goals: it '}
        <Highlight className="text-accent font-bold">empowered voters</Highlight>
        {' by giving them a clear count of their contributions, and it '}
        <Highlight className="text-accent font-bold">made voting less boring</Highlight>
        {' by turning it into a more interactive and motivating experience.'}
      </>,
      <>
        {
          'We didn’t win the competition — we finished in second place — but morale was high. Voters could finally see and celebrate how much they had contributed, and that made the whole experience worth it.'
        }
      </>,
    ],

    technologies: [
      'Next.js',
      'React',
      'Vercel',
      'Groq',
      'Gemma-2b',
      'Tailwind CSS',
      'Shadcn/UI',
      'DaisyUI',
    ],
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-primary',
        items: ['Next.js'],
      },
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['Tailwind CSS'],
      },
      {
        className: 'ds-badge-outline  ds-badge-accent',
        items: ['Vercel', 'Shadcn/UI'],
      },
    ],
    images: {
      desktop: '/projects/vote-page-desktop.png',
      mobile: '/projects/vote-page-mobile.png',
    },
    altImages: {
      desktop: 'Mac mockup of the Vote Page project.',
      mobile: 'Android phone mockup of the Vote Page project.',
    },
    liveUrl: 'https://project-p5lze.vercel.app',
    githubUrl: 'https://github.com/aroan-v/nylon-vote-page',
  },
]

const projects = [
  {
    id: 3,
    title: 'Tic-Tac-Toe Game',
    description:
      'This is my take on Tic-Tac-Toe — an interactive game where you can challenge a computer opponent with adjustable difficulty levels. It started as a simple console version and grew into a full DOM-based experience, complete with move analysis, strategic decision-making, and a flexible evaluation system.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: ['/projects/tic-tac-toe.jpg'],
    images: [
      {
        src: '/projects/tic-tac-toe.jpg',
        alt: 'Screenshot of Tic Tac Toe game interface',
      },
    ],
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['HTML', 'CSS', 'Javascript'],
      },
    ],
    liveUrl: 'https://aroan-v.github.io/Tic-Tac-Toe/',
    githubUrl: 'https://github.com/aroan-v/Tic-Tac-Toe',
  },
  {
    id: 4,
    title: 'Battleships',
    description:
      'A block-based Battleships game built with a focus on smart computer and robust game logic. Supports Player vs Computer and Player vs Player modes. Core game logic is fully tested with Jest to ensure accurate hits, sinks, and turn management.',
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['HTML', 'CSS', 'Javascript'],
      },
      {
        className: 'ds-badge-outline  ds-badge-foreground',
        items: ['Jest', 'Unit Testing'],
      },
    ],
    image: ['/projects/battleships.jpg'],
    images: [
      {
        src: '/projects/battleships.jpg',
        alt: 'Screenshot of Battleships game interface',
      },
    ],
    liveUrl: 'https://aroan-v.github.io/Battleship/',
    githubUrl: 'https://github.com/aroan-v/Battleship',
  },
  {
    id: 5,
    title: 'Calculator',
    description:
      'This repository houses a fully-functional calculator application built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'Javascript ES6'],
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['HTML', 'CSS', 'Javascript'],
      },
    ],
    image: ['/projects/calculator.jpg'],
    images: [
      {
        src: '/projects/calculator.jpg',
        alt: 'Screenshot of Calculator app interface',
      },
    ],
    liveUrl: 'https://aroan-v.github.io/Calculator/',
    githubUrl: 'https://github.com/aroan-v/Calculator',
  },
]

function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto mt-10 w-full space-y-8 py-20">
      <div className="mx-auto mb-16 max-w-2xl px-8 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-foreground text-shadow-md">Featured Projects</span>
        </h2>
        <p className="text-foreground text-lg leading-tight text-shadow-sm">
          A showcase of my recent web development projects, featuring modern technologies and
          creative solutions.
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-8 px-8">
        {highlightProjects.map((project, index) => (
          <HighlightCard key={index} index={index} project={project} />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <StyledSunsetBackground />
    </section>
  )
}

export default FeaturedProjectsSection
