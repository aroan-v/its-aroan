import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import DaisyWrapper from '../DaisyWrapper'
import SkillsSection from '../SkillsSection'
import PaddingWrapper from '../PaddingWrapper'
import Highlight from '../Highlight'
import Image from 'next/image'
import { SunsetBackgroundBottom } from '../StyledSunsetBackground'
import ContactMeSection from '../ContactMeSection'

const stats = [
  {
    label: 'Frontend Development',
    className: 'ds-badge-primary',
    items: ['HTML / CSS', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'DaisyUI'],
    softStyle: ['React', 'Next.js', 'Vercel', 'Framer Motion'],
  },
  {
    label: 'UI / UX Design',
    className: 'ds-badge-secondary',
    items: ['Adobe Creative Suite'],
    softStyle: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    label: 'Other Tools',
    className: 'ds-badge-foreground',
    items: ['Github', 'Firebase', 'NPM', 'Sanity Studio'],
  },
]

function AboutMeSection() {
  return (
    <PaddingWrapper as="section" id="about" className="relative w-full pb-30">
      <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2">
        <div className="my-auto space-y-8">
          {/* Image */}
          <ProfilePhoto />

          {/* Badges */}
          <DaisyWrapper>
            <div className="gap-8 space-y-4 text-center">
              {stats.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-foreground mb-1 text-lg font-semibold">{group.label}</h3>
                  <div className="mx-auto flex max-w-md flex-wrap justify-center gap-2">
                    {group.softStyle?.map((item) => (
                      <div key={item} className={`ds-badge ${group.className}`}>
                        {item}
                      </div>
                    ))}

                    {group.items.map((item) => (
                      <div key={item} className={`ds-badge ds-badge-dash ${group.className}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DaisyWrapper>
        </div>

        {/* Description */}
        <div className="px-4 lg:px-0">
          <h2 className="text-primary font-display mb-6 text-center text-5xl font-bold md:text-6xl lg:text-left">
            About Me
          </h2>

          <p className="text-muted-foreground mb-6 text-sm">
            I’m Josh (also known as Aroan), an aspiring full-stack web developer who enjoys turning
            ideas into interactive projects. I like breaking down problems, experimenting with
            solutions, and refining details until they click.
          </p>

          <p className="text-muted-foreground mb-6 text-sm">
            I graduated from <Highlight className="text-secondary">Mapúa University</Highlight> with
            a{' '}
            <Highlight className="text-primary">
              BS degree in Multimedia Arts and Sciences
            </Highlight>
            . I started as a Visual Communicator and eventually became the Creatives Manager. I
            handled branding, social media, publication materials, and website design through Figma.
            While design sharpened my creative eye, I eventually realized my true passion wasn’t in
            digital arts—it was in building, problem-solving, and crafting solutions through
            development.
          </p>

          <p className="text-muted-foreground mb-6 text-sm">
            Two years ago, I began transitioning to web development. My experience before this
            includes handling websites built on drag-and-drop platforms like{' '}
            <Highlight className="text-primary">Squarespace</Highlight> and{' '}
            <Highlight className="text-primary">WordPress (via Elementor)</Highlight>, which gave me
            a strong foundation in visual structure and content management. I then shifted my focus
            to core programming, mastering{' '}
            <Highlight className="text-primary">HTML, CSS, and JavaScript</Highlight>, before moving
            into modern frameworks like <Highlight className="text-secondary">React</Highlight> and{' '}
            <Highlight className="text-secondary">Next.js</Highlight>.
          </p>

          <p className="text-muted-foreground text-sm">
            Today, I’m working toward becoming a{' '}
            <Highlight className="text-secondary">full-stack developer</Highlight>. As I start
            applying for junior developer roles, I look forward to growing further, learning from
            real-world challenges, and continuing to push my skills forward one project at a time.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactMeSection />

      {/* Background */}
      <SunsetBackgroundBottom />
    </PaddingWrapper>
  )
}

export default AboutMeSection

function ProfilePhoto() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="group relative h-40 w-40">
        <div className="from-primary via-secondary to-primary relative h-full w-full rounded-3xl bg-gradient-to-br p-1 shadow-lg">
          <div className="bg-background relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="/profile/profile.jpg"
              alt="Josh's picture"
              fill
              className="rounded-3xl object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
