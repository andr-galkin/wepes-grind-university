'use client'

import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { Howl } from 'howler'

const BackgroundAudioContext = createContext({ backgroundMusic: null })

export const BackgroundAudioProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [backgroundMusic, setBackgroundMusic] = useState(null)

    useEffect(() => {
        const music = new Howl({
            src: ['/sounds/backgroundMusic.wav'],
            volume: 0,
            loop: true,
        })

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setBackgroundMusic(music)

        const playMusic = () => {
            music.play()
            window.removeEventListener('pointermove', playMusic)
        }

        window.addEventListener('pointermove', playMusic)

        return () => {
            music.stop()
            window.removeEventListener('pointermove', playMusic)
        }
    }, [])

    return (
        <BackgroundAudioContext.Provider value={{ backgroundMusic }}>
            {children}
        </BackgroundAudioContext.Provider>
    )
}
