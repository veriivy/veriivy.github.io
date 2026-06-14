import { Link } from 'react-router-dom'
import './ProjectCard.css'

const categoryMeta = {
  research: { bg: '#f3f0ff', text: '#6d28d9', dot: '#7c3aed' },
  creative: { bg: '#fdf2f8', text: '#9d174d', dot: '#be185d' },
  technical: { bg: '#ecfeff', text: '#155e75', dot: '#0891b2' },
}

export default function ProjectCard({ project }) {
  const { slug, title, category, description, image, gradient, tags, externalUrl } = project
  const colors = categoryMeta[category] ?? categoryMeta.technical

  const cardBody = (
    <>
      <div
        className="project-card__image"
        style={{ background: image ? undefined : gradient }}
      >
        {image && <img src={image} alt={title} />}
      </div>
      <div className="project-card__body">
        <span
          className="project-card__category"
          style={{ background: colors.bg, color: colors.text }}
        >
          <span className="project-card__dot" style={{ background: colors.dot }} />
          {category}
        </span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__footer">
          <div className="project-card__tags">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
          <span className="project-card__arrow" aria-hidden="true">
            {externalUrl ? '↗' : '→'}
          </span>
        </div>
      </div>
    </>
  )

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        {cardBody}
      </a>
    )
  }

  return (
    <Link to={`/project/${slug}`} className="project-card">
      {cardBody}
    </Link>
  )
}
