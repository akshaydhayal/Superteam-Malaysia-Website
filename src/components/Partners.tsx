'use client'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Solana Foundation', category: 'ecosystem', color: '#9945FF' },
  { name: 'Raydium',           category: 'DeFi',      color: '#00ff88' },
  { name: 'Magic Eden',        category: 'NFT',       color: '#ec4899' },
  { name: 'Jito',              category: 'Infrastructure', color: '#f59e0b' },
  { name: 'Orca',              category: 'DeFi',      color: '#06b6d4' },
  { name: 'Pyth Network',      category: 'Oracle',    color: '#9945FF' },
  { name: 'Jupiter',           category: 'DEX',       color: '#84cc16' },
  { name: 'Tensor',            category: 'NFT',       color: '#f97316' },
  { name: 'Drift Protocol',    category: 'DeFi',      color: '#a78bfa' },
  { name: 'Backpack',          category: 'Wallet',    color: '#fb7185' },
  { name: 'Marinade',          category: 'Staking',   color: '#34d399' },
  { name: 'MonkeDAO',          category: 'DAO',       color: '#fbbf24' },
]

const malaysianPartners = [
  { name: 'Cradle Fund',    category: 'VC',      color: '#0ea5e9' },
  { name: 'MDEC',           category: 'Gov',     color: '#CC2929' },
  { name: 'Digital Penang', category: 'Gov',     color: '#003399' },
  { name: 'Endeavor MY',    category: 'Startup', color: '#6366f1' },
]

function PartnerLogo({ name, color, category, index }: { name: string; color: string; category: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ scale: 1.05 }}
      style={{
        padding: '1.25rem', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
        borderRadius: 20, cursor: 'pointer',
      }}
      className="glass-card glass-card-hover"
    >
      <div style={{
        width: 44, height: 44, borderRadius: 14,
        background: `${color}15`, border: `1px solid ${color}30`,
        color: color, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontWeight: 900, fontSize: '0.9rem',
      }}>
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div style={{ color: '#f0f0f5', fontSize: '0.75rem', fontWeight: 600, textAlign: 'center' }}>{name}</div>
      <div style={{
        fontSize: '0.6rem', color: color, background: `${color}12`,
        padding: '2px 8px', borderRadius: 99, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.04em',
      }}>
        {category}
      </div>
    </motion.div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, top: '20%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(153,69,255,0.04)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">Ecosystem</span>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Trusted by <span className="gradient-text-green">Solana's Top</span> <br /> Projects
          </h2>
        </motion.div>

        {/* Solana Partners */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#5a5a72', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', textAlign: 'center' }}>
            Solana Ecosystem
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
          }}>
            {partners.map((p, i) => <PartnerLogo key={p.name} {...p} index={i} />)}
          </div>
        </div>

        {/* MY Partners */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#5a5a72', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', textAlign: 'center' }}>
            Local Ecosystem
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem',
          }}>
            {malaysianPartners.map((p, i) => <PartnerLogo key={p.name} {...p} index={partners.length + i} />)}
          </div>
        </div>

        {/* Marquee */}
        <div style={{
          marginTop: '6rem', overflow: 'hidden', padding: '1.5rem 0',
          position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div className="marquee-inner">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#5a5a72', fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                <span style={{ color: p.color, fontSize: '1.2rem' }}>●</span>
                {p.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
