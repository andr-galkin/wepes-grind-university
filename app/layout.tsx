import type { Metadata } from 'next'
import './globals.css'
import React, { ReactNode } from 'react'
import { BackgroundAudioProvider } from './context/BackgroundAudioContext'
import { AnimationWrapperProvider } from './context/AnimationWrapperContext'

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
            <AnimationWrapperProvider>
                <BackgroundAudioProvider>
                    <body className={`antialiased`}>{children}</body>
                </BackgroundAudioProvider>
            </AnimationWrapperProvider>
        </html>
    )
}
