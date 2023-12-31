import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { icons } from 'lucide-react'
import { ClerkProvider } from '@clerk/nextjs'
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'EventLoop',
  description: 'EventLoop: Where Every Occasion Finds Its Perfect Loop!',
  icons:{
    icon: '/assets/images/logo.svg',
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
