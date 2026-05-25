import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-text">
          © 2026 Bilal Shafique · Built with React + Vite · Hosted on GitHub Pages
        </span>
        <div className="footer-links">
          <a href="https://github.com/Bilalshafiq139" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/bilal-shafique" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/bilalshafique9" target="_blank" rel="noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
