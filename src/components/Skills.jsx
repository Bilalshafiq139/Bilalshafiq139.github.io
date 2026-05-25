import { useState, useEffect, useRef } from 'react'
import { skillCategories, certifications } from '../data/skills'

function SkillBar({ level }) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-bar" ref={ref}>
      <div
        className={`skill-fill${animated ? ' animated' : ''}`}
        style={{ width: `${level}%` }}
      />
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('programming')

  const current = skillCategories.find((c) => c.key === activeTab)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">
          <span>◈</span> Expertise
        </span>
        <h2 className="section-title">
          Skills &amp; <span>Technologies</span>
        </h2>
        <p className="section-desc">
          A cross-functional toolkit spanning data science, BI, design, and automation.
        </p>

        <div className="skills-layout">
          <div className="skills-tabs">
            {skillCategories.map((cat) => (
              <button
                key={cat.key}
                className={`skills-tab${activeTab === cat.key ? ' active' : ''}`}
                onClick={() => setActiveTab(cat.key)}
              >
                <span className="tab-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-panel">
            <div className="skills-panel-title">
              <span>{current.icon}</span>
              {current.label}
            </div>

            {current.skills.map((s) => (
              <div key={s.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <SkillBar level={s.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-section">
          <span className="section-label">
            <span>✦</span> Certified
          </span>
          <h3 className="section-title" style={{ fontSize: '24px' }}>
            Certifications
          </h3>

          <div className="certs-grid">
            {certifications.map((cert) => (
              <div key={cert} className="cert-card">
                <div className="cert-icon">🏅</div>
                <span className="cert-name">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
