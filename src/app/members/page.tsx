'use client'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Twitter, ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const allMembers = [
  { id: 1, name: 'Ahmad Razif', role: 'Solana Developer', company: 'FreelanceWeb3', skills: ['Rust', 'Anchor', 'React'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'ahmadrazif', category: 'Core Team', achievements: { hackathons: 3, projects: 8, bounties: 12 }, initials: 'AR', c1: '#9945FF', c2: '#c084fc' },
  { id: 2, name: 'Siti Nur Aisyah', role: 'UI/UX Designer', company: 'DesignDAO', skills: ['Figma', 'Design', 'Web3'], badge: 'Hackathon Winner', badgeColor: '#f59e0b', twitter: 'sitiaisyah_eth', category: 'Design', achievements: { hackathons: 2, projects: 5, bounties: 7 }, initials: 'SN', c1: '#f59e0b', c2: '#fbbf24' },
  { id: 3, name: 'Raj Kumar', role: 'Full Stack Dev', company: 'SolBuilders', skills: ['Next.js', 'Rust', 'Frontend'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'rajkumar_sol', category: 'Frontend', achievements: { hackathons: 1, projects: 6, bounties: 15 }, initials: 'RK', c1: '#00ff88', c2: '#06b6d4' },
  { id: 4, name: 'Wan Farhan', role: 'DeFi Developer', company: 'DecentraMY', skills: ['DeFi', 'Anchor', 'Python'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'wanfarhan_web3', category: 'Rust', achievements: { hackathons: 2, projects: 4, bounties: 9 }, initials: 'WF', c1: '#06b6d4', c2: '#84cc16' },
  { id: 5, name: 'Priya Krishnan', role: 'Content Creator', company: 'Web3Writers', skills: ['Content', 'Marketing', 'Growth'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'priya_web3', category: 'Content', achievements: { hackathons: 0, projects: 3, bounties: 20 }, initials: 'PK', c1: '#ec4899', c2: '#9945FF' },
  { id: 6, name: 'Chong Wei Ming', role: 'Blockchain Founder', company: 'NexusDeFi', skills: ['Product', 'BizDev', 'Strategy'], badge: 'Founder', badgeColor: '#ec4899', twitter: 'chongweiming_', category: 'Product', achievements: { hackathons: 1, projects: 2, bounties: 5 }, initials: 'CW', c1: '#f59e0b', c2: '#ec4899' },
  { id: 7, name: 'Faizal Hassan', role: 'Smart Contract Dev', company: 'SolanaLabs MY', skills: ['Rust', 'Anchor', 'Security'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'faizal_sol', category: 'Rust', achievements: { hackathons: 4, projects: 9, bounties: 18 }, initials: 'FH', c1: '#00ff88', c2: '#06b6d4' },
  { id: 8, name: 'Li Wei Chen', role: 'Frontend Engineer', company: 'Web3Studio KL', skills: ['React', 'Next.js', 'TypeScript'], badge: 'Hackathon Winner', badgeColor: '#f59e0b', twitter: 'liwei_web3', category: 'Frontend', achievements: { hackathons: 2, projects: 5, bounties: 11 }, initials: 'LW', c1: '#f59e0b', c2: '#fbbf24' },
  { id: 9, name: 'Nurul Huda', role: 'Community Manager', company: 'SuperteamMY', skills: ['Community', 'Growth', 'Events'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'nurulhuda_my', category: 'Community', achievements: { hackathons: 0, projects: 2, bounties: 8 }, initials: 'NH', c1: '#9945FF', c2: '#c084fc' },
  { id: 10, name: 'Darren Ong', role: 'Product Designer', company: 'PixelDAO', skills: ['Design', 'Figma', 'Motion'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'darren_ong_', category: 'Design', achievements: { hackathons: 1, projects: 4, bounties: 6 }, initials: 'DO', c1: '#00ff88', c2: '#06b6d4' },
  { id: 11, name: 'Azri Ramli', role: 'Backend Developer', company: 'ChainVault', skills: ['Node.js', 'Rust', 'APIs'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'azri_dev', category: 'Rust', achievements: { hackathons: 2, projects: 7, bounties: 14 }, initials: 'AZ', c1: '#00ff88', c2: '#06b6d4' },
  { id: 12, name: 'Sarah Tan', role: 'Growth Hacker', company: 'Web3Growth MY', skills: ['Marketing', 'Growth', 'Analytics'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'sarahtan_web3', category: 'Growth', achievements: { hackathons: 0, projects: 3, bounties: 16 }, initials: 'ST', c1: '#ec4899', c2: '#9945FF' },
]

const categories = ['All', 'Core Team', 'Rust', 'Frontend', 'Design', 'Content', 'Growth', 'Product', 'Community']

export default function MembersPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    return allMembers.filter(m => {
      const matchesSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.role.toLowerCase().includes(search.toLowerCase()) ||
        m.company.toLowerCase().includes(search.toLowerCase()) ||
        m.skills.some(s => s.toLowerCase().includes(search.toLowerCase()))
      const matchesCategory = activeCategory === 'All' || m.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  return (
    <main style={{ backgroundColor: '#050508', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }} className="grid-overlay">
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, background: 'rgba(153,69,255,0.08)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
        
        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', color: '#5a5a72', textDecoration: 'none', marginBottom: '2.5rem' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#5a5a72'}>
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <header style={{ maxWidth: 800 }}>
            <span className="section-label">Directory</span>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Superteam Malaysia <span className="gradient-text-green">Members</span>
            </h1>
            <p style={{ color: '#9090a8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: 640 }}>
              Discover the builders, designers, and creators shaping the Solana ecosystem in Malaysia. 
              Find collaborators, projects, and new opportunities.
            </p>

            {/* Search Bar */}
            <div style={{ position: 'relative', maxWidth: 480 }}>
              <div style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#5a5a72' }}>
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Search by name, role, or skill..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 16, padding: '1rem 1rem 1rem 3rem', color: '#fff', fontSize: '0.95rem',
                  outline: 'none', transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(153,69,255,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
          </header>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ paddingBottom: '8rem', flex: 1 }}>
        <div className="container-max">
          {/* Filters Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.15rem', borderRadius: 99, fontSize: '0.82rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s',
                    background: activeCategory === cat ? 'rgba(153,69,255,0.15)' : 'rgba(255,255,255,0.03)',
                    color: activeCategory === cat ? '#c084fc' : '#9090a8',
                    border: activeCategory === cat ? '1px solid rgba(153,69,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => { if(activeCategory !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
                  onMouseLeave={e => { if(activeCategory !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
                >
                  {cat}
                  {cat === 'All' && <span style={{ marginLeft: 6, opacity: 0.5 }}>({allMembers.length})</span>}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#5a5a72', background: 'rgba(255,255,255,0.02)', padding: '6px 12px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.05)' }}>
              <Filter size={12} />
              <span>{filtered.length} found</span>
            </div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                layout
                style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {filtered.map((member, i) => (
                  <motion.div
                    key={member.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="glass-card"
                    style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer' }}
                  >
                    <div style={{ height: 80, background: `linear-gradient(135deg, ${member.c1}18 0%, rgba(5,5,8,0.9) 100%)`, position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 12, right: 12, fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: 99, color: member.badgeColor, background: `${member.badgeColor}15`, border: `1px solid ${member.badgeColor}25` }}>
                        {member.badge}
                      </div>
                    </div>

                    <div style={{ padding: '0 1.25rem 1.25rem', marginTop: -32 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 12, border: '3px solid #050508', background: `linear-gradient(135deg, ${member.c1}, ${member.c2})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1rem', marginBottom: '0.875rem' }}>
                        {member.initials}
                      </div>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>{member.name}</div>
                        <div style={{ color: '#9090a8', fontSize: '0.78rem' }}>{member.role}</div>
                        <div style={{ color: '#5a5a72', fontSize: '0.72rem' }}>{member.company}</div>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                        {member.skills.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 12, overflow: 'hidden', marginBottom: '1.25rem' }}>
                        {[['Hacks', member.achievements.hackathons], ['Projs', member.achievements.projects], ['Stats', member.achievements.bounties]].map(([l, v], j) => (
                          <div key={l as string} style={{ padding: '0.6rem 0', textAlign: 'center', background: '#08080c' }}>
                            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>{v}</div>
                            <div style={{ color: '#5a5a72', fontSize: '0.62rem', marginTop: 2 }}>{l}</div>
                          </div>
                        ))}
                      </div>

                      <a href={`https://twitter.com/${member.twitter}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#5a5a72', fontSize: '0.75rem', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = '#1d9bf0'} onMouseLeave={e => e.currentTarget.style.color = '#5a5a72'}>
                        <Twitter size={11} /> @{member.twitter}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '8rem 0', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#5a5a72' }}>
                  <Users size={32} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>No members found</h3>
                <p style={{ color: '#9090a8' }}>Try adjusting your search or filters.</p>
                <button onClick={() => { setSearch(''); setActiveCategory('All') }} style={{ marginTop: '1.5rem', color: '#00ff88', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
