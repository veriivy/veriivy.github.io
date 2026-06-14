import { useState } from 'react'
import heroImg from '../assets/heroImg.jpg'
import ProjectCard from '../components/ProjectCard'
import FilterBar from '../components/FilterBar'
import { projects, CATEGORIES } from '../data/projects'
import './Home.css'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__text">
            <p className="hero__greeting">Hi, I'm</p>
            <h1 className="hero__name">Audrey Zheng.</h1>
            <p className="hero__subtitle">B.S. Electrical & Computer Engineering · Carnegie Mellon University</p>
            <p className="hero__bio">
              I build intelligent systems at the intersection of AI, computer vision, and robotics. My goal is to bridge cutting-edge research and meaningful real-world applications. 
            </p>
            <div className="hero__links">
              <a
                href="https://github.com/veriivy"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link hero__social-link--primary"
              >
                <ResumeIcon />
                CV
              </a>
            </div>
          </div>

          <div className="hero__image-wrap">
            <div className="hero__image-backdrop" />
            <img src={heroImg} alt="Audrey Zheng" className="hero__image" />
          </div>
        </div>
      </section>

      <div className="marquee-banner" aria-hidden="true">
        <div className="marquee-track">
          {'projects ✦ work ✦ research ✦ creative ✦ '.repeat(8)}
        </div>
      </div>

      <section className="projects" id="projects">
        <div className="projects__inner">
          <div className="projects__header">
            <h2 className="projects__title">Projects</h2>
            <FilterBar
              categories={CATEGORIES}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>
          <div className="projects__grid" key={activeFilter}>
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="projects__empty">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
    </svg>
  )
}
