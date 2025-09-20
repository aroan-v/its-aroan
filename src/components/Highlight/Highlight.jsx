import { cn } from '@/lib/utils'

export default function Highlight({ children, className = '' }) {
  return <span className={cn('text-foreground font-medium', className)}>{children}</span>
}
