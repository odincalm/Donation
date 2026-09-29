import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitin - Support the work',
  description: 'Support independent building and my nursing education.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark min-h-screen text-white antialiased overflow-x-hidden relative`}>
        {/* Soft glowing orbs in background */}
        <div className="glow-orb w-64 h-64 bg-accent1 top-0 left-0"></div>
        <div className="glow-orb w-96 h-96 bg-accent2 bottom-0 right-0"></div>
        {children}
      </body>
    </html>
  )
}
