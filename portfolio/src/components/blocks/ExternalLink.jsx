// Button variant: <ExternalLink href="..." label="Read Paper" type="paper" />
// Card variant:   <ExternalLink href="..." label="Read Paper" type="paper" cover="/poster.png" />
export default function ExternalLink({ href, label, type, cover, coverAlt }) {
  if (cover) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block-link block-link--card"
      >
        <div className="block-link__cover">
          <img src={cover} alt={coverAlt ?? label} />
        </div>
        <div className="block-link__card-body">
          {type && <span className="block-link__type">{type}</span>}
          <div className="block-link__card-footer">
            <span className="block-link__card-label">{label}</span>
            <span className="block-link__arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block-link"
    >
      {type && <span className="block-link__type">{type}</span>}
      {label}
      <span className="block-link__arrow" aria-hidden="true">↗</span>
    </a>
  )
}
