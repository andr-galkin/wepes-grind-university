'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
    cubicBezier,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { Ballet } from 'next/font/google'
import { NavigationProps } from './Navigation'
import { IconList } from '../Icons'
import BodyText from '../Text/BodyText'

const ballet = Ballet({
    subsets: ['latin'],
    weight: ['400'],
})

const NavigationDesktop: React.FC<NavigationProps> = ({ activeSection }) => {
    const [headerIsHidden, setHeaderIsHidden] = useState<boolean>(false)
    const { scrollY } = useScroll()
    const Logo = IconList['Logo']

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous: number | undefined = scrollY.getPrevious()
        if (latest >= 10 && previous) {
            setHeaderIsHidden(previous < latest)
        }
    })

    return (
        <motion.div
            style={{
                gridTemplateColumns: '1fr 1fr 1fr',
            }}
            variants={{
                show: {
                    y: '0%',
                },
                hidden: {
                    y: activeSection === 'main' ? '0%' : '-100%',
                },
            }}
            transition={{
                duration: '0.8',
                ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
            animate={headerIsHidden ? 'hidden' : 'show'}
            className={`z-20 top-0 grid left-0 w-full ${activeSection === 'about' ? '' : 'fixed'} mix-blend-difference text-white`}
        >
            <motion.div className="pl-10">
                <Link href="/">
                    <Logo />
                </Link>
            </motion.div>
            {activeSection !== 'about' && (
                <div className="flex gap-x-16 h-full items-center pt-10 justify-center">
                    <Link href="/recents">
                        <BodyText
                            size="medium"
                            className={`${ballet.className} font-ballet`}
                        >
                            <motion.span
                                whileHover={{
                                    color: '#BDBBBB',
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    color:
                                        activeSection === 'recents'
                                            ? '#BDBBBB'
                                            : '#FFFFFF',
                                }}
                            >
                                Recents
                            </motion.span>
                        </BodyText>
                    </Link>
                    <Link href="/shop">
                        <BodyText
                            size="medium"
                            className={`${ballet.className} font-ballet`}
                        >
                            <motion.span
                                whileHover={{
                                    color: '#BDBBBB',
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    color:
                                        activeSection === 'shop'
                                            ? '#BDBBBB'
                                            : '#FFFFFF',
                                }}
                            >
                                Shop
                            </motion.span>
                        </BodyText>
                    </Link>
                </div>
            )}
            {activeSection !== 'about' && (
                <div className="justify-end pt-10 pr-10 flex h-full items-center">
                    <Link href="/about">
                        <BodyText
                            size="medium"
                            className={`${ballet.className} font-ballet`}
                            color="text-black-100"
                        >
                            <motion.span
                                whileHover={{
                                    color: '#BDBBBB',
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    color: '#FFFFFF',
                                }}
                            >
                                About
                            </motion.span>
                        </BodyText>
                    </Link>
                </div>
            )}
        </motion.div>
    )
}

export default NavigationDesktop
