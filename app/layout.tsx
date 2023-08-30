import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import Nav from './components/nav/Nav'
import { roboto } from './fonts'

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
            </body>
        </html>
    )
}
