import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import ProjectCard from '../ProjectCard'
import HighlightCard from '../HighlightCard'
import Highlight from '../Highlight'
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
        <Highlight className="text-secondary font-bold">cron-job.org</Highlight>
        {' and '}
        <Highlight className="text-secondary font-bold">GitHub Actions</Highlight>
        {
          ', I took a snapshot of the vote standings every five minutes, from August 19 to September 1. This real-time data fed directly into the dashboard, allowing us to see our progress in an exciting new way.'
        }
      </>,
      'We used the data to figure out our strategy, and even though we only made it to second place, the whole thing proved to me how technology can rally a fandom and make even a simple online poll feel like a true team effort.',
    ],
    technologies: ['Vercel', 'Tailwind CSS', 'Zustand', 'D3-Charts', 'Shadcn/UI', 'cronjob'],
    badges: [
      {
        className: 'ds-badge-outline  ds-badge-accent',
        items: ['Next.js'],
      },
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['Tailwind CSS', 'Zustand', 'D3-Charts'],
      },
      {
        className: 'ds-badge-outline  ds-badge-foreground',
        items: ['cronjob', 'Vercel', 'Github Actions', 'Shadcn/UI'],
      },
    ],
    image: ['/projects/vote-dashboard.jpg'],
    images: {
      desktop: '/projects/dashboard-desktop.png',
      mobile: '/projects/dashboard-mobile.png',
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
        className: 'ds-badge-outline  ds-badge-accent',
        items: ['Next.js'],
      },
      {
        className: 'ds-badge-outline  ds-badge-secondary',
        items: ['Groq', 'Gemma-2b', 'Tailwind CSS', 'DaisyUI'],
      },
      {
        className: 'ds-badge-outline  ds-badge-foreground',
        items: ['Vercel', 'Shadcn/UI'],
      },
    ],
    image: ['/projects/macro-calculator-1.jpg', '/projects/macro-calculator-2.jpg'],
    images: {
      desktop: '/projects/calculator-desktop.png',
      mobile: '/projects/calculator-mobile.png',
    },
    liveUrl: 'https://ai-macro-calculator.vercel.app',
    githubUrl: 'https://github.com/aroan-v/forge-app',
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
    liveUrl: 'https://aroan-v.github.io/Tic-Tac-Toe/',
    githubUrl: 'https://github.com/aroan-v/Tic-Tac-Toe',
  },
  {
    id: 4,
    title: 'Battleships',
    description:
      'A block-based Battleships game built with a focus on smart computer and robust game logic. Supports Player vs Computer and Player vs Player modes. Core game logic is fully tested with Jest to ensure accurate hits, sinks, and turn management.',
    technologies: ['HTML', 'CSS', 'Javascript ES6', 'Jest', 'Unit Testing'],
    image: ['/projects/battleships.jpg'],
    liveUrl: 'https://aroan-v.github.io/Battleship/',
    githubUrl: 'https://github.com/aroan-v/Battleship',
  },
  {
    id: 5,
    title: 'Calculator',
    description:
      'This repository houses a fully-functional calculator application built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'Javascript ES6'],
    image: ['/projects/calculator.jpg'],
    liveUrl: 'https://aroan-v.github.io/Calculator/',
    githubUrl: 'https://github.com/aroan-v/Calculator',
  },
  {
    id: 6,
    title: 'Crumble Cafe Page',
    description:
      'A modularized cafe page where objects tell the story and functions bring it to life. Webpack, JavaScript, and CSS unite to serve dynamic content and smooth navigation.',
    technologies: ['HTML', 'CSS', 'Javascript ES6'],
    image: ['/projects/cafe-page-1.jpg', '/projects/cafe-page-2.jpg', '/projects/cafe-page-3.jpg'],
    liveUrl: 'https://aroan-v.github.io/Crumble-Cafe-Page/',
    githubUrl: 'https://github.com/aroan-v/Crumble-Cafe-Page',
  },
]

function FeaturedProjectsSection() {
  return (
    <section id="projects" className="bg-background container mx-auto space-y-8 px-4 py-20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-primary">Featured Projects</span>
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          A showcase of my recent web development projects, featuring modern technologies and
          creative solutions.
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        {highlightProjects.map((project, index) => (
          <HighlightCard key={index} index={index} project={project} />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
