'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Twitter, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const allMembers = [
  { id: 1, name: 'Ahmad Razif', role: 'Solana Developer', company: 'FreelanceWeb3', skills: ['Rust', 'Anchor', 'React'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'ahmadrazif', category: 'Core Team', achievements: { hackathons: 3, projects: 8, bounties: 12 } },
  { id: 2, name: 'Siti Nur Aisyah', role: 'UI/UX Designer', company: 'DesignDAO', skills: ['Figma', 'Design', 'Web3'], badge: 'Hackathon Winner', badgeColor: '#f59e0b', twitter: 'sitiaisyah_eth', category: 'Design', achievements: { hackathons: 2, projects: 5, bounties: 7 } },
  { id: 3, name: 'Raj Kumar', role: 'Full Stack Dev', company: 'SolBuilders', skills: ['Next.js', 'Rust', 'Frontend'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'rajkumar_sol', category: 'Frontend', achievements: { hackathons: 1, projects: 6, bounties: 15 } },
  { id: 4, name: 'Wan Farhan', role: 'DeFi Developer', company: 'DecentraMY', skills: ['DeFi', 'Anchor', 'Python'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'wanfarhan_web3', category: 'Rust', achievements: { hackathons: 2, projects: 4, bounties: 9 } },
  { id: 5, name: 'Priya Krishnan', role: 'Content Creator', company: 'Web3Writers', skills: ['Content', 'Marketing', 'Growth'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'priya_web3', category: 'Content', achievements: { hackathons: 0, projects: 3, bounties: 20 } },
  { id: 6, name: 'Chong Wei Ming', role: 'Blockchain Founder', company: 'NexusDeFi', skills: ['Product', 'BizDev', 'Strategy'], badge: 'Founder', badgeColor: '#ec4899', twitter: 'chongweiming_', category: 'Product', achievements: { hackathons: 1, projects: 2, bounties: 5 } },
  { id: 7, name: 'Faizal Hassan', role: 'Smart Contract Dev', company: 'SolanaLabs MY', skills: ['Rust', 'Anchor', 'Security'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'faizal_sol', category: 'Rust', achievements: { hackathons: 4, projects: 9, bounties: 18 } },
  { id: 8, name: 'Li Wei Chen', role: 'Frontend Engineer', company: 'Web3Studio KL', skills: ['React', 'Next.js', 'TypeScript'], badge: 'Hackathon Winner', badgeColor: '#f59e0b', twitter: 'liwei_web3', category: 'Frontend', achievements: { hackathons: 2, projects: 5, bounties: 11 } },
  { id: 9, name: 'Nurul Huda', role: 'Community Manager', company: 'SuperteamMY', skills: ['Community', 'Growth', 'Events'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'nurulhuda_my', category: 'Community', achievements: { hackathons: 0, projects: 2, bounties: 8 } },
  { id: 10, name: 'Darren Ong', role: 'Product Designer', company: 'PixelDAO', skills: ['Design', 'Figma', 'Motion'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'darren_ong_', category: 'Design', achievements: { hackathons: 1, projects: 4, bounties: 6 } },
  { id: 11, name: 'Azri Ramli', role: 'Backend Developer', company: 'ChainVault', skills: ['Node.js', 'Rust', 'APIs'], badge: 'Solana Builder', badgeColor: '#00ff88', twitter: 'azri_dev', category: 'Rust', achievements: { hackathons: 2, projects: 7, bounties: 14 } },
  { id: 12, name: 'Sarah Tan', role: 'Growth Hacker', company: 'Web3Growth MY', skills: ['Marketing', 'Growth', 'Analytics'], badge: 'Core Contributor', badgeColor: '#9945FF', twitter: 'sarahtan_web3', category: 'Growth', achievements: { hackathons: 0, projects: 3, bounties: 16 } },
]

const categories = ['All', 'Core Team', 'Rust', 'Frontend', 'Design', 'Content', 'Growth', 'Product', 'Community']

const avatarColors = ['#9945FF','#00ff88','#f59e0b','#ec4899','#06b6d4','#84cc16','#f97316','#a78bfa','#34d399','#fb7185','#fbbf24','#0ea5e9']
const avatarInitials = ['AR','SN','RK','WF','PK','CW','FH','LW','NH','DO','AZ','ST']

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
    <div className="min-h-screen bg-[#050508]">
      <Navbar />

      {/* Page header */}
      <section className="pt-32 pb-16 relative overflow-hidden gradient-mesh">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[rgba(153,69,255,0.08)] blur-[80px] pointer-events-none" />

        <div className="container-max relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#5a5a72] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block">Directory</span>
            <h1 className="font-['Syne'] text-5xl sm:text-6xl font-black text-white mb-4">
              Superteam Malaysia{' '}
              <span className="gradient-text-green">Members</span>
            </h1>
            <p className="text-[#9090a8] text-lg max-w-2xl mb-8">
              Explore our talented community of developers, designers, founders, content creators, 
              and growth hackers building on Solana in Malaysia.
            </p>

            {/* Search */}
            <div className="relative max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a5a72]" />
              <input
                type="text"
                placeholder="Search members by name, role, or skill..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3.5 text-sm text-white placeholder-[#5a5a72] outline-none focus:border-[rgba(153,69,255,0.4)] transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + Members */}
      <section className="py-10">
        <div className="container-max">
          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[rgba(153,69,255,0.2)] text-[#c084fc] border border-[rgba(153,69,255,0.4)]'
                    : 'bg-white/4 text-[#9090a8] border border-white/8 hover:border-white/15 hover:text-white'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-1.5 text-xs opacity-60">({allMembers.length})</span>
                )}
              </button>
            ))}

            <div className="flex items-center gap-1.5 ml-auto text-xs text-[#5a5a72]">
              <Filter size={12} />
              <span>{filtered.length} member{filtered.length !== 1 ? 's' : ''} found</span>
            </div>
          </motion.div>

          {/* Members grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  {/* Card gradient header */}
                  <div
                    className="h-20 relative"
                    style={{
                      background: `linear-gradient(135deg, ${avatarColors[i % avatarColors.length]}20, rgba(5,5,8,0.9))`,
                    }}
                  >
                    <div
                      className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        color: member.badgeColor,
                        borderColor: `${member.badgeColor}40`,
                        background: `${member.badgeColor}15`,
                      }}
                    >
                      {member.badge}
                    </div>
                  </div>

                  <div className="px-5 pb-5 -mt-8 relative">
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-xl border-2 border-[#050508] flex items-center justify-center text-base font-black mb-3 shadow-lg group-hover:scale-105 transition-transform"
                      style={{
                        background: `linear-gradient(135deg, ${avatarColors[i % avatarColors.length]}, ${avatarColors[(i + 3) % avatarColors.length]})`,
                      }}
                    >
                      <span className="text-white">{avatarInitials[i % avatarInitials.length]}</span>
                    </div>

                    <h3 className="text-white font-bold text-base group-hover:text-[#00ff88] transition-colors">{member.name}</h3>
                    <div className="text-[#9090a8] text-xs mb-0.5">{member.role}</div>
                    <div className="text-[#5a5a72] text-xs mb-3">{member.company}</div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member.skills.map(skill => (
                        <span key={skill} className="skill-badge text-[9px]">{skill}</span>
                      ))}
                    </div>

                    {/* Mini stats */}
                    <div className="grid grid-cols-3 gap-1.5 mb-3 p-2.5 rounded-xl bg-white/3">
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">{member.achievements.hackathons}</div>
                        <div className="text-[#5a5a72] text-[9px]">Hacks</div>
                      </div>
                      <div className="text-center border-x border-white/5">
                        <div className="text-white font-bold text-sm">{member.achievements.projects}</div>
                        <div className="text-[#5a5a72] text-[9px]">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">{member.achievements.bounties}</div>
                        <div className="text-[#5a5a72] text-[9px]">Bounties</div>
                      </div>
                    </div>

                    {/* Twitter */}
                    <a
                      href={`https://twitter.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#5a5a72] hover:text-[#1d9bf0] text-xs transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <Twitter size={11} />
                      @{member.twitter}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-white font-bold text-xl mb-2">No members found</h3>
              <p className="text-[#5a5a72]">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
