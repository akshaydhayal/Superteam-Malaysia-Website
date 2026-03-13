'use client'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Solana Foundation', category: 'ecosystem', color: '#9945FF' },
  { name: 'Raydium', category: 'DeFi', color: '#00ff88' },
  { name: 'Magic Eden', category: 'NFT', color: '#ec4899' },
  { name: 'Jito', category: 'Infrastructure', color: '#f59e0b' },
  { name: 'Orca', category: 'DeFi', color: '#06b6d4' },
  { name: 'Pyth Network', category: 'Oracle', color: '#9945FF' },
  { name: 'Jupiter', category: 'DEX', color: '#84cc16' },
  { name: 'Tensor', category: 'NFT', color: '#f97316' },
  { name: 'Drift Protocol', category: 'DeFi', color: '#a78bfa' },
  { name: 'Backpack', category: 'Wallet', color: '#fb7185' },
  { name: 'Marinade', category: 'Staking', color: '#34d399' },
  { name: 'MonkeDAO', category: 'DAO', color: '#fbbf24' },
]

const malaysianPartners = [
  { name: 'Cradle Fund', category: 'VC', color: '#0ea5e9' },
  { name: 'MDEC', category: 'Gov', color: '#CC2929' },
  { name: 'Digital Penang', category: 'Gov', color: '#003399' },
  { name: 'Endeavor MY', category: 'Startup', color: '#6366f1' },
]

function PartnerLogo({ name, color, category }: { name: string; color: string; category: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-2xl px-5 py-4 flex flex-col items-center justify-center gap-2 group cursor-pointer border border-white/5 hover:border-white/15 transition-all duration-300"
    >
      {/* Logo placeholder - styled initial */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${color}20`,
          border: `1px solid ${color}30`,
          color: color,
          boxShadow: `0 0 0 0 ${color}30`,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}30`
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${color}30`
        }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
      <div className="text-[#5a5a72] text-xs font-medium text-center group-hover:text-[#9090a8] transition-colors">{name}</div>
      <div
        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
        style={{ color: color, background: `${color}15` }}
      >
        {category}
      </div>
    </motion.div>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="py-28 relative overflow-hidden">
      <div className="absolute right-10 top-20 w-64 h-64 rounded-full bg-[rgba(0,255,136,0.04)] blur-[60px] pointer-events-none" />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label section-label-green mb-4 block">Partners</span>
          <h2 className="font-['Syne'] text-4xl sm:text-5xl font-black text-white mb-4">
            Trusted by <span className="gradient-text-green">Solana's top</span> projects
          </h2>
          <p className="text-[#9090a8] max-w-xl mx-auto">
            We work with leading Solana ecosystem projects and Malaysian organizations to create 
            opportunities for our builders.
          </p>
        </motion.div>

        {/* Solana Ecosystem */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-[#5a5a72] uppercase tracking-widest mb-5">Solana Ecosystem Partners</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <PartnerLogo {...p} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Malaysian Ecosystem */}
        <div>
          <div className="text-xs font-semibold text-[#5a5a72] uppercase tracking-widest mb-5">Malaysian Ecosystem</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {malaysianPartners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <PartnerLogo {...p} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden py-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#050508] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#050508] to-transparent pointer-events-none" />
          <div className="marquee-inner">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="text-[#5a5a72] text-sm font-medium whitespace-nowrap flex items-center gap-2">
                <span style={{ color: p.color }}>●</span>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
