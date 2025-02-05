import type { Metadata } from 'next'
import './globals.css'
import React, { ReactNode } from 'react'
import { BackgroundAudioProvider } from './context/BackgroundAudioContext'

export const metadata: Metadata = {
    title: 'Wepes University',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <BackgroundAudioProvider>
                <body className={`antialiased`}>{children}</body>
            </BackgroundAudioProvider>
        </html>
    )
}
