import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import DaisyWrapper from '../DaisyWrapper'
import SkillsSection from '../SkillsSection'
import PaddingWrapper from '../PaddingWrapper'
import Highlight from '../Highlight'
import Image from 'next/image'

const stats = [
  {
    label: 'Frontend Development',
    className: 'ds-badge-accent',
    items: ['HTML / CSS', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'DaisyUI'],
    softStyle: ['React', 'Next.js', 'Vercel'],
  },
  {
    label: 'UI / UX Design',
    className: 'ds-badge-secondary',
    items: ['Adobe Creative Suite'],
    softStyle: ['Figma', 'Photoshop'],
  },
  {
    label: 'Other Tools',
    className: 'ds-badge-primary',
    items: ['Git', 'Firebase', 'NPM', 'Sanity Studio'],
  },
]

function AboutMeSection() {
  return (
    <PaddingWrapper as="section" id="about" className="mx-auto max-w-5xl">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="my-auto space-y-8">
          <ProfilePhoto />
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

        <div className="px-4 lg:px-0">
          <div className="mb-12">
            <h2 className="text-primary mb-6 text-center text-4xl font-bold md:text-5xl lg:text-left">
              About Me
            </h2>

            <p className="text-muted-foreground mb-6 text-sm">
              I’m Josh (also known as Aroan), an aspiring web developer who enjoys turning ideas
              into interactive projects. I like breaking down problems, experimenting with
              solutions, and refining details until they click.
            </p>

            <p className="text-muted-foreground mb-6 text-sm">
              I graduated from <Highlight className="text-accent">Mapúa University</Highlight> with
              a{' '}
              <Highlight className="text-primary">
                BS degree in Multimedia Arts and Sciences
              </Highlight>
              . I started as a Visual Communicator and eventually became the Creatives Manager. I
              handled branding, social media, publication materials, and website design through
              Figma. While design sharpened my creative eye, I eventually realized my true passion
              wasn’t in digital arts—it was in building, problem-solving, and crafting solutions
              through development.
            </p>

            <p className="text-muted-foreground mb-6 text-sm">
              Two years ago, I began self-studying web development. I started with{' '}
              <Highlight className="text-primary">HTML, CSS, and JavaScript</Highlight>, making sure
              I had a strong foundation before moving into frameworks like{' '}
              <Highlight className="text-accent">React</Highlight> and{' '}
              <Highlight className="text-accent">Next.js</Highlight>.
            </p>

            <p className="text-muted-foreground text-sm">
              Today, I’m working toward becoming a{' '}
              <Highlight className="text-accent">full-stack developer</Highlight> and eventually a
              software engineer. As I start applying for junior developer roles, I look forward to
              growing further, learning from real-world challenges, and continuing to push my skills
              forward one project at a time.
            </p>
          </div>
        </div>
      </div>
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
              src="/profile.jpg"
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
