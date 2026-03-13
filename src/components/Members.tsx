'use client'
import { motion } from 'framer-motion'
import { Twitter, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export const members = [
  { id: 1, name: 'Ahmad Razif',    role: 'Solana Developer',    company: 'FreelanceWeb3', skills: ['Rust', 'Anchor', 'React'],         badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'ahmadrazif',    achievements: { hackathons: 3, projects: 8,  bounties: 12 }, initials: 'AR', c1: '#9945FF', c2: '#c084fc' },
  { id: 2, name: 'Siti Nur Aisyah',role: 'UI/UX Designer',      company: 'DesignDAO',     skills: ['Figma', 'Design', 'Web3'],          badge: 'Hackathon Winner', badgeColor: '#f59e0b', twitter: 'sitiaisyah',   achievements: { hackathons: 2, projects: 5,  bounties: 7  }, initials: 'SN', c1: '#f59e0b', c2: '#fbbf24' },
  { id: 3, name: 'Raj Kumar',      role: 'Full Stack Dev',       company: 'SolBuilders',   skills: ['Next.js', 'Rust', 'Frontend'],       badge: 'Solana Builder',   badgeColor: '#00ff88', twitter: 'rajkumar_sol', achievements: { hackathons: 1, projects: 6,  bounties: 15 }, initials: 'RK', c1: '#00ff88', c2: '#06b6d4' },
  { id: 4, name: 'Wan Farhan',     role: 'DeFi Developer',       company: 'DecentraMY',    skills: ['DeFi', 'Anchor', 'Python'],         badge: 'Solana Builder',   badgeColor: '#00ff88', twitter: 'wanfarhan',    achievements: { hackathons: 2, projects: 4,  bounties: 9  }, initials: 'WF', c1: '#06b6d4', c2: '#84cc16' },
  { id: 5, name: 'Priya Krishnan', role: 'Content Creator',      company: 'Web3Writers',   skills: ['Content', 'Marketing', 'Growth'],   badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'priya_web3',   achievements: { hackathons: 0, projects: 3,  bounties: 20 }, initials: 'PK', c1: '#ec4899', c2: '#9945FF' },
  { id: 6, name: 'Chong Wei Ming', role: 'Blockchain Founder',   company: 'NexusDeFi',    skills: ['Product', 'BizDev', 'Strategy'],    badge: 'Founder',          badgeColor: '#ec4899', twitter: 'chongwm',      achievements: { hackathons: 1, projects: 2,  bounties: 5  }, initials: 'CW', c1: '#f59e0b', c2: '#ec4899' },
]

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="glass-card"
      style={{ borderRadius: 24, overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s' }}
    >
      {/* Card header */}
      <div style={{ height: 100, background: `linear-gradient(135deg, ${member.c1}22 0%, rgba(5,5,8,0.9) 100%)`, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 16, right: 16, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 12px', borderRadius: 99, color: member.badgeColor, background: `${member.badgeColor}18`, border: `1px solid ${member.badgeColor}35` }}>
          {member.badge}
        </div>
      </div>

      <div style={{ padding: '0 2.5rem 2.5rem', marginTop: -40 }}>
        {/* Avatar */}
        <div style={{
          width: 64, height: 64, borderRadius: 16, border: '4px solid #050508',
          background: `linear-gradient(135deg, ${member.c1}, ${member.c2})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.25rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem',
          boxShadow: `0 10px 20px rgba(0,0,0,0.2)`,
        }}>
          {member.initials}
        </div>

        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', marginBottom: 4, fontFamily: "'Syne', sans-serif" }}>{member.name}</div>
          <div style={{ color: '#9090a8', fontSize: '0.85rem' }}>{member.role}</div>
          <div style={{ color: '#5a5a72', fontSize: '0.75rem' }}>{member.company}</div>
        </div>

        {/* Skills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
          {member.skills.map(s => <span key={s} className="skill-badge">{s}</span>)}
        </div>

        {/* Achievements row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderRadius: 16, background: 'rgba(255,255,255,0.03)', overflow: 'hidden', marginBottom: '1rem' }}>
          {[['Hackathons', member.achievements.hackathons], ['Projects', member.achievements.projects], ['Bounties', member.achievements.bounties]].map(([label, val], j) => (
            <div key={label as string} style={{ padding: '0.625rem 0', textAlign: 'center', borderRight: j < 2 ? '1px solid rgba(255,255,255,0.05)' : undefined }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{val}</div>
              <div style={{ color: '#5a5a72', fontSize: '0.68rem', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Twitter */}
        <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#5a5a72', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#1d9bf0')}
          onMouseLeave={e => (e.currentTarget.style.color = '#5a5a72')}
        >
          <Twitter size={12} />@{member.twitter}
        </a>
      </div>
    </motion.div>
  )
}

export default function Members() {
  return (
    <section id="members" className="section-padding section-alt-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'rgba(153,69,255,0.04)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <div>
            <span className="section-label">Community</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15, maxWidth: 480 }}>
              Meet our <span className="gradient-text-purple">Solana builders</span>
            </h2>
            <p style={{ color: '#9090a8', marginTop: '0.75rem', maxWidth: 440, fontSize: '0.975rem' }}>
              Talented developers, designers, founders, and creators shaping Web3 in Malaysia.
            </p>
          </div>
          <Link href="/members" className="btn-secondary" style={{ flexShrink: 0 }}>
            View All Members <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Featured label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Star size={13} style={{ color: '#f59e0b' }} />
          <span style={{ color: '#f59e0b', fontSize: '0.82rem', fontWeight: 600 }}>Featured Members</span>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {members.map((m, i) => <MemberCard key={m.id} member={m} index={i} />)}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/members" className="btn-primary">
            Explore All Members <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
