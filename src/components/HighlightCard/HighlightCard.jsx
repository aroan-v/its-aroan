import React from 'react'
import { Card, CardAction, CardContent, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import DaisyWrapper from '../DaisyWrapper'
import { devLog } from '@/lib/logger'
import StyledCardBackground from '../StyledCardBackground'
import GlassBackground from '../GlassBackground'
import RedGlassBackground from '../RedGlassBackground'
import StyledTag from '../StyledTag'
import StyledAnchor from '../StyledAnchor'

function HighlightCard({ project, index }) {
  devLog('project', project)

  const cardClasses = `bg-transparent  group relative backdrop-blur-3xl shadow-sm hover:shadow-lg  overflow-hidden lg:flex ${
    index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
  }`

  return (
    <Card key={project.id} className={cardClasses}>
      {/* Image */}
      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl border-2 border-transparent lg:m-10 lg:h-auto lg:w-80 lg:bg-transparent">
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

        <GlassBackground />
      </div>

      {/* Content */}
      <div className="p-8 lg:p-18">
        <CardContent className="mb-6 flex flex-1 flex-col justify-between space-y-4">
          <CardTitle className="text-foreground flex items-end text-xl font-semibold">
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

          <DaisyWrapper className="flex flex-wrap gap-2">
            {project?.badges?.map((badge, index) =>
              badge?.items?.map((item, i) => (
                <div key={`${index}-${i}`} className={`ds-badge ${badge.className}`}>
                  {item}
                </div>
              ))
            )}
          </DaisyWrapper>

          <div className="text-muted-foreground lg:text-md text-sm leading-relaxed *:mb-4">
            {project.description}
          </div>
        </CardContent>

        <CardAction>
          <StyledAnchor url={project.liveUrl} mode="live" />
          <StyledAnchor url={project.githubUrl} mode="github" />
        </CardAction>
      </div>
      <RedGlassBackground />
    </Card>
  )
}

export default HighlightCard
