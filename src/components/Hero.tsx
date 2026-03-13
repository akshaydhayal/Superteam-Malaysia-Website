'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Zap } from 'lucide-react'

const floatingBadges = [
  { icon: '🏆', text: 'Hackathon Winners', x: '8%', y: '20%', delay: 0.3 },
  { icon: '🌐', text: 'Web3 Builders', x: '78%', y: '15%', delay: 0.5 },
  { icon: '💡', text: 'Founders', x: '82%', y: '65%', delay: 0.7 },
  { icon: '🇲🇾', text: 'Malaysian Talent', x: '5%', y: '70%', delay: 0.9 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-mesh grid-lines">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(153,69,255,0.06)] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(0,255,136,0.04)] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[rgba(153,69,255,0.05)] blur-[80px] pointer-events-none" />

      {/* Floating badges - desktop */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay, duration: 0.5 }}
          style={{ left: badge.x, top: badge.y, position: 'absolute' }}
          className="hidden lg:flex items-center gap-2 glass-card rounded-full px-3 py-1.5 text-xs font-medium text-[#9090a8] pointer-events-none"
        >
          <span>{badge.icon}</span>
          <span>{badge.text}</span>
        </motion.div>
      ))}

      {/* Central orbital ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full border border-white/3"
          style={{ animation: 'spinSlow 40s linear infinite' }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full border border-white/3"
          style={{ animation: 'spinSlow 30s linear infinite reverse' }}
        />
      </div>

      <div className="container-max relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="section-label section-label-green">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] inline-block" style={{animation:'glowPulse 2s ease infinite'}}/>
              Now Live in Malaysia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-['Syne'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6"
          >
            <span className="gradient-text-main">The Home for</span>
            <br />
            <span className="gradient-text-green">Solana Builders</span>
            <br />
            <span className="text-white">in Malaysia</span>
          </motion.h1>

          {/* Malaysian flag stripe accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-1 mb-8"
          >
            <div className="h-0.5 w-12 bg-[#CC2929] rounded-full" />
            <div className="h-0.5 w-12 bg-white/40 rounded-full" />
            <div className="h-0.5 w-12 bg-[#003399] rounded-full" />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#9090a8] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Superteam Malaysia connects the best builders, founders, creators, and talent 
            in the Solana ecosystem. Find opportunities, ship products, grow together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#join" className="btn-primary text-base py-3.5 px-8">
              Join Community <ArrowRight size={16} />
            </a>
            <a href="https://earn.superteam.fun" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base py-3.5 px-8">
              Explore Bounties <Zap size={16} />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#5a5a72]"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['#9945FF','#00ff88','#f59e0b','#ec4899','#06b6d4'].map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#050508] flex items-center justify-center text-xs font-bold"
                    style={{ background: color, zIndex: 5 - i }}
                  />
                ))}
              </div>
              <span>200+ members and growing</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-[#9945FF]" />
              <span>Part of the global Superteam network</span>
            </div>
          </motion.div>
        </div>

        {/* Hero visual - glowing card panorama */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Main card */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[rgba(153,69,255,0.15)] via-[rgba(5,5,8,0.8)] to-[rgba(0,255,136,0.08)] flex items-center justify-center">
                {/* KL Skyline SVG illustration */}
                <div className="absolute inset-0 flex items-end justify-center overflow-hidden opacity-30">
                  <svg viewBox="0 0 1200 300" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* KLCC Towers */}
                    <rect x="500" y="60" width="25" height="240" fill="rgba(153,69,255,0.6)" rx="2"/>
                    <rect x="530" y="60" width="25" height="240" fill="rgba(153,69,255,0.6)" rx="2"/>
                    {/* Tower tops */}
                    <polygon points="512,40 500,60 525,60" fill="rgba(153,69,255,0.8)"/>
                    <polygon points="542,40 530,60 555,60" fill="rgba(153,69,255,0.8)"/>
                    {/* Sky bridge */}
                    <rect x="514" y="155" width="27" height="8" fill="rgba(153,69,255,0.5)" rx="1"/>
                    {/* Other buildings */}
                    <rect x="400" y="120" width="40" height="180" fill="rgba(100,100,150,0.3)" rx="2"/>
                    <rect x="450" y="100" width="30" height="200" fill="rgba(100,100,150,0.3)" rx="2"/>
                    <rect x="580" y="90" width="35" height="210" fill="rgba(100,100,150,0.25)" rx="2"/>
                    <rect x="625" y="110" width="50" height="190" fill="rgba(100,100,150,0.2)" rx="2"/>
                    <rect x="680" y="130" width="30" height="170" fill="rgba(100,100,150,0.2)" rx="2"/>
                    <rect x="350" y="140" width="35" height="160" fill="rgba(100,100,150,0.2)" rx="2"/>
                    <rect x="720" y="120" width="40" height="180" fill="rgba(100,100,150,0.15)" rx="2"/>
                    <rect x="770" y="150" width="25" height="150" fill="rgba(100,100,150,0.15)" rx="2"/>
                    <rect x="300" y="160" width="35" height="140" fill="rgba(100,100,150,0.15)" rx="2"/>
                    {/* KL Tower */}
                    <rect x="200" y="100" width="10" height="200" fill="rgba(0,255,136,0.3)" rx="1"/>
                    <ellipse cx="205" cy="95" rx="20" ry="12" fill="rgba(0,255,136,0.2)"/>
                    {/* Ground */}
                    <rect x="0" y="295" width="1200" height="5" fill="rgba(153,69,255,0.3)"/>
                  </svg>
                </div>
                
                {/* Floating stats overlay */}
                <div className="relative z-10 grid grid-cols-3 gap-4 px-8 w-full">
                  {[
                    { num: '200+', label: 'Members', color: '#00ff88' },
                    { num: '15+', label: 'Events', color: '#9945FF' },
                    { num: '50+', label: 'Projects', color: '#f59e0b' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.15 }}
                      className="glass-card rounded-2xl p-4 sm:p-6 text-center border border-white/5"
                    >
                      <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: stat.color }}>{stat.num}</div>
                      <div className="text-xs sm:text-sm text-[#9090a8] font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow underneath */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-[rgba(153,69,255,0.1)] via-transparent to-[rgba(0,255,136,0.08)] blur-2xl" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <span className="text-xs text-[#5a5a72] tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#9945FF] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
