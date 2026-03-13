'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 200, suffix: '+', label: 'Community Members', desc: 'Builders, founders & creators', color: '#00ff88' },
  { value: 15, suffix: '+', label: 'Events Hosted', desc: 'Hackathons, workshops & meetups', color: '#9945FF' },
  { value: 50, suffix: '+', label: 'Projects Built', desc: 'On Solana by Malaysian builders', color: '#f59e0b' },
  { value: 30, suffix: '+', label: 'Bounties Completed', desc: 'Total value in USDC earned', color: '#ec4899' },
  { value: 5, suffix: 'K+', label: 'Community Reach', desc: 'Across social channels', color: '#06b6d4' },
  { value: 20, suffix: '+', label: 'Global Network', desc: 'Superteam chapters worldwide', color: '#9945FF' },
]

function AnimatedCounter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-black font-['Syne']" style={{ color }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(153,69,255,0.03)] to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[rgba(153,69,255,0.06)] blur-[80px] pointer-events-none" />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label section-label-green mb-4 block">Impact</span>
          <h2 className="font-['Syne'] text-4xl sm:text-5xl font-black text-white mb-4">
            Growing <span className="gradient-text-purple">stronger</span> every day
          </h2>
          <p className="text-[#9090a8] text-lg max-w-xl mx-auto">
            Real numbers from a real community building real products on Solana.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Glow corner */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: stat.color, filter: 'blur(20px)' }}
              />

              <div className="relative">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
                <div className="text-white font-bold mt-2 mb-1">{stat.label}</div>
                <div className="text-[#5a5a72] text-sm">{stat.desc}</div>

                <div
                  className="mt-4 h-0.5 rounded-full w-12 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
