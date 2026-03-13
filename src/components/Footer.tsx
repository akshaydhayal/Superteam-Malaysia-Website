'use client'
import Link from 'next/link'
import { Twitter, Send, Github, ExternalLink } from 'lucide-react'

const footerLinks: Record<string, { label: string; href: string; external: boolean }[]> = {
  Community: [
    { label: 'About Us', href: '#about', external: false },
    { label: 'Members', href: '/members', external: false },
    { label: 'Events', href: '#events', external: false },
    { label: 'Partners', href: '#partners', external: false },
    { label: 'FAQ', href: '#faq', external: false },
  ],
  Opportunities: [
    { label: 'Bounties', href: 'https://earn.superteam.fun', external: true },
    { label: 'Jobs', href: 'https://earn.superteam.fun/jobs', external: true },
    { label: 'Grants', href: '#', external: false },
    { label: 'Hackathons', href: '#events', external: false },
  ],
  Resources: [
    { label: 'Superteam Global', href: 'https://superteam.fun', external: true },
    { label: 'Solana Docs', href: 'https://docs.solana.com', external: true },
    { label: 'Earn Platform', href: 'https://earn.superteam.fun', external: true },
    { label: 'GitHub', href: 'https://github.com', external: true },
  ],
}

const socials = [
  { icon: <Twitter size={16} />, href: 'https://twitter.com/SuperteamMY', label: 'Twitter' },
  { icon: <Send size={16} />, href: 'https://t.me/SuperteamMY', label: 'Telegram' },
  { icon: <Github size={16} />, href: 'https://github.com', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(153,69,255,0.04)] to-transparent pointer-events-none" />

      <div className="container-max py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#9945FF] to-[#00ff88] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-all">
                <span className="text-white font-black text-sm">ST</span>
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-sm">superteam</div>
                <div className="text-[#00ff88] font-black text-xs tracking-widest uppercase">Malaysia</div>
              </div>
            </Link>

            <p className="text-[#5a5a72] text-sm leading-relaxed mb-6 max-w-xs">
              The home for Solana builders in Malaysia. Connecting talent, opportunities, and the global Web3 ecosystem.
            </p>

            {/* Malaysia flag accent */}
            <div className="flex gap-1 mb-6">
              <div className="h-0.5 w-8 bg-[#CC2929] rounded-full" />
              <div className="h-0.5 w-8 bg-white/20 rounded-full" />
              <div className="h-0.5 w-8 bg-[#003399] rounded-full" />
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[#5a5a72] hover:text-white hover:border-white/15 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="text-xs font-bold text-[#9090a8] uppercase tracking-widest mb-5">{section}</div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5a5a72] hover:text-white text-sm transition-colors flex items-center gap-1 group"
                      >
                        {link.label}
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[#5a5a72] hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#5a5a72] text-xs">
            © 2025 Superteam Malaysia. A chapter of the global{' '}
            <a
              href="https://superteam.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9945FF] hover:text-white transition-colors"
            >
              Superteam network
            </a>
            .
          </p>
          <div className="flex items-center gap-1 text-[#5a5a72] text-xs">
            <span>Built with ❤️ by</span>
            <span className="text-[#00ff88] font-medium">Malaysian builders</span>
            <span>on</span>
            <span className="text-[#9945FF] font-medium">Solana</span>
            <span>🇲🇾</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
