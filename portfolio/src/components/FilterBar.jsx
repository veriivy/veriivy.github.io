import './FilterBar.css'

export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-bar__btn${active === cat ? ' filter-bar__btn--active' : ''}`}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
        >
          {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  )
}
