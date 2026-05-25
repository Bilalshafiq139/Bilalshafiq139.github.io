import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { SiBehance } from 'react-icons/si'

const links = [
  {
    label: 'Email',
    value: 'bilalshafiq139@gmail.com',
    href: 'mailto:bilalshafiq139@gmail.com',
    icon: <FiMail size={20} />,
    color: 'blue',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bilal-shafique',
    href: 'https://www.linkedin.com/in/bilal-shafique',
    icon: <FiLinkedin size={20} />,
    color: 'purple',
  },
  {
    label: 'GitHub',
    value: 'github.com/Bilalshafiq139',
    href: 'https://github.com/Bilalshafiq139',
    icon: <FiGithub size={20} />,
    color: 'green',
  },
  {
    label: 'Behance',
    value: 'behance.net/bilalshafique9',
    href: 'https://www.behance.net/bilalshafique9',
    icon: <SiBehance size={18} />,
    color: 'orange',
  },
]

const infoStats = [
  { icon: '📍', value: 'Faisalabad, Pakistan', label: 'Location' },
  { icon: '💼', value: 'Open to Work', label: 'Status' },
  { icon: '⚡', value: 'Quick Response', label: 'Response Time' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-label">
          <span>◉</span> Get In Touch
        </span>
        <h2 className="section-title">
          Let&apos;s <span>Connect</span>
        </h2>
        <p className="section-desc">
          Looking for a data analyst who can deliver insights, build dashboards, and automate
          workflows? Let&apos;s talk.
        </p>

        <div className="contact-grid">
          {/* Links card */}
          <div className="contact-card">
            <h3 className="contact-title">Reach Out</h3>
            <p className="contact-subtitle">
              I&apos;m available for freelance projects, full-time roles, and collaborations.
            </p>

            <div className="contact-links">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="contact-link"
                >
                  <div className={`contact-link-icon ${l.color}`}>{l.icon}</div>
                  <div className="contact-link-text">
                    <div className="contact-link-label">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                  <FiArrowUpRight className="contact-arrow" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div className="info-card">
            <div
              style={{
                background: 'var(--blue-dim)',
                border: '1px solid var(--blue-border)',
                borderRadius: 'var(--radius-sm)',
                padding: '20px',
                marginBottom: '8px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--blue)',
                  lineHeight: 1.8,
                }}
              >
                <span style={{ color: 'var(--text-700)' }}># About me</span>
                <br />
                name: &quot;Bilal Shafique&quot;
                <br />
                role: &quot;Data Analyst | UI/UX | Automation&quot;
                <br />
                location: &quot;Faisalabad, Punjab, Pakistan&quot;
                <br />
                projects: 24
                <br />
                best_accuracy: &quot;96.14%&quot;
                <br />
                available: true
              </p>
            </div>

            {infoStats.map((s) => (
              <div key={s.label} className="info-stat">
                <div className="info-stat-icon">{s.icon}</div>
                <div>
                  <div className="info-stat-value">{s.value}</div>
                  <div className="info-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
