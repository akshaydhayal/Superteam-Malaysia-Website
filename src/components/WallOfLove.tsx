'use client'
import { motion } from 'framer-motion'
import { Twitter, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Razif',
    handle: '@ahmadrazif',
    avatar: 'AR',
    color: '#9945FF',
    text: 'Superteam Malaysia changed my life. I went from a regular developer to shipping 3 Solana products in 6 months. The community and mentorship is unreal. 🇲🇾',
    likes: 342,
    retweets: 87,
    featured: true,
  },
  {
    id: 2,
    name: 'Siti Nur Aisyah',
    handle: '@sitiaisyah_eth',
    avatar: 'SN',
    color: '#00ff88',
    text: 'The Superteam Malaysia bounties program helped me earn more as a designer than my full-time job. Web3 is real and Malaysia is punching above its weight.',
    likes: 218,
    retweets: 54,
    featured: false,
  },
  {
    id: 3,
    name: 'Raj Kumar',
    handle: '@rajkumar_sol',
    avatar: 'RK',
    color: '#f59e0b',
    text: 'Won my first hackathon with the help of Superteam MY community members who spent hours debugging Anchor programs with me at midnight. That\'s the vibe here.',
    likes: 456,
    retweets: 112,
    featured: true,
  },
  {
    id: 4,
    name: 'Wan Farhan',
    handle: '@wanfarhan_web3',
    avatar: 'WF',
    color: '#06b6d4',
    text: 'As someone who was scared of blockchain 2 years ago, Superteam MY\'s workshops made it click for me. Now I\'m building DeFi protocols. Never stop learning! 🚀',
    likes: 189,
    retweets: 43,
    featured: false,
  },
  {
    id: 5,
    name: 'Priya Krishnan',
    handle: '@priya_web3',
    avatar: 'PK',
    color: '#ec4899',
    text: 'The global Superteam network through the MY chapter connected me to amazing teams in USA, India, and Germany. Remote Web3 work is the future and we\'re living it.',
    likes: 267,
    retweets: 68,
    featured: false,
  },
  {
    id: 6,
    name: 'Chong Wei Ming',
    handle: '@chongweiming_',
    avatar: 'CW',
    color: '#84cc16',
    text: 'Raised seed funding for my startup after connecting with investors through Superteam Malaysia events. The community is not just vibes, it\'s real value creation.',
    likes: 398,
    retweets: 95,
    featured: true,
  },
]

function TweetCard({ tweet, index }: { tweet: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`glass-card glass-card-hover rounded-2xl p-6 cursor-default relative overflow-hidden ${
        tweet.featured ? 'border border-white/8' : 'border border-white/4'
      }`}
    >
      {/* Subtle glow on featured */}
      {tweet.featured && (
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-15 blur-2xl"
          style={{ background: tweet.color }}
        />
      )}

      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10">
        <Quote size={32} style={{ color: tweet.color }} />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
          style={{ background: `linear-gradient(135deg, ${tweet.color}, ${tweet.color}80)` }}
        >
          {tweet.avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{tweet.name}</div>
          <div className="text-[#5a5a72] text-xs">{tweet.handle}</div>
        </div>
        <div className="ml-auto">
          <Twitter size={16} className="text-[#1d9bf0] opacity-70" />
        </div>
      </div>

      {/* Tweet text */}
      <p className="text-[#9090a8] text-sm leading-relaxed mb-4">
        {tweet.text}
      </p>

      {/* Engagement */}
      <div className="flex items-center gap-4 text-xs text-[#5a5a72] pt-3 border-t border-white/5">
        <span>❤️ {tweet.likes}</span>
        <span>🔁 {tweet.retweets}</span>
        <span
          className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium"
          style={{ color: tweet.color, background: `${tweet.color}15` }}
        >
          {tweet.featured ? '⭐ Featured' : 'Community'}
        </span>
      </div>
    </motion.div>
  )
}

export default function WallOfLove() {
  return (
    <section id="love" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[rgba(0,255,136,0.04)] blur-[80px] pointer-events-none" />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label section-label-green mb-4 block">Community Love</span>
          <h2 className="font-['Syne'] text-4xl sm:text-5xl font-black text-white mb-4">
            What our builders{' '}
            <span className="gradient-text-green">are saying</span>
          </h2>
          <p className="text-[#9090a8] max-w-xl mx-auto">
            Real stories from real builders across Malaysia who are building the future on Solana.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((tweet, i) => (
            <div key={tweet.id} className="break-inside-avoid">
              <TweetCard tweet={tweet} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
