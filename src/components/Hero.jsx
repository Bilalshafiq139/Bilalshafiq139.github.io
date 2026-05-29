import { useEffect, useState, useRef } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'

const ROLES = ['Data Analyst', 'ML Engineer', 'Web Automation Expert', 'UI/UX Designer']

function CountUp({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const startTime = Date.now()
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * end))
            if (progress >= 1) clearInterval(timer)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIdx]
    const speed = deleting ? 45 : 110

    const t = setTimeout(() => {
      if (!deleting) {
        const next = role.slice(0, text.length + 1)
        setText(next)
        if (next === role) setTimeout(() => setDeleting(true), 2400)
      } else {
        const next = role.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIdx((i) => (i + 1) % ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])

  return (
    <section id="about" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container hero-content-wrap">
        <div className="hero-top">
          <div>
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1 className="hero-name">Bilal Shafique</h1>

            <div className="hero-role-line">
              <span>{text}</span>
              <span className="hero-cursor" aria-hidden="true" />
            </div>

            <div className="hero-divider" />

            <p className="hero-bio">
              Data Analyst with 24+ GitHub projects spanning machine learning, business intelligence,
              and web automation. I turn raw data into decisions that move the needle.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <FiArrowDown size={16} />
              </a>
              <a
                href="https://github.com/Bilalshafiq139"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FiGithub size={16} /> GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/bilal-shafique"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <FiLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-avatar">
            <div className="hero-avatar-ring" />
            <div className="hero-avatar-inner" style={{ padding: 0, overflow: 'hidden' }}>
              <img
                src="/photo.png"
                alt="Bilal Shafique"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">
              <CountUp end={24} suffix="+" />
            </div>
            <div className="stat-label">GitHub Projects</div>
          </div>
          <div className="stat-card accent">
            <div className="stat-value">
              <CountUp end={96} suffix=".14%" />
            </div>
            <div className="stat-label">Best Accuracy</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              <CountUp end={5} suffix="+" />
            </div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              <CountUp end={12} suffix="+" />
            </div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}
