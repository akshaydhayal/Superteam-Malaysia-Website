'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, ExternalLink, Clock } from 'lucide-react'

const events = [
  {
    id: 1, title: 'Solana Hackathon Malaysia 2025', type: 'Hackathon', typeColor: '#9945FF',
    date: 'Apr 12–14, 2025', location: 'Kuala Lumpur, Malaysia',
    description: 'Build the next generation of Solana dApps with $50,000 in prizes. Three tracks: DeFi, NFTs, and Consumer Apps.',
    tags: ['DeFi', 'NFT', 'Consumer'], upcoming: true, bgColor: 'rgba(153,69,255,0.22)',
  },
  {
    id: 2, title: 'Web3 Builders Meetup #7', type: 'Meetup', typeColor: '#00ff88',
    date: 'Mar 28, 2025', location: 'The Co. @ KLCC',
    description: 'Monthly gathering for Solana builders, founders, and creators. Network, share learnings, and discover new opportunities.',
    tags: ['Networking', 'Learning'], upcoming: true, bgColor: 'rgba(0,255,136,0.15)',
  },
  {
    id: 3, title: 'Solana Development Workshop', type: 'Workshop', typeColor: '#f59e0b',
    date: 'Mar 22, 2025', location: 'Online + Penang',
    description: 'Hands-on workshop on building your first Solana program using Anchor framework. Bring your laptop!',
    tags: ['Dev', 'Anchor'], upcoming: true, bgColor: 'rgba(245,158,11,0.15)',
  },
  {
    id: 4, title: 'Superteam MY Demo Day', type: 'Demo Day', typeColor: '#ec4899',
    date: 'Feb 15, 2025', location: 'Cyberjaya Innovation Hub',
    description: 'Our builders showcased 12 projects built during the winter cohort.',
    tags: ['Projects', 'Demo'], upcoming: false, bgColor: 'rgba(236,72,153,0.12)',
  },
]

export default function Events() {
  const upcoming = events.filter(e => e.upcoming)
  const past = events.filter(e => !e.upcoming)

  return (
    <section id="events" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: 0, bottom: 0, width: 400, height: 400, borderRadius: '50%', background: 'rgba(0,255,136,0.04)', filter: 'blur(80px)', pointerEvents: 'none' }} />

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
            <span className="section-label section-label-green">Events</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15 }}>
              What&apos;s happening<br />
              <span className="gradient-text-green">in Malaysia</span>
            </h2>
          </div>
          <a href="https://lu.ma/superteammy" target="_blank" rel="noopener noreferrer" className="btn-outline-green" style={{ flexShrink: 0 }}>
            View All on Luma <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Upcoming events */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>Upcoming</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.22)', borderRadius: 99, padding: '2px 10px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff88', display: 'inline-block', animation: 'glowPulse 2s ease infinite' }} />
              <span style={{ color: '#00ff88', fontSize: '0.72rem', fontWeight: 600 }}>Live</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{ borderRadius: 20, overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.3s' }}
              >
                {/* Image area */}
                <div style={{ height: 160, background: `linear-gradient(135deg, ${event.bgColor} 0%, rgba(5,5,8,0.9) 100%)`, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}>
                  <div style={{ position: 'absolute', top: '0.875rem', right: '0.875rem', fontSize: '0.68rem', fontWeight: 700, padding: '3px 10px', borderRadius: 99, color: event.typeColor, background: `${event.typeColor}18`, border: `1px solid ${event.typeColor}35` }}>
                    {event.type}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)', borderRadius: 99, padding: '3px 10px' }}>
                    <Clock size={11} /><span>{event.date}</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '1.4rem' }}>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.975rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{event.title}</h3>
                  <p style={{ color: '#9090a8', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '0.875rem' }}>{event.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.75rem', color: '#5a5a72', marginBottom: '0.875rem' }}>
                    <MapPin size={11} /><span>{event.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {event.tags.map(t => <span key={t} className="skill-badge">{t}</span>)}
                    </div>
                    <ArrowRight size={15} style={{ color: '#9945FF', flexShrink: 0 }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past events */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#5a5a72', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Past Events</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.875rem' }}>
            {past.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card"
                style={{ borderRadius: 14, padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${event.typeColor}15`, border: `1px solid ${event.typeColor}28`, flexShrink: 0 }}>
                  <Calendar size={18} style={{ color: event.typeColor }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{event.title}</div>
                  <div style={{ color: '#5a5a72', fontSize: '0.75rem', marginTop: 2 }}>{event.date} · {event.location}</div>
                </div>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '3px 9px', borderRadius: 99, color: event.typeColor, background: `${event.typeColor}15`, flexShrink: 0 }}>{event.type}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Luma CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#5a5a72', fontSize: '0.85rem', marginBottom: '0.875rem' }}>All events managed on Luma</p>
          <a href="https://lu.ma/superteammy" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
            <Calendar size={14} /> Open SuperteamMY on Luma
          </a>
        </div>
      </div>
    </section>
  )
}
