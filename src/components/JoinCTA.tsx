'use client'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Twitter, ArrowRight } from 'lucide-react'

const socials = [
  { name: 'Telegram', handle: '@SuperteamMY', href: 'https://t.me/SuperteamMY', icon: <Send size={18} />, color: '#0088cc', label: 'Join Chat' },
  { name: 'Twitter / X', handle: '@SuperteamMY', href: 'https://twitter.com/SuperteamMY', icon: <Twitter size={18} />, color: '#1d9bf0', label: 'Follow' },
  { name: 'Discord', handle: 'Global', href: '#', icon: <MessageCircle size={18} />, color: '#5865F2', label: 'Discord' },
]

export default function JoinCTA() {
  return (
    <section id="join" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'rgba(153,69,255,0.06)', filter: 'blur(100px)', zIndex: 0 }} />

      <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{
            borderRadius: 32, padding: 'clamp(2rem, 6vw, 5rem)', textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(153,69,255,0.08) 0%, rgba(5,5,8,0.4) 50%, rgba(0,255,136,0.04) 100%)',
            border: '1px solid rgba(153,69,255,0.15)',
            marginBottom: '4rem',
          }}
        >
          {/* Malaysia strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: '2rem' }}>
            {['#CC2929', 'rgba(255,255,255,0.3)', '#003399'].map((c, i) => (
              <div key={i} style={{ height: 3, width: 28, background: c, borderRadius: 99 }} />
            ))}
          </div>

          <span className="section-label">Start your journey</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: '2rem' }}>
            Ready to build the<br /><span className="gradient-text-green">future in Malaysia?</span>
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 2.5rem' }}>
            Join the community of builders shaping the decentralized future on Solana. Bounties, grants, and networking await.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            <a href="https://superteam.fun/malaysia" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
              Apply to Join <ArrowRight size={18} />
            </a>
            <a href="https://earn.superteam.fun" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '1rem 2.5rem' }}>
              Explore Bounties
            </a>
          </div>

          {/* Social icons row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {socials.map((s, i) => (
              <motion.a
                key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="glass-card"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem 1.25rem',
                  borderRadius: 20, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 12, background: `${s.color}15`, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.icon}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.82rem' }}>{s.name}</div>
                  <div style={{ color: '#5a5a72', fontSize: '0.7rem' }}>{s.label}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '2.5rem 3rem', borderRadius: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}
        >
          <div>
            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.25rem' }}>Stay updated</h3>
            <p style={{ color: '#9090a8', fontSize: '0.9rem' }}>Get the latest opportunities in your inbox.</p>
          </div>
          <div style={{ display: 'flex', flex: '1 1 300px', maxWidth: 460, gap: '0.625rem' }}>
            <input type="email" placeholder="Email address" style={{
              flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '0 1rem', color: '#fff', outline: 'none',
            }} />
            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              Subscribe <Send size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
