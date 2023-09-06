// Copyright (C) UARTNET - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential

import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { config } from '@/config/site'
import { IBM_Plex_Sans } from 'next/font/google'
import type { Metadata } from 'next'

const font = IBM_Plex_Sans({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
