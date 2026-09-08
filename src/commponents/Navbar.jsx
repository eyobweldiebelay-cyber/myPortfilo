import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo / Name */}
        <a href="#home" className="navbar-logo">
          Eyob Belay
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}

          <a href="#contact" className="hire-button">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="hire-button"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar