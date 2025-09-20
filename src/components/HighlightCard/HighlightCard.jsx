import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

function HighlightCard({ project }) {
  return (
    <Card
      key={project.id}
      className="group border-base-300 overflow-hidden border-3 lg:flex lg:flex-row"
    >
      {/* Image */}
      <div className="relative h-60 w-full flex-shrink-0 lg:h-auto lg:w-80">
        <Image
          src={project.image[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="bg-gradient-primary absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      </div>

      {/* Content */}
      <CardContent className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-foreground mb-3 text-xl font-semibold">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border-accent/20 bg-accent/10 text-accent rounded-full border px-3 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-glass hover:bg-accent hover:text-accent-foreground flex-1 transition-all duration-300"
          >
            <a href={project.liveUrl} className="flex items-center gap-2">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-glass hover:bg-glass flex-1 transition-all duration-300"
          >
            <a href={project.githubUrl} className="flex items-center gap-2">
              <Github size={16} />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default HighlightCard
