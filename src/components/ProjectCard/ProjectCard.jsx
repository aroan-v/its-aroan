import React from 'react'
import { Card, CardAction, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import DaisyWrapper from '../DaisyWrapper'

function ProjectCard({ project }) {
  return (
    <Card key={project.id} className="border-base-300 flex-col border-3 pb-6">
      {/* Image container */}
      <div className="shadow-neutral relative h-80 overflow-hidden shadow-inner">
        <Image
          src={project.image[0]}
          alt={project.images[0].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="flex flex-col p-6">
        <h3 className="text-foreground mb-3 text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

        {/* Badges */}

        <DaisyWrapper className="mb-6 flex flex-wrap gap-2">
          {project?.badges?.map((badge, index) =>
            badge?.items?.map((item, i) => (
              <div key={`${index}-${i}`} className={`ds-badge ${badge.className}`}>
                {item}
              </div>
            ))
          )}
        </DaisyWrapper>

        {/* Buttons */}
        <CardAction>
          <Button asChild variant="defaultOutline" size="sm">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="defaultOutline" size="sm">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={16} />
              Code
            </a>
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
