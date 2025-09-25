import React from 'react'
import { Card, CardAction, CardContent, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import DaisyWrapper from '../DaisyWrapper'
import { devLog } from '@/lib/logger'
import StyledCardBackground from '../StyledCardBackground'

function HighlightCard({ project, index }) {
  devLog('project', project)

  const cardClasses = `group bg-base-300/20 backdrop-blur-3xl shadow-sm hover:shadow-lg hover:shadow-secondary shadow-inner shadow-neutral overflow-hidden lg:flex ${
    index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
  }`

  return (
    <Card key={project.id} className={cardClasses}>
      {/* Image */}
      <div className="bg-neutral/30 relative aspect-video w-full flex-shrink-0 rounded-xl lg:m-10 lg:h-auto lg:w-80 lg:bg-transparent">
        {/* Desktop Image */}
        {project.images?.desktop && (
          <Image
            src={project.images?.desktop}
            alt={project.altImages.desktop}
            fill
            className="hidden rounded-xl object-contain transition-transform duration-500 group-hover:scale-105 lg:block"
            sizes="(min-width: 1024px) 320px"
          />
        )}

        {/* Mobile Image */}
        {project.images?.mobile && (
          <div className="flex h-full w-full items-end justify-center">
            <div className="relative h-[90%] w-[90%] overflow-hidden">
              {project.images?.mobile && (
                <Image
                  src={project.images.mobile}
                  alt={project.altImages.mobile}
                  fill
                  className="rounded-xl object-contain object-bottom transition-transform duration-500 group-hover:scale-105 lg:hidden"
                  sizes="(max-width: 768px) 579px"
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <CardContent className="flex flex-1 flex-col justify-between p-6 lg:p-12">
        <CardTitle className="text-foreground mb-3 flex items-end text-xl font-semibold">
          {project.logoSrc && (
            <Image
              src={project.logoSrc}
              alt={project.alt}
              width={35}
              height={35}
              className="mr-3 rounded-md"
            />
          )}

          {project.title}
        </CardTitle>

        {project.description?.map((paragraph, index) => (
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed" key={index}>
            {paragraph}
          </p>
        ))}

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
          <Button asChild variant="gradient" size="sm">
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
          <Button asChild variant="gradient" size="sm">
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

      {/* Backdrop */}
      {/* <StyledCardBackground /> */}
    </Card>
  )
}

export default HighlightCard
