import { useState } from 'react'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { projects, categories } from '../data/projects'

const categoryBadgeClass = {
  ml: 'badge-category',
  bi: 'badge-bi',
  analysis: 'badge-analysis',
  automation: 'badge-automation',
}

const categoryLabel = {
  ml: 'ML / AI',
  bi: 'BI / Dashboard',
  analysis: 'Data Analysis',
  automation: 'Automation',
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">
              <span>⬡</span> Portfolio
            </span>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-desc">
              24 public repositories across ML, BI, and automation — here are the highlights.
            </p>
          </div>

          <a
            href="https://github.com/Bilalshafiq139"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <FiGithub size={16} /> View All 24 Repos
          </a>
        </div>

        <div className="filter-bar">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`filter-btn${active === c.key ? ' active' : ''}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p) => (
            <div key={p.id} className={`project-card${p.featured ? ' featured' : ''}`}>
              <div className="project-card-top">
                <span className="project-icon">{p.icon}</span>
                <div className="project-badges">
                  {p.featured && <span className="badge badge-featured">Featured</span>}
                  <span className={`badge ${categoryBadgeClass[p.category]}`}>
                    {categoryLabel[p.category]}
                  </span>
                </div>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-metric">
                <div>
                  <div className="project-metric-value" style={{ color: p.color }}>
                    {p.metric}
                  </div>
                  <div className="project-metric-label">{p.metricLabel}</div>
                </div>
              </div>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                style={{ color: p.color }}
              >
                View on GitHub <FiArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/Bilalshafiq139"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FiGithub size={16} /> See all 24 repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
