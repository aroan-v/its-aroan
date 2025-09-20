import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import ProjectCard from '../ProjectCard'
import HighlightCard from '../HighlightCard'

const highlightProjects = [
  {
    id: 1,
    title: 'Vote Dashboard',
    description:
      'A real-time, interactive voting dashboard for fans to track progress, plan strategies, and make the online poll grind more engaging and collaborative.',
    technologies: [
      'Next.js',
      'React',
      'Vercel',
      'Tailwind CSS',
      'Zustand',
      'D3-Charts',
      'Shadcn/UI',
      'cronjob',
    ],
    image: ['/projects/vote-dashboard.jpg'],
    liveUrl: 'https://nylon-boldest-breakout-star-will.vercel.app',
    githubUrl: 'https://github.com/aroan-v/vote-dashboard',
  },
  {
    id: 2,
    title: 'AI Macro Calculator',
    description:
      'A smart meal tracker that simplifies logging: just type what you ate and the serving size (defaults to grams), and AI calculates calories and protein accurately. No more rigid presets—just fast, precise tracking with Gemma and Groq.',
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
    image: ['/projects/macro-calculator-1.jpg', '/projects/macro-calculator-2.jpg'],
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
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-primary">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A showcase of my recent web development projects, featuring modern technologies and
            creative solutions.
          </p>
        </div>

        <div className="space-y-8">
          {highlightProjects.map((project, index) => (
            <HighlightCard key={index} project={project} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjectsSection
