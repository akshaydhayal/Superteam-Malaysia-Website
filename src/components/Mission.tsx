'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Users, Globe, BookOpen, Trophy, Coins } from 'lucide-react'

const pillars = [
  { icon: <Users size={22} />,     title: 'Builder Support & Mentorship', desc: 'Connect with experienced builders who guide you through your Web3 journey. From ideation to launch, we\'ve got your back.', color: '#9945FF', glow: 'rgba(153,69,255,0.15)' },
  { icon: <Trophy size={22} />,    title: 'Events & Hackathons',           desc: 'Compete, collaborate, and connect at regular hackathons, workshops, and community gatherings across Malaysia.',            color: '#00ff88', glow: 'rgba(0,255,136,0.1)' },
  { icon: <Coins size={22} />,     title: 'Grants & Funding Access',       desc: 'Unlock access to Solana Foundation grants, ecosystem funding, and early-stage investment opportunities.',                  color: '#f59e0b', glow: 'rgba(245,158,11,0.1)' },
  { icon: <Lightbulb size={22} />, title: 'Jobs, Bounties & Opportunities',desc: 'Access curated Web3 jobs, bounties, and freelance work from the best Solana projects globally.',                         color: '#ec4899', glow: 'rgba(236,72,153,0.1)' },
  { icon: <BookOpen size={22} />,  title: 'Education & Workshops',         desc: 'Learn Solana development, product design, and Web3 fundamentals through structured programs.',                            color: '#06b6d4', glow: 'rgba(6,182,212,0.1)' },
  { icon: <Globe size={22} />,     title: 'Ecosystem Connections',         desc: 'Tap into the global Superteam network across 20+ countries, connecting Malaysian talent to the world.',                    color: '#9945FF', glow: 'rgba(153,69,255,0.15)' },
]

export default function Mission() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: 400, height: 400, borderRadius: '50%', background: 'rgba(153,69,255,0.04)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 680, marginBottom: '4rem' }}
        >
          <span className="section-label">Our Mission</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#fff',
            marginBottom: '1.25rem',
          }}>
            Building the future of{' '}
            <span className="gradient-text-green">Web3 in Malaysia</span>
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 560 }}>
            Superteam Malaysia is the local chapter of the global Superteam network,
            dedicated to empowering builders, creators, and founders in the Solana ecosystem.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover"
              style={{ padding: '2.5rem', borderRadius: 24, border: '1px solid rgba(255,255,255,0.06)', height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              {/* Icon */}
              <div style={{ width: 64, height: 64, borderRadius: 16, background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}10)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: pillar.color, marginBottom: '2rem' }}>
                {pillar.icon}
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', fontFamily: "'Syne', sans-serif" }}>
                {pillar.title}
              </h3>
              <p style={{ color: '#9090a8', fontSize: '1rem', lineHeight: 1.7, flexGrow: 1 }}>
                {pillar.desc}
              </p>
              {/* Accent line */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ height: 2, width: 32, background: pillar.color, borderRadius: 99, transition: 'width 0.3s' }} />
                <span style={{ fontSize: '0.75rem', color: '#5a5a72' }}>Learn more →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            borderRadius: 24, padding: '3rem', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(153,69,255,0.12) 0%, rgba(0,255,136,0.06) 100%)',
            border: '1px solid rgba(153,69,255,0.16)',
          }}
        >
          <div style={{ position: 'absolute', right: -60, top: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(153,69,255,0.1)', filter: 'blur(50px)' }} />
          <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.75rem', fontWeight: 900, color: '#fff', marginBottom: '0.5rem' }}>
                Ready to join the movement?
              </h3>
              <p style={{ color: '#9090a8' }}>Be part of Malaysia&apos;s fastest-growing Web3 community.</p>
            </div>
            <a href="#join" className="btn-primary" style={{ flexShrink: 0 }}>
              Get Started →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
