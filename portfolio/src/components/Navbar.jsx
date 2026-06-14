import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleWorkClick(e) {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Audrey Zheng
        </Link>
        <div className="navbar__links">
          <a href="#projects" className="navbar__link" onClick={handleWorkClick}>
            Work
          </a>
          <a
            href="https://github.com/veriivy"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
