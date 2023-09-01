import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { roboto } from './fonts'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'the Untold.',
    description: 'A collection of stories that have been forgotten.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={roboto.className}
                style={{ backgroundColor: '#F5F5F5' }}
            >
                {children}
                <Analytics />
            </body>
        </html>
    )
}
