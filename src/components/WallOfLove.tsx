'use client'
import { motion } from 'framer-motion'
import { Twitter, Quote } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Ahmad Razif',      handle: '@ahmadrazif',     avatar: 'AR', color: '#9945FF', text: 'Superteam Malaysia changed my life. I went from a regular developer to shipping 3 Solana products in 6 months. The community is unreal. 🇲🇾', likes: 342, featured: true },
  { id: 2, name: 'Siti Nur Aisyah',  handle: '@sitiaisyah_eth', avatar: 'SN', color: '#00ff88', text: 'The Superteam Malaysia bounties program helped me earn more as a designer than my full-time job. Web3 is real and Malaysia is punching above its weight.', likes: 218, featured: false },
  { id: 3, name: 'Raj Kumar',        handle: '@rajkumar_sol',   avatar: 'RK', color: '#f59e0b', text: 'Won my first hackathon with help from the community who spent hours debugging Anchor with me at midnight. That\'s the vibe here.', likes: 456, featured: true },
  { id: 4, name: 'Wan Farhan',       handle: '@wanfarhan_web3', avatar: 'WF', color: '#06b6d4', text: 'Superteam MY\'s workshops made it click for me. Now I\'m building DeFi protocols. Never stop learning! 🚀', likes: 189, featured: false },
  { id: 5, name: 'Priya Krishnan',   handle: '@priya_web3',     avatar: 'PK', color: '#ec4899', text: 'The global network through the MY chapter connected me to amazing teams. Remote Web3 work is the future.', likes: 267, featured: false },
  { id: 6, name: 'Chong Wei Ming',   handle: '@chongwm_',       avatar: 'CW', color: '#84cc16', text: 'Raised seed funding after connecting with investors through Superteam Malaysia events. Real value creation.', likes: 398, featured: true },
]

export default function WallOfLove() {
  return (
    <section id="love" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: '40%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(0,255,136,0.04)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">Wall of Love</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
            What our builders <span className="gradient-text-green">are saying</span>
          </h2>
          <p style={{ color: '#9090a8', fontSize: '1.05rem', maxWidth: 480, margin: '0 auto' }}>
            Real stories from builders across Malaysia.
          </p>
        </motion.div>

        {/* Masonry-ish grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {testimonials.map((tweet, i) => (
            <motion.div
              key={tweet.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card"
              style={{
                borderRadius: 24, padding: '1.75rem', position: 'relative',
                border: tweet.featured ? '1px solid rgba(153,69,255,0.2)' : '1px solid rgba(255,255,255,0.07)',
                background: tweet.featured ? 'rgba(153,69,255,0.03)' : 'rgba(255,255,255,0.025)',
              }}
            >
              <Quote style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.05, color: tweet.color }} size={40} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${tweet.color}, ${tweet.color}80)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 900, fontSize: '0.85rem',
                }}>
                  {tweet.avatar}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem' }}>{tweet.name}</div>
                  <div style={{ color: '#5a5a72', fontSize: '0.75rem' }}>{tweet.handle}</div>
                </div>
                <Twitter size={16} style={{ marginLeft: 'auto', color: '#1d9bf0', opacity: 0.6 }} />
              </div>

              <p style={{ color: '#f0f0f5', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {tweet.text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#5a5a72' }}>❤️ {tweet.likes}</span>
                {tweet.featured && (
                  <span style={{
                    marginLeft: 'auto', fontSize: '0.62rem', fontWeight: 800,
                    textTransform: 'uppercase', letterSpacing: '0.05em', color: tweet.color,
                    background: `${tweet.color}15`, padding: '2px 8px', borderRadius: 99,
                  }}>Featured</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
