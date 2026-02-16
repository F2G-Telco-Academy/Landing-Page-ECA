import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl border border-card-border dark:border-gray-700 p-5',
        hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5',
        className
      )}
    >
      {children}
    </div>
  )
}
