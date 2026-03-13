'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Members', href: '#members' },
  { name: 'Partners', href: '#partners' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(5, 5, 8, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      }}
    >
      <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'linear-gradient(135deg, #9945FF, #00ff88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(153,69,255,0.3)',
          }}>
            <span style={{ color: '#fff', fontWeight: 900, fontSize: '0.9rem' }}>ST</span>
          </div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>superteam</div>
            <div style={{ color: '#00ff88', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Malaysia</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'none' }} className="lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                color: '#9090a8', fontSize: '0.85rem', fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9090a8')}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div style={{ display: 'none' }} className="lg:flex items-center gap-4">
          <a
            href="https://earn.superteam.fun"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#9090a8', fontSize: '0.85rem', fontWeight: 500,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4,
            }}
          >
            Earn <ArrowUpRight size={14} />
          </a>
          <Link
            href="#join"
            style={{
              background: '#00ff88', color: '#050508', fontWeight: 700,
              fontSize: '0.85rem', padding: '0.6rem 1.25rem', borderRadius: 99,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Join Community
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex', background: 'none', border: 'none', color: '#fff',
            cursor: 'pointer', padding: 4,
          }}
          className="lg:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(5, 5, 8, 0.98)', backdropFilter: 'blur(16px)',
              padding: '2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ height: 1, background: 'rgba(255, 255, 255, 0.05)', margin: '0.5rem 0' }} />
            <a
              href="https://earn.superteam.fun"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00ff88', fontWeight: 600, textDecoration: 'none' }}
            >
              Earn Platform →
            </a>
            <Link
              href="#join"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: '#00ff88', color: '#050508', fontWeight: 700,
                padding: '1rem', borderRadius: 12, textAlign: 'center', textDecoration: 'none',
              }}
            >
              Join Community
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
