'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 200, suffix: '+', label: 'Community Members',  desc: 'Builders, founders & creators',        color: '#00ff88' },
  { value: 15,  suffix: '+', label: 'Events Hosted',       desc: 'Hackathons, workshops & meetups',      color: '#9945FF' },
  { value: 50,  suffix: '+', label: 'Projects Built',      desc: 'On Solana by Malaysian builders',      color: '#f59e0b' },
  { value: 30,  suffix: '+', label: 'Bounties Completed',  desc: 'Total value in USDC earned',           color: '#ec4899' },
  { value: 5,   suffix: 'K+',label: 'Community Reach',    desc: 'Across social channels',               color: '#06b6d4' },
  { value: 20,  suffix: '+', label: 'Global Network',      desc: 'Superteam chapters worldwide',         color: '#9945FF' },
]

function AnimatedCounter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <div ref={ref} style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 900, color, lineHeight: 1 }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section-padding section-alt-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 350, height: 350, borderRadius: '50%', background: 'rgba(153,69,255,0.06)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label section-label-green">Impact</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
            Growing <span className="gradient-text-purple">stronger</span> every day
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto' }}>
            Real numbers from a real community building real products on Solana.
          </p>
        </motion.div>

        <div className="container-max" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem',
        marginTop: '-4rem',
        position: 'relative',
        zIndex: 20
      }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ 
                padding: '3rem 2rem', 
                borderRadius: 24, 
                border: '1px solid rgba(255,255,255,0.06)', 
                textAlign: 'center',
                background: 'rgba(10,10,15,0.8)',
                backdropFilter: 'blur(20px)'
              }}
            >
              {/* Glow corner */}
              <div style={{ position: 'absolute', top: -30, right: -30, width: 90, height: 90, borderRadius: '50%', background: stat.color, filter: 'blur(20px)', opacity: 0.18 }} />
              
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontSize: '4rem', 
                  fontWeight: 900, 
                  color: '#fff', 
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.04em'
                }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
                </div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginTop: '0.6rem', marginBottom: '0.3rem' }}>{stat.label}</div>
                <div style={{ color: '#5a5a72', fontSize: '0.82rem' }}>{stat.desc}</div>
                <div style={{ marginTop: '1.25rem', height: 2, width: 36, borderRadius: 99, background: `linear-gradient(90deg, ${stat.color}, transparent)` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
