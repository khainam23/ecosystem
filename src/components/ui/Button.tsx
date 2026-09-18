import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md'
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
        size === 'md' ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs',
        variant === 'primary' && 'bg-violet-600 text-white hover:bg-violet-700',
        variant === 'ghost' && 'text-gray-600 hover:bg-gray-100',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
