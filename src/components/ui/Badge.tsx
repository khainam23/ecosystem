import { cn } from '../../lib/utils'

interface BadgeProps {
  label: string
  variant?: 'active' | 'pause' | 'done' | 'idea' | 'default'
  className?: string
}

const variantClass = {
  active: 'bg-green-100 text-green-700',
  pause: 'bg-yellow-100 text-yellow-700',
  done: 'bg-blue-100 text-blue-700',
  idea: 'bg-purple-100 text-purple-700',
  default: 'bg-gray-100 text-gray-600',
}

export default function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('inline-block rounded-full px-2.5 py-0.5 text-xs font-medium', variantClass[variant], className)}>
      {label}
    </span>
  )
}
