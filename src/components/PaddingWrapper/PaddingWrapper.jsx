import React from 'react'
import { cn } from '@/lib/utils'

function PaddingWrapper({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component className={cn('px-8', className)} {...props}>
      {children}
    </Component>
  )
}

export default PaddingWrapper
