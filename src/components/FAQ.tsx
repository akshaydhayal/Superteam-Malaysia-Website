'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Twitter, Send } from 'lucide-react'

const faqs = [
  { q: 'What is Superteam Malaysia?', a: 'Superteam Malaysia is the local chapter of the global Superteam network — a community of the best builders in the Solana ecosystem. We grow Web3 in Malaysia through events, opportunities, and mentorship.' },
  { q: 'How do I join Superteam Malaysia?', a: 'Apply by clicking "Join Community". We welcome devs, designers, and creators who want to build on Solana. We review applications weekly.' },
  { q: 'What opportunities are available?', a: 'Members get access to grants, global bounties, hackathons, job placements, workshops, and exclusive mentorship.' },
  { q: 'Do I need to be a developer?', a: 'No! We welcome designers, writers, marketers, and more. A thriving ecosystem needs all kinds of talent.' },
  { q: 'Are events free to attend?', a: 'Most community events and workshops are free. Special events like hackathons may have registration phases.' },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.5rem', textAlign: 'left', background: open ? 'rgba(153,69,255,0.06)' : 'rgba(255,255,255,0.02)',
          border: open ? '1px solid rgba(153,69,255,0.3)' : '1px solid rgba(255,255,255,0.07)',
          borderRadius: 20, cursor: 'pointer', transition: 'all 0.3s ease',
        }}
      >
        <span style={{ color: open ? '#fff' : '#c0c0d0', fontWeight: 600, fontSize: '1rem' }}>{faq.q}</span>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          background: open ? 'rgba(153,69,255,0.2)' : 'rgba(255,255,255,0.05)',
          color: open ? '#9945FF' : '#5a5a72', transition: 'all 0.3s',
        }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.5rem 1.5rem', color: '#9090a8', fontSize: '0.9rem', lineHeight: 1.6, marginTop: -8 }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container-max">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">FAQ</span>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Questions,<br /><span className="gradient-text-purple">answered</span>
            </h2>
            <p style={{ color: '#9090a8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 400 }}>
              Everything you need to know about Superteam Malaysia. Reach out for more.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <a href="https://twitter.com/SuperteamMY" target="_blank" rel="noopener noreferrer" className="btn-outline-green">
                <Twitter size={16} /> Ask on Twitter/X
              </a>
              <a href="https://t.me/SuperteamMY" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Send size={16} /> Join Telegram
              </a>
            </div>
          </motion.div>

          {/* Accordion */}
          <div>{faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}</div>
        </div>
      </div>
    </section>
  )
}
