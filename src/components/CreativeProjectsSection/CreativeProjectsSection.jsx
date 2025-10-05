import React from 'react'
import PaddingWrapper from '../PaddingWrapper'
import ProjectCard from '../ProjectCard'
import StyledSunsetBackground from '../StyledSunsetBackground'

const projects = [
  {
    id: 1,
    title: 'Vote Pilipinas',
    description: (
      <>
        <p>
          Vote Pilipinas is a non-profit, non-partisan campaign in partnership with COMELEC that
          encouraged voter registration and participation nationwide. I led the creative direction,
          developing a modern visual identity inspired by the Philippine flag.
        </p>
        <p>
          My work covered branding, logo design, merchandise, stage and background visuals, and
          digital campaign materials across web and social media.
        </p>
      </>
    ),
    technologies: [],
    image: ['/creative-projects/vote-pilipinas-cover.jpg'],
    images: [
      {
        src: '/creative-projects/vote-pilipinas-cover.jpg',
        alt: 'Cover photo for Vote Pilipinas Campaign',
      },
    ],
    badges: [
      {
        className: 'ds-badge-soft  ds-badge-secondary',
        items: ['Branding', 'Creative Direction', 'Visual Identity', 'Social Media'],
      },
    ],
    behanceUrl: 'https://www.behance.net/gallery/235805619/Vote-Pilipinas',
    facebookUrl: 'https://www.facebook.com/VotePilipinas',
  },

  {
    id: 2,
    title: 'Impact Hackathon',
    description: `Impact Hackathon is a nationwide tech innovation program that challenges participants to build solutions for real-world problems. As Creative Lead, I shaped the evolving visual identity across four years—designing cohesive branding systems, the hackathon platform, and marketing materials that adapted from onsite to online and hybrid formats.`,
    technologies: [],
    image: ['/creative-projects/impact-hackathon-cover.jpg'],
    images: [
      {
        src: '/creative-projects/impact-hackathon-cover.jpg',
        alt: 'Cover photo of Impact Hackathon Program',
      },
    ],
    badges: [
      {
        className: 'ds-badge-soft  ds-badge-secondary',
        items: ['Branding', 'Creative Direction', 'Visual Identity', 'Social Media'],
      },
    ],
    facebookUrl: 'https://www.facebook.com/impact2050',
    behanceUrl: 'https://www.behance.net/gallery/235727615/Impact-Hackathon',
  },

  {
    id: 3,
    title: 'Pilipinas Debates 2022: The Turning Point',
    description: `Pilipinas Debates 2022: The Turning Point was a landmark nationwide debate series by COMELEC and Vote Pilipinas, broadcast simultaneously across major networks for the first time in Philippine history. As Creative Lead, I designed the official logo and developed the event’s overall branding and visual identity.`,
    technologies: [],
    image: ['/creative-projects/pilipinas-debates-cover.jpg'],
    images: [
      {
        src: '/creative-projects/pilipinas-debates-cover.jpg',
        alt: 'Cover photo for the Pilipinas Debates 2022: The Turning Point',
      },
    ],
    badges: [
      {
        className: 'ds-badge-soft  ds-badge-secondary',
        items: ['Branding', 'Creative Direction', 'Visual Identity'],
      },
    ],
    behanceUrl:
      'https://www.behance.net/gallery/235724131/Pilipinas-Debates-2022-The-Turning-Point',
  },

  {
    id: 4,
    title: 'Kuha Sa Tingi',
    description: `Kuha Sa Tingi is a joint initiative by RIPPLEx, Greenpeace Philippines, and local governments promoting refill systems in sari-sari stores as sustainable alternatives to single-use plastics. I led its rebrand from pilot to nationwide rollout, designing the logo, packaging, store kits, and campaign materials used across 2,300+ partner stores in San Juan City, Quezon City, and Marikina City.`,
    technologies: [],
    image: ['/creative-projects/kst-cover.jpg'],
    images: [
      {
        src: '/creative-projects/kst-cover.jpg',
        alt: 'Screenshot of Tic Tac Toe game interface',
      },
    ],
    badges: [
      {
        className: 'ds-badge-soft  ds-badge-secondary',
        items: ['Branding', 'Creative Direction', 'Visual Identity', 'Merchandise'],
      },
    ],
    behanceUrl: 'https://www.behance.net/gallery/235922635/Kuha-Sa-Tingi',
  },

  {
    id: 5,
    title: 'The Filipino Vote on Display',
    description: `The Filipino Vote on Display is a collaboration with COMELEC that transformed its building into a visual timeline of Philippine democracy. Spanning over 90 windows, the exhibit showcased voting history, COMELEC milestones, and elected officials. I led the design and layout, crafting a chronological flow that guided visitors through the story of how Filipinos vote.`,
    technologies: [],
    image: ['/creative-projects/comelec-windows-cover.jpg'],
    images: [
      {
        src: '/creative-projects/comelec-windows-cover.jpg',
        alt: 'Screenshot of Tic Tac Toe game interface',
      },
    ],
    badges: [
      {
        className: 'ds-badge-soft  ds-badge-secondary',
        items: ['Branding', 'Creative Direction', 'Visual Identity'],
      },
    ],
    behanceUrl: 'https://www.behance.net/gallery/235872835/The-Filipino-Vote-on-Display',
  },
]

function CreativeProjectsSection() {
  return (
    <PaddingWrapper
      as="section"
      id="creative-archive"
      className="relative mx-auto my-10 w-full scroll-mt-20 space-y-8 py-20"
    >
      <div className="mx-auto mb-16 max-w-2xl px-8 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          <span className="text-foreground text-shadow-md">Creative Archive</span>
        </h2>
        <p className="text-foreground text-lg leading-tight text-shadow-sm">
          A look back at my creative direction and branding work before I dove into web development
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <StyledSunsetBackground />
    </PaddingWrapper>
  )
}

export default CreativeProjectsSection
