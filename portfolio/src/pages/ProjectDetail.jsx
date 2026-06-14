import { lazy, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

// Add an entry here each time you create a new page in src/pages/projects/
const projectPages = {
  'vision-semantics': lazy(() => import('./projects/VisionSemantics')),
  'echolens': lazy(() => import('./projects/Echolens')),
  'livematch': lazy(() => import('./projects/LiveMatch')),
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="project-detail project-detail--404">
        <h1 className="project-detail__not-found-title">Project not found</h1>
        <Link to="/" className="project-detail__back">← Back home</Link>
      </div>
    )
  }

  const Page = projectPages[slug]

  if (!Page) {
    return <ComingSoon project={project} />
  }

  return (
    <Suspense fallback={<div className="project-detail-loading" />}>
      <Page />
    </Suspense>
  )
}

function ComingSoon({ project }) {
  const { title, category, date, tags, gradient } = project
  return (
    <div className="project-detail">
      <div className="project-detail__inner">
        <Link to="/" className="project-detail__back">← Back</Link>
        <div className="project-detail__banner" style={{ background: gradient }} />
        <div className="project-detail__meta">
          <span className="project-detail__category">{category}</span>
          <span className="project-detail__date">{date}</span>
        </div>
        <h1 className="project-detail__title">{title}</h1>
        <div className="project-detail__tags">
          {tags.map((tag) => (
            <span key={tag} className="project-detail__tag">{tag}</span>
          ))}
        </div>
        <p className="project-detail__placeholder">Detailed case study coming soon.</p>
      </div>
    </div>
  )
}
