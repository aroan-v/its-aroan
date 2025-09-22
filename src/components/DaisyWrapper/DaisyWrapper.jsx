import React from 'react'
import { cn } from '@/lib/utils'

function DaisyWrapper({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag data-theme="synthwave" id="daisy-scope" className={cn(className)} {...props}>
      {children}
    </Tag>
  )
}

export default DaisyWrapper
