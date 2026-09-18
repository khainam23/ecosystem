export type ProjectStatus = 'idea' | 'active' | 'pause' | 'done'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  status: ProjectStatus
  tags: string[]
  url: string | null
  repo: string | null
  startedAt: string
  updatedAt: string
  featured: boolean
}

export interface WorkflowStep {
  id: string
  order: number
  title: string
  description: string
  icon: string
  outputs: string[]
}
