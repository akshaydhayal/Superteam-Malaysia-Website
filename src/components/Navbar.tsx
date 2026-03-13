'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Members', href: '/members' },
  { label: 'Partners', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-4 sm:mx-8 lg:mx-16 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[rgba(5,5,8,0.85)] backdrop-blur-xl border border-white/8 shadow-2xl'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9945FF] to-[#00ff88] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-all duration-300">
                  <span className="text-white font-black text-sm">ST</span>
                </div>
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-sm tracking-tight">superteam</div>
                <div className="text-[#00ff88] font-black text-xs tracking-widest uppercase">Malaysia</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#9090a8] hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://earn.superteam.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[#9090a8] hover:text-white transition-colors duration-200"
              >
                Earn <ExternalLink size={12} />
              </a>
              <a
                href="#join"
                className="btn-primary text-sm py-2 px-5"
              >
                Join Community
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-white/5 text-[#9090a8] hover:text-white transition-all"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[rgba(5,5,8,0.97)] backdrop-blur-xl flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center text-2xl font-bold text-[#9090a8] hover:text-white py-3 border-b border-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
                className="mt-6"
              >
                <a href="#join" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-base py-3.5">
                  Join Community
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
