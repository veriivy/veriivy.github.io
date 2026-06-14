export default function MediaImage({ src, alt = '', caption }) {
  return (
    <figure className="block-image">
      <img src={src} alt={alt} />
      {caption && <figcaption className="block-image__caption">{caption}</figcaption>}
    </figure>
  )
}
