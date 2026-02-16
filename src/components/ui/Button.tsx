import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-primary dark:bg-accent text-white hover:bg-primary/90 dark:hover:bg-accent/90': variant === 'primary',
            'border border-primary/20 dark:border-gray-600 text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800': variant === 'outline',
            'text-primary dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800': variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-2.5 text-sm': size === 'md',
            'px-8 py-3.5 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
export default Button
