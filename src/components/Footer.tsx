'use client'
import Link from 'next/link'
import { Twitter, Send, Github, ExternalLink } from 'lucide-react'

const footerLinks = {
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

export default function Footer() {
  return (
    <footer style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(to top, rgba(153,69,255,0.04), transparent)', zIndex: 0 }} />

      <div className="container-max" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 2', paddingRight: '4rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', marginBottom: '2rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #9945FF, #00ff88)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 900, fontSize: '0.9rem' }}>ST</span>
              </div>
              <div style={{ lineHeight: 1 }}>
                <div style={{ color: '#fff', fontWeight: 900, fontSize: '1rem', fontFamily: "'Syne', sans-serif" }}>superteam</div>
                <div style={{ color: '#00ff88', fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Malaysia</div>
              </div>
            </Link>
            <p style={{ color: '#9090a8', fontSize: '1rem', lineHeight: 1.8, maxWidth: 360, marginBottom: '2.5rem' }}>
              The home for Solana builders in Malaysia. Connecting talent, opportunities, and the global Web3 ecosystem.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Twitter size={18} />, href: 'https://twitter.com/SuperteamMY' },
                { icon: <Send size={18} />, href: 'https://t.me/SuperteamMY' },
                { icon: <Github size={18} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#5a5a72', transition: 'all 0.2s',
                }} onMouseEnter={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}} onMouseLeave={e => {e.currentTarget.style.color = '#5a5a72'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', fontFamily: "'Syne', sans-serif" }}>{title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target={l.external ? "_blank" : "_self"} rel={l.external ? "noopener noreferrer" : ""} style={{
                      color: '#9090a8', fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 6
                    }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#9090a8'}>
                      {l.label} {l.external && <ExternalLink size={12} opacity={0.6} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ color: '#5a5a72', fontSize: '0.75rem' }}>
            © 2025 Superteam Malaysia. Part of the <a href="https://superteam.fun" target="_blank" rel="noopener noreferrer" style={{ color: '#9945FF', textDecoration: 'none' }}>global network</a>.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#5a5a72', fontSize: '0.75rem' }}>
            Built with ❤️ on <span style={{ color: '#9945FF', fontWeight: 700 }}>Solana</span> 🇲🇾
          </div>
        </div>
      </div>
    </footer>
  )
}
