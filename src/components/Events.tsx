'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, ExternalLink, Clock } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Solana Hackathon Malaysia 2025',
    type: 'Hackathon',
    typeColor: '#9945FF',
    date: 'Apr 12-14, 2025',
    location: 'Kuala Lumpur, Malaysia',
    description: 'Build the next generation of Solana dApps with $50,000 in prizes. Three tracks: DeFi, NFTs, and Consumer Apps.',
    tags: ['DeFi', 'NFT', 'Consumer'],
    image: 'hackathon',
    upcoming: true,
  },
  {
    id: 2,
    title: 'Web3 Builders Meetup #7',
    type: 'Meetup',
    typeColor: '#00ff88',
    date: 'Mar 28, 2025',
    location: 'The Co. @ KLCC',
    description: 'Monthly gathering for Solana builders, founders, and creators. Network, share learnings, and discover new opportunities.',
    tags: ['Networking', 'Learning'],
    image: 'meetup',
    upcoming: true,
  },
  {
    id: 3,
    title: 'Solana Development Workshop',
    type: 'Workshop',
    typeColor: '#f59e0b',
    date: 'Mar 22, 2025',
    location: 'Online + Penang',
    description: 'Hands-on workshop on building your first Solana program using Anchor framework. Bring your laptop!',
    tags: ['Dev', 'Anchor', 'Beginner'],
    image: 'workshop',
    upcoming: true,
  },
  {
    id: 4,
    title: 'Superteam MY Demo Day',
    type: 'Demo Day',
    typeColor: '#ec4899',
    date: 'Feb 15, 2025',
    location: 'Cyberjaya Innovation Hub',
    description: 'Our builders showcased 12 projects built during the winter cohort. Watch recordings on our YouTube.',
    tags: ['Projects', 'Demo'],
    image: 'demo',
    upcoming: false,
  },
]

const gradientsByImage = {
  hackathon: 'linear-gradient(135deg, rgba(153,69,255,0.3) 0%, rgba(5,5,8,0.9) 100%)',
  meetup: 'linear-gradient(135deg, rgba(0,255,136,0.2) 0%, rgba(5,5,8,0.9) 100%)',
  workshop: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(5,5,8,0.9) 100%)',
  demo: 'linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(5,5,8,0.9) 100%)',
}

export default function Events() {
  const upcoming = events.filter(e => e.upcoming)
  const past = events.filter(e => !e.upcoming)

  return (
    <section id="events" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[rgba(0,255,136,0.04)] blur-[80px] pointer-events-none" />

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
            <span className="section-label section-label-green mb-4 block">Events</span>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl font-black text-white leading-tight">
              What's happening<br />
              <span className="gradient-text-green">in Malaysia</span>
            </h2>
          </div>
          <a
            href="https://lu.ma/superteammy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-green shrink-0"
          >
            View All on Luma <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Upcoming events */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-white">Upcoming</span>
            <div className="flex items-center gap-1.5 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] rounded-full px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" style={{animation:'glowPulse 2s ease infinite'}} />
              <span className="text-[#00ff88] text-xs font-medium">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                {/* Image area */}
                <div
                  className="h-40 relative flex items-end p-4"
                  style={{ background: gradientsByImage[event.image as keyof typeof gradientsByImage] }}
                >
                  {/* Pattern decoration */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)'
                    }}
                  />
                  <div
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full border"
                    style={{ color: event.typeColor, borderColor: `${event.typeColor}40`, background: `${event.typeColor}15` }}
                  >
                    {event.type}
                  </div>
                  <div className="relative flex items-center gap-1.5 text-xs text-white/60 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    <Clock size={10} />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#00ff88] transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-[#9090a8] text-sm leading-relaxed mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-[#5a5a72] mb-4">
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5 flex-wrap">
                      {event.tags.map(tag => (
                        <span key={tag} className="skill-badge text-[10px]">{tag}</span>
                      ))}
                    </div>
                    <button className="text-[#9945FF] hover:text-white transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past events */}
        <div>
          <p className="text-sm font-semibold text-[#5a5a72] mb-4">Past Events</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {past.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:border-white/10 transition-all cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl"
                  style={{ background: `${event.typeColor}15`, border: `1px solid ${event.typeColor}30` }}
                >
                  <Calendar size={20} style={{ color: event.typeColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm group-hover:text-[#9090a8] transition-colors truncate">
                    {event.title}
                  </div>
                  <div className="text-[#5a5a72] text-xs mt-0.5">{event.date} · {event.location}</div>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
                  style={{ color: event.typeColor, background: `${event.typeColor}15` }}
                >
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Luma CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-[#5a5a72] text-sm mb-3">All events are managed on Luma</p>
          <a
            href="https://lu.ma/superteammy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm inline-flex"
          >
            <Calendar size={14} />
            Open SuperteamMY on Luma
          </a>
        </motion.div>
      </div>
    </section>
  )
}
