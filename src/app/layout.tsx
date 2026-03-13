import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Superteam Malaysia — The Home for Solana Builders',
  description: 'Superteam Malaysia is the local chapter of the global Superteam network, dedicated to empowering builders, creators, founders, and talent in the Solana ecosystem.',
  keywords: ['Superteam', 'Malaysia', 'Solana', 'Web3', 'Blockchain', 'Builders', 'Crypto'],
  openGraph: {
    title: 'Superteam Malaysia',
    description: 'The home for Solana builders in Malaysia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SuperteamMY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[#050508] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
