import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import DaisyWrapper from '../DaisyWrapper'

function AboutMeSection() {
  const stats = [
    {
      label: 'Web Programming',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Tailwind CSS',
        'shadcn/ui',
        'DaisyUI',
      ],
    },
    {
      label: 'Design Tools',
      items: ['Figma'],
    },
    {
      label: 'Other Tools',
      items: ['Git', 'Firebase', 'Stripe'],
    },
  ]

  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Intro */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            I’m Josh, a developer who thrives on turning ideas into polished, interactive apps. I
            enjoy breaking down problems, experimenting with solutions, and refining details until
            they click. My projects often explore modern frameworks like{' '}
            <span className="text-foreground font-medium">React</span> and{' '}
            <span className="text-foreground font-medium">Next.js</span>, paired with tools like
            Tailwind CSS and TypeScript to bring designs and logic together seamlessly.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            My focus is on staying solid with fundamentals while exploring new tech, whether it’s
            building e-commerce platforms, task managers, or dashboards. I’m always looking for ways
            to create useful, engaging, and scalable applications.
          </p>
        </div>
      </div>
      <DaisyWrapper>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {stats.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-foreground mb-3 text-lg font-semibold">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item} className="ds-badge ds-badge-dash ds-badge-primary">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>{' '}
      </DaisyWrapper>
    </section>
  )
}

export default AboutMeSection
