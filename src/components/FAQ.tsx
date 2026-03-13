'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is Superteam Malaysia?',
    a: 'Superteam Malaysia is the local chapter of the global Superteam network — a community of the best builders, creators, founders, and talent in the Solana ecosystem. We are dedicated to growing Web3 in Malaysia through events, opportunities, mentorship, and community building.',
  },
  {
    q: 'How do I join Superteam Malaysia?',
    a: 'You can join by clicking the "Join Community" button and filling out our application form. We welcome developers, designers, content creators, marketers, and founders who are passionate about building on Solana. We review applications and reach out within 7 days.',
  },
  {
    q: 'What opportunities are available for members?',
    a: 'Members get access to Solana foundation grants, global bounties on Superteam Earn, hackathon opportunities, job placements with top Web3 projects, workshops, mentorship from experienced builders, and networking with the global Superteam network.',
  },
  {
    q: 'How can projects collaborate with Superteam Malaysia?',
    a: 'Projects can collaborate with us to post bounties, sponsor hackathons, host workshops, or partner for community events. We help connect your project with top Malaysian Web3 talent. Reach out to us on Twitter/X or Telegram.',
  },
  {
    q: 'Do I need to be a developer to join?',
    a: 'Absolutely not! Superteam Malaysia welcomes all types of talent — developers, designers, content creators, marketers, community managers, business development professionals, and anyone passionate about Web3 and Solana. The ecosystem needs diverse skills to thrive.',
  },
  {
    q: 'Is Superteam Malaysia connected to the global network?',
    a: 'Yes! We are an official chapter of the global Superteam network, which spans 20+ countries. As a member, you get access to the global talent and opportunity network, not just the local Malaysian community.',
  },
  {
    q: 'Are events free to attend?',
    a: 'Most of our community events, workshops, and meetups are free for members and the general public. Some special events like hackathons may have registration requirements. All events are listed on our Luma page.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? 'border-[rgba(153,69,255,0.3)] bg-[rgba(153,69,255,0.05)]'
          : 'border-white/6 bg-[rgba(255,255,255,0.02)] hover:border-white/10'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
      >
        <span className={`font-semibold text-base transition-colors ${open ? 'text-white' : 'text-[#c0c0d0]'}`}>
          {faq.q}
        </span>
        <div
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-[rgba(153,69,255,0.2)] text-[#9945FF]'
              : 'bg-white/5 text-[#5a5a72]'
          }`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-[#9090a8] text-sm leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-72 h-72 rounded-full bg-[rgba(153,69,255,0.05)] blur-[80px] pointer-events-none" />

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left: header */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 block">FAQ</span>
              <h2 className="font-['Syne'] text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Questions,{' '}
                <span className="gradient-text-purple">answered</span>
              </h2>
              <p className="text-[#9090a8] leading-relaxed mb-8">
                Everything you need to know about Superteam Malaysia. Can't find an answer? 
                Reach out to us directly.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://twitter.com/SuperteamMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-green text-sm"
                >
                  Ask on Twitter/X →
                </a>
                <a
                  href="https://t.me/SuperteamMY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  Join Telegram →
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
