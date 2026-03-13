'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-overlay hero-bg"
      style={{ minHeight: '100vh' }}
    >
      {/* Ambient blobs */}
      <div style={{
        position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 700, borderRadius: '50%',
        background: 'rgba(153,69,255,0.07)', filter: 'blur(120px)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '15%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(0,255,136,0.05)', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      {/* Floating badges - desktop only */}
      {[
        { icon: '🏆', text: 'Hackathon Winners', left: '6%', top: '22%', delay: 0.3 },
        { icon: '🌐', text: 'Web3 Builders',     left: '76%', top: '18%', delay: 0.5 },
        { icon: '💡', text: 'Founders',           left: '80%', top: '62%', delay: 0.7 },
        { icon: '🇲🇾', text: 'Malaysian Talent', left: '4%',  top: '68%', delay: 0.9 },
      ].map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay, duration: 0.5 }}
          style={{ position: 'absolute', left: badge.left, top: badge.top, zIndex: 2 }}
          className="hidden lg:flex items-center gap-2 glass-card rounded-full px-4 py-2 text-xs font-medium pointer-events-none"
          aria-hidden="true"
        >
          <span>{badge.icon}</span>
          <span style={{ color: '#9090a8' }}>{badge.text}</span>
        </motion.div>
      ))}

      {/* Orbital rings decoration */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)', animation: 'spinSlow 40s linear infinite' }} />
        <div style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)', animation: 'spinSlow 28s linear infinite reverse' }} />
      </div>

      {/* Main content */}
      <div className="container-max" style={{ position: 'relative', zIndex: 1, paddingTop: '9rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
          >
            <span className="section-label section-label-green" style={{ marginBottom: 0 }}>
              <span style={{
                display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
                background: '#00ff88', animation: 'glowPulse 2s ease infinite'
              }} />
              Now Live in Malaysia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.8rem, 7vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: '1.75rem' }}
          >
            The Home <br />
            <span style={{ color: '#9090a8', opacity: 0.8 }}>for</span> <br />
            <span className="gradient-text-green">Solana Builders</span> <br />
            in Malaysia
          </motion.h1>

          {/* Malaysia flag stripes */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: '2rem' }}
          >
            {['#CC2929', 'rgba(255,255,255,0.35)', '#003399'].map((c, i) => (
              <div key={i} style={{ height: 3, width: 40, background: c, borderRadius: 99 }} />
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: '1.125rem',
              color: '#9090a8',
              maxWidth: 560,
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Superteam Malaysia connects the best builders, founders, and creators in the Solana
            ecosystem. Find opportunities, ship products, grow together.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}
          >
            <a href="#join" className="btn-primary">
              Join Community <ArrowRight size={16} />
            </a>
            <a href="https://earn.superteam.fun" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Explore Bounties <Zap size={16} />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#5a5a72' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex' }}>
                {['#9945FF','#00ff88','#f59e0b','#ec4899','#06b6d4'].map((color, i) => (
                  <div key={i} style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: color, border: '2px solid #050508',
                    marginLeft: i > 0 ? -8 : 0, zIndex: 5 - i
                  }} />
                ))}
              </div>
              <span>200+ members and growing</span>
            </div>
            <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} className="hidden sm:block" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Users size={14} style={{ color: '#9945FF' }} />
              <span>Part of the global Superteam network</span>
            </div>
          </motion.div>
        </div>

        {/* Hero visual card */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          style={{ marginTop: '5rem', position: 'relative' }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
            {/* Glow halo */}
            <div style={{
              position: 'absolute', inset: -16, borderRadius: 32,
              background: 'linear-gradient(135deg, rgba(153,69,255,0.12), rgba(0,255,136,0.07))',
              filter: 'blur(32px)', zIndex: 0
            }} />

            {/* Main image card */}
            <div className="glass-card" style={{
              borderRadius: 24, overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
              position: 'relative', zIndex: 1
            }}>
              {/* KL Skyline visual */}
              <div style={{
                height: 320,
                background: 'linear-gradient(135deg, rgba(153,69,255,0.18) 0%, rgba(5,5,8,0.85) 50%, rgba(0,255,136,0.08) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden'
              }}>
                {/* KL skyline SVG */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', opacity: 0.35 }}>
                  <svg viewBox="0 0 1200 300" style={{ width: '100%' }} fill="none">
                    <rect x="500" y="60" width="26" height="240" fill="rgba(153,69,255,0.7)" rx="2"/>
                    <rect x="532" y="60" width="26" height="240" fill="rgba(153,69,255,0.7)" rx="2"/>
                    <polygon points="513,38 500,62 526,62" fill="rgba(153,69,255,0.9)"/>
                    <polygon points="545,38 532,62 558,62" fill="rgba(153,69,255,0.9)"/>
                    <rect x="515" y="153" width="28" height="9" fill="rgba(153,69,255,0.6)" rx="1"/>
                    <rect x="395" y="118" width="42" height="182" fill="rgba(120,120,180,0.25)" rx="2"/>
                    <rect x="447" y="98" width="32" height="202" fill="rgba(120,120,180,0.22)" rx="2"/>
                    <rect x="580" y="88" width="38" height="212" fill="rgba(120,120,180,0.20)" rx="2"/>
                    <rect x="625" y="108" width="52" height="192" fill="rgba(120,120,180,0.18)" rx="2"/>
                    <rect x="683" y="128" width="32" height="172" fill="rgba(120,120,180,0.16)" rx="2"/>
                    <rect x="345" y="138" width="38" height="162" fill="rgba(120,120,180,0.15)" rx="2"/>
                    <rect x="722" y="118" width="42" height="182" fill="rgba(120,120,180,0.13)" rx="2"/>
                    <rect x="200" y="98" width="11" height="202" fill="rgba(0,255,136,0.35)" rx="1"/>
                    <ellipse cx="205" cy="93" rx="22" ry="13" fill="rgba(0,255,136,0.22)"/>
                    <rect x="0" y="295" width="1200" height="5" fill="rgba(153,69,255,0.35)"/>
                  </svg>
                </div>

                {/* Stats overlay */}
                <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem', padding: '2rem', width: '100%', maxWidth: 680 }}>
                  {[
                    { num: '200+', label: 'Community Members', color: '#00ff88' },
                    { num: '15+',  label: 'Events Hosted',     color: '#9945FF' },
                    { num: '50+',  label: 'Projects Built',    color: '#f59e0b' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.15 }}
                      className="glass-card"
                      style={{ borderRadius: 16, padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <div style={{ fontSize: '2.25rem', fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: '0.4rem' }}>{stat.num}</div>
                      <div style={{ fontSize: '0.78rem', color: '#9090a8', fontWeight: 500, lineHeight: 1.3 }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: '3rem' }}
        >
          <span style={{ fontSize: '0.7rem', color: '#5a5a72', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #9945FF, transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
