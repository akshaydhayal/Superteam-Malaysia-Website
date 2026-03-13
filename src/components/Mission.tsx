'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Users, Globe, BookOpen, Trophy, Coins } from 'lucide-react'

const pillars = [
  {
    icon: <Users size={24} />,
    title: 'Builder Support & Mentorship',
    desc: 'Connect with experienced builders who guide you through your Web3 journey. From ideation to launch, we\'ve got your back.',
    color: '#9945FF',
    glow: 'rgba(153,69,255,0.15)',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Events & Hackathons',
    desc: 'Compete, collaborate, and connect at regular hackathons, workshops, and community gatherings across Malaysia.',
    color: '#00ff88',
    glow: 'rgba(0,255,136,0.1)',
  },
  {
    icon: <Coins size={24} />,
    title: 'Grants & Funding Access',
    desc: 'Unlock access to Solana Foundation grants, ecosystem funding, and early-stage investment opportunities.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.1)',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Jobs, Bounties & Opportunities',
    desc: 'Access curated Web3 jobs, bounties, and freelance work from the best Solana projects globally.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.1)',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Education & Workshops',
    desc: 'Learn Solana development, product design, and Web3 fundamentals through structured learning programs.',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.1)',
  },
  {
    icon: <Globe size={24} />,
    title: 'Ecosystem Connections',
    desc: 'Tap into the global Superteam network across 20+ countries, connecting Malaysian talent to the world.',
    color: '#9945FF',
    glow: 'rgba(153,69,255,0.15)',
  },
]



export default function Mission() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[rgba(153,69,255,0.04)] blur-[80px] pointer-events-none" />

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">
            Our Mission
          </span>
          <h2 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Building the future of{' '}
            <span className="gradient-text-green">Web3 in Malaysia</span>
          </h2>
          <p className="text-[#9090a8] text-lg leading-relaxed">
            Superteam Malaysia is the local chapter of the global Superteam network, 
            dedicated to empowering builders, creators, and founders in the Solana ecosystem. 
            We are the digital HQ for Malaysian Web3 talent.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card glass-card-hover rounded-2xl p-6 cursor-default group"
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: pillar.glow,
                  border: `1px solid ${pillar.color}30`,
                  color: pillar.color,
                  boxShadow: `0 0 20px ${pillar.glow}`,
                }}
              >
                {pillar.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">
                {pillar.title}
              </h3>
              <p className="text-[#9090a8] text-sm leading-relaxed">
                {pillar.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between"
              >
                <div className="h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16" style={{ background: pillar.color }} />
                <div className="text-xs text-[#5a5a72] group-hover:text-[#9090a8] transition-colors">Learn more →</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(153,69,255,0.12) 0%, rgba(0,255,136,0.06) 100%)',
            border: '1px solid rgba(153,69,255,0.15)',
          }}
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[rgba(153,69,255,0.08)] blur-[60px]" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-black text-white mb-2">
                Ready to join the movement?
              </h3>
              <p className="text-[#9090a8]">
                Be part of Malaysia's fastest-growing Web3 community.
              </p>
            </div>
            <a href="#join" className="btn-primary shrink-0 text-base py-3.5 px-8">
              Get Started →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
