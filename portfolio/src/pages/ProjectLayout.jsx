import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectLayout.css'

export default function ProjectLayout({ slug, children }) {
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="project-layout project-layout--404">
        <Link to="/" className="project-layout__back">← Back</Link>
        <h1>Project not found</h1>
      </div>
    )
  }

  const { title, category, date, tags } = project

  return (
    <article className="project-layout">
      <div className="project-layout__inner">
        <Link to="/" className="project-layout__back">← Back</Link>

        <header className="project-layout__header">
          <div className="project-layout__meta">
            <span className="project-layout__category">{category}</span>
            <span className="project-layout__sep">·</span>
            <span className="project-layout__date">{date}</span>
          </div>
          <h1 className="project-layout__title">{title}</h1>
          <div className="project-layout__tags">
            {tags.map((tag) => (
              <span key={tag} className="project-layout__tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="project-layout__content">{children}</div>
      </div>
    </article>
  )
}
