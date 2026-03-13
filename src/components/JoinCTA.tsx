'use client'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Twitter, ArrowRight } from 'lucide-react'

const socials = [
  {
    name: 'Telegram',
    handle: '@SuperteamMY',
    href: 'https://t.me/SuperteamMY',
    icon: <Send size={20} />,
    color: '#0088cc',
    desc: 'Join 500+ members',
  },
  {
    name: 'Twitter / X',
    handle: '@SuperteamMY',
    href: 'https://twitter.com/SuperteamMY',
    icon: <Twitter size={20} />,
    color: '#1d9bf0',
    desc: 'Follow for updates',
  },
  {
    name: 'Discord',
    handle: 'Superteam MY',
    href: '#',
    icon: <MessageCircle size={20} />,
    color: '#5865F2',
    desc: 'Chat with builders',
  },
]

export default function JoinCTA() {
  return (
    <section id="join" className="py-28 relative overflow-hidden">
      {/* Big radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-[rgba(153,69,255,0.08)] blur-[100px]" />
      </div>

      <div className="container-max relative">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-10 sm:p-16 relative overflow-hidden text-center mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(153,69,255,0.12) 0%, rgba(0,0,0,0.4) 50%, rgba(0,255,136,0.08) 100%)',
            border: '1px solid rgba(153,69,255,0.2)',
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[rgba(153,69,255,0.12)] blur-[40px]" />
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[rgba(0,255,136,0.08)] blur-[40px]" />

          {/* Malaysia flag stripe */}
          <div className="flex justify-center gap-1 mb-6">
            <div className="h-1 w-6 bg-[#CC2929] rounded-full" />
            <div className="h-1 w-6 bg-white/30 rounded-full" />
            <div className="h-1 w-6 bg-[#003399] rounded-full" />
          </div>

          <div className="relative">
            <span className="section-label mb-4 block justify-center">Join the Movement</span>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to build the future<br />
              <span className="gradient-text-green">of Web3 in Malaysia?</span>
            </h2>
            <p className="text-[#9090a8] text-lg max-w-2xl mx-auto mb-10">
              Join hundreds of builders, creators, and founders who are already shipping products, 
              winning hackathons, and earning bounties through Superteam Malaysia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://superteam.fun/malaysia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base py-4 px-10"
              >
                Apply to Join <ArrowRight size={18} />
              </a>
              <a
                href="https://earn.superteam.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base py-4 px-10"
              >
                Explore Bounties
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="flex items-center gap-3 glass-card rounded-2xl px-5 py-3 border border-white/8 hover:border-white/15 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${social.color}20`, color: social.color }}
                  >
                    {social.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{social.name}</div>
                    <div className="text-[#5a5a72] text-xs">{social.desc}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 justify-between"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Stay in the loop</h3>
            <p className="text-[#9090a8] text-sm">Get a monthly digest of Superteam Malaysia news, opportunities, and highlights.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto shrink-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-64 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#5a5a72] outline-none focus:border-[rgba(153,69,255,0.4)] transition-colors"
            />
            <button className="btn-primary shrink-0 py-3 px-5">
              Subscribe <Send size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
