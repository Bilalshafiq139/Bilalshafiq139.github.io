import { useState, useEffect } from 'react'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 40px rgba(0,0,0,0.4)' } : {}}>
      <div className="navbar-inner">
        <a href="#about" className="navbar-logo">
          <div className="navbar-logo-badge">BS</div>
          Bilal Shafique
        </a>

        <ul className="navbar-nav">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <a
            href="https://github.com/Bilalshafiq139"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <button
            className="navbar-menu-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 68,
            left: 0,
            right: 0,
            background: 'var(--bg-800)',
            borderBottom: '1px solid var(--border)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 16px',
                color: 'var(--text-300)',
                fontSize: '15px',
                fontWeight: 500,
                borderRadius: 'var(--radius-sm)',
                display: 'block',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
