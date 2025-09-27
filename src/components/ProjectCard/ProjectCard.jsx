import React from 'react'
import { Card, CardAction, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import DaisyWrapper from '../DaisyWrapper'
import RedGlassBackground from '../RedGlassBackground'
import StyledAnchor from '../StyledAnchor'

function ProjectCard({ project }) {
  return (
    <Card
      key={project.id}
      className="shadow-neutral relative flex-col rounded-xl bg-transparent pb-6 shadow-sm hover:shadow-lg"
    >
      {/* Image container */}
      <div className="shadow-neutral relative h-80 overflow-hidden rounded-xl border-2 border-transparent shadow-inner">
        <Image
          src={project.image[0]}
          alt={project.images[0].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="flex flex-col space-y-4 p-6">
        <h3 className="text-foreground text-xl font-semibold">{project.title}</h3>

        {/* Badges */}

        <DaisyWrapper className="flex flex-wrap gap-2">
          {project?.badges?.map((badge, index) =>
            badge?.items?.map((item, i) => (
              <div key={`${index}-${i}`} className={`ds-badge ${badge.className}`}>
                {item}
              </div>
            ))
          )}
        </DaisyWrapper>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

        {/* Buttons */}
        <CardAction>
          <StyledAnchor url={project.liveUrl} mode="live" />
          <StyledAnchor url={project.githubUrl} mode="github" />
        </CardAction>
      </CardContent>

      {/* Backdrop */}
      <RedGlassBackground />
    </Card>
  )
}

export default ProjectCard
