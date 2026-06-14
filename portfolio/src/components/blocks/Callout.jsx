// label: short descriptor shown above content (e.g. "Awards", "Recognition", "Note")
// <Callout label="Awards">
//   <p>Best Paper — IEEE 2025</p>
//   <p>Honorable Mention — ACM 2024</p>
// </Callout>
export default function Callout({ children, label }) {
  return (
    <div className="block-callout">
      {label && <p className="block-callout__label">{label}</p>}
      <div className="block-callout__content">{children}</div>
    </div>
  )
}
