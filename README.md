# Superteam Malaysia — Official Website

The digital headquarters for the Solana builder community in Malaysia. Built for the Superteam Malaysia Website Design & Build Challenge.

---

## 🌐 Live Preview

Run locally: `http://localhost:3000`

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + Syne (Google Fonts) |

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout + metadata + fonts
│   ├── page.tsx           # Landing page — all sections
│   ├── globals.css        # Design tokens, glass effects, animations
│   └── members/
│       └── page.tsx       # Members directory page
└── components/
    ├── Navbar.tsx         # Responsive navbar with scroll-aware glass effect
    ├── Hero.tsx           # Full-screen hero with KL skyline SVG + stats
    ├── Mission.tsx        # 6 pillars grid — What We Do
    ├── Stats.tsx          # Animated counter stats — Impact section
    ├── Events.tsx         # Event cards with Luma integration stubs
    ├── Members.tsx        # Member spotlight cards
    ├── Partners.tsx       # Partner logos + marquee strip
    ├── WallOfLove.tsx     # Testimonials in masonry layout
    ├── FAQ.tsx            # Accordion FAQ
    ├── JoinCTA.tsx        # Join CTA + social links + newsletter
    └── Footer.tsx         # Footer with navigation links
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd st-malaysia

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

```bash
npm run dev      # Start development server (with Turbopack)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

The website uses a dark-themed design system with:

- **Primary Background**: `#050508`
- **Accent Green** (Solana): `#00ff88`
- **Accent Purple** (Superteam): `#9945FF`
- **Malaysia Colors**: Red (`#CC2929`), White, Blue (`#003399`)
- **Glassmorphism** cards with `backdrop-filter: blur`
- **Framer Motion** for scroll-triggered and hover animations

## 📝 Environment Variables

No environment variables are required for the static version. Future integrations:

```env
# Supabase (for CMS & member database — future)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Luma API (for events integration — future)
LUMA_API_KEY=
```

## 📄 Pages

### Landing Page (`/`)
Complete with all 10 sections:
1. Hero — KL skyline visual, animated stats
2. Mission — 6 pillars of Superteam Malaysia
3. Stats — Animated impact counters
4. Events — Upcoming + Past events (Luma-ready)
5. Members Spotlight — Featured member cards
6. Partners — Solana ecosystem + Malaysian partners + marquee
7. Wall of Love — Community testimonials
8. FAQ — Expandable accordion
9. Join CTA — Social links + newsletter signup
10. Footer — Navigation + branding

### Members Page (`/members`)
- Search by name, role, skill, company
- Category filters: Core Team, Rust, Frontend, Design, Content, Growth, Product, Community
- Member cards with achievements, skill badges, Twitter/X links

## 🌍 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

## 📚 References

- [Superteam Global](https://superteam.fun)
- [Superteam UAE](https://uae.superteam.fun)
- [Superteam Germany](https://de.superteam.fun)
- [Solana Brand Kit](https://solana.com/branding)
- [Superteam Earn](https://earn.superteam.fun)

## 📬 Contact

- Twitter/X: [@SuperteamMY](https://twitter.com/SuperteamMY)
- Telegram: [t.me/SuperteamMY](https://t.me/SuperteamMY)

---

Built with ❤️ by Malaysian builders on Solana 🇲🇾
