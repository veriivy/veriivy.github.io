// images: [{ src, alt, caption }]
// columns: 2 | 3
export default function MediaGrid({ images, columns = 2 }) {
  return (
    <div className={`block-grid block-grid--${columns}`}>
      {images.map((img, i) => (
        <figure key={i} className="block-grid__item">
          <img src={img.src} alt={img.alt ?? ''} />
          {img.caption && <figcaption>{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
