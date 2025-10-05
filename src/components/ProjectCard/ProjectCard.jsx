import React from 'react'
import { Card, CardAction, CardContent } from '../ui/card'
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
          className={`inset-0transition-transform object-cover duration-500 group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="flex flex-col space-y-4 p-6">
        <div>
          <h3 className="text-foreground mb-1 text-xl font-semibold">{project.title}</h3>
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
        </div>

        <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
          {project.description}
        </div>

        {/* Buttons */}
        <CardAction>
          {project.liveUrl && <StyledAnchor url={project.liveUrl} mode="live" />}
          {project.githubUrl && <StyledAnchor url={project.githubUrl} mode="github" />}
          {project.behanceUrl && <StyledAnchor url={project.behanceUrl} mode="behance" />}
          {project.facebookUrl && <StyledAnchor url={project.facebookUrl} mode="facebook" />}
        </CardAction>
      </CardContent>

      {/* Backdrop */}
      <RedGlassBackground />
    </Card>
  )
}

export default ProjectCard
