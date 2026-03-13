'use client'
import { motion } from 'framer-motion'
import { Twitter, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export const members = [
  {
    id: 1,
    name: 'Ahmad Razif',
    role: 'Solana Developer',
    company: 'FreelanceWeb3',
    skills: ['Rust', 'Anchor', 'React'],
    badge: 'Core Contributor',
    badgeColor: '#9945FF',
    twitter: 'ahmadrazif',
    achievements: { hackathons: 3, projects: 8, bounties: 12 },
    tier: 'featured',
    gradient: 'from-[rgba(153,69,255,0.3)] to-[rgba(0,255,136,0.1)]',
  },
  {
    id: 2,
    name: 'Siti Nur Aisyah',
    role: 'UI/UX Designer',
    company: 'DesignDAO',  
    skills: ['Figma', 'Design', 'Web3'],
    badge: 'Hackathon Winner',
    badgeColor: '#f59e0b',
    twitter: 'sitiaisyah_eth',
    achievements: { hackathons: 2, projects: 5, bounties: 7 },
    tier: 'featured',
    gradient: 'from-[rgba(245,158,11,0.2)] to-[rgba(153,69,255,0.1)]',
  },
  {
    id: 3,
    name: 'Raj Kumar',
    role: 'Full Stack Dev',
    company: 'SolBuilders',
    skills: ['Next.js', 'Rust', 'Frontend'],
    badge: 'Solana Builder',
    badgeColor: '#00ff88',
    twitter: 'rajkumar_sol',
    achievements: { hackathons: 1, projects: 6, bounties: 15 },
    tier: 'featured',
    gradient: 'from-[rgba(0,255,136,0.2)] to-[rgba(6,182,212,0.1)]',
  },
  {
    id: 4,
    name: 'Wan Farhan',
    role: 'DeFi Developer',
    company: 'DecentraMY',
    skills: ['DeFi', 'Anchor', 'Python'],
    badge: 'Solana Builder',
    badgeColor: '#00ff88',
    twitter: 'wanfarhan_web3',
    achievements: { hackathons: 2, projects: 4, bounties: 9 },
    tier: 'regular',
    gradient: 'from-[rgba(6,182,212,0.2)] to-[rgba(153,69,255,0.1)]',
  },
  {
    id: 5,
    name: 'Priya Krishnan',
    role: 'Content Creator',
    company: 'Web3Writers',
    skills: ['Content', 'Marketing', 'Growth'],
    badge: 'Core Contributor',
    badgeColor: '#9945FF',
    twitter: 'priya_web3',
    achievements: { hackathons: 0, projects: 3, bounties: 20 },
    tier: 'regular',
    gradient: 'from-[rgba(236,72,153,0.2)] to-[rgba(153,69,255,0.1)]',
  },
  {
    id: 6,
    name: 'Chong Wei Ming',
    role: 'Blockchain Founder',
    company: 'NexusDeFi',
    skills: ['Product', 'BizDev', 'Strategy'],
    badge: 'Founder',
    badgeColor: '#ec4899',
    twitter: 'chongweiming_',
    achievements: { hackathons: 1, projects: 2, bounties: 5 },
    tier: 'regular',
    gradient: 'from-[rgba(245,158,11,0.15)] to-[rgba(5,5,8,0.8)]',
  },
]

const avatarColors = ['#9945FF','#00ff88','#f59e0b','#ec4899','#06b6d4','#84cc16']
const avatarInitials = ['AR','SN','RK','WF','PK','CW']

function MemberCard({ member, index }: { member: typeof members[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer"
    >
      {/* Card header gradient */}
      <div className={`h-24 bg-gradient-to-br ${member.gradient} relative`}>
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 60%)'
          }}
        />
        {/* Badge */}
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

      {/* Avatar */}
      <div className="px-5 pb-5 -mt-10 relative">
        <div
          className="w-16 h-16 rounded-2xl border-2 border-[#050508] flex items-center justify-center text-lg font-black mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${avatarColors[index % avatarColors.length]}, ${avatarColors[(index + 2) % avatarColors.length]})`,
            boxShadow: `0 4px 20px ${avatarColors[index % avatarColors.length]}30`
          }}
        >
          <span className="text-white">{avatarInitials[index % avatarInitials.length]}</span>
        </div>

        <div className="mb-3">
          <h3 className="text-white font-bold text-base group-hover:text-[#00ff88] transition-colors">{member.name}</h3>
          <div className="text-[#9090a8] text-sm">{member.role}</div>
          <div className="text-[#5a5a72] text-xs">{member.company}</div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {member.skills.map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-white/3">
          <div className="text-center">
            <div className="text-white font-bold text-sm">{member.achievements.hackathons}</div>
            <div className="text-[#5a5a72] text-[10px]">Hackathons</div>
          </div>
          <div className="text-center border-x border-white/5">
            <div className="text-white font-bold text-sm">{member.achievements.projects}</div>
            <div className="text-[#5a5a72] text-[10px]">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-sm">{member.achievements.bounties}</div>
            <div className="text-[#5a5a72] text-[10px]">Bounties</div>
          </div>
        </div>

        {/* Twitter link */}
        <a
          href={`https://twitter.com/${member.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#5a5a72] hover:text-white text-xs transition-colors"
          onClick={e => e.stopPropagation()}
        >
          <Twitter size={12} />
          @{member.twitter}
        </a>
      </div>
    </motion.div>
  )
}

export default function Members() {
  return (
    <section id="members" className="py-28 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(153,69,255,0.04)] blur-[100px] pointer-events-none" />

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="section-label mb-4 block">Community</span>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-black text-white leading-tight">
              Meet our{' '}
              <span className="gradient-text-purple">Solana builders</span>
            </h2>
            <p className="text-[#9090a8] mt-3 max-w-md">
              Talented developers, designers, founders, and creators shaping the future of Web3 in Malaysia.
            </p>
          </div>
          <Link href="/members" className="btn-secondary shrink-0">
            View All Members <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Featured row */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-4">
            <Star size={14} className="text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">Featured Members</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {members.slice(0, 3).map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.slice(3, 6).map((m, i) => (
            <MemberCard key={m.id} member={m} index={i + 3} />
          ))}
        </div>

        {/* See all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/members" className="btn-primary">
            Explore All Members <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
