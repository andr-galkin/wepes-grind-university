'use client'

import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { cubicBezier, motion } from 'framer-motion'
import { Ballet } from 'next/font/google'
import Hamburger from 'hamburger-react'
import { NavigationProps } from './Navigation'
import { IconList } from '../Icons'
import BodyText from '../Text/BodyText'

const ballet = Ballet({
    subsets: ['latin'],
    weight: ['400'],
})

const NavigationMobile: React.FC<NavigationProps> = ({ activeSection }) => {
    const Logo = IconList['Logo']
    const TelegramLogo = IconList['Telegram']
    const InstagramLogo = IconList['Instagram']
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const menuHandler = useCallback(() => {
        setMenuIsOpen(!menuIsOpen)
    }, [menuIsOpen])

    return (
        <>
            <div
                className="fixed right-7 z-30 top-14 cursor-pointer"
                onClick={menuHandler}
            >
                <Hamburger
                    toggled={menuIsOpen}
                    size={32}
                    easing="ease-in"
                    duration={0.16}
                />
            </div>
            <motion.div
                variants={{
                    open: {
                        x: '0px',
                    },
                    close: {
                        x: '100%',
                    },
                }}
                initial="close"
                animate={menuIsOpen ? 'open' : 'close'}
                transition={{
                    duration: '0.8',
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                }}
                className="w-full h-screen bg-white fixed top-0 left-0 z-20"
            >
                <div className="flex flex-col h-full justify-evenly items-center pt-24">
                    <Link href="/recents">
                        <BodyText
                            size="medium"
                            className={`${ballet.className} font-ballet`}
                        >
                            <motion.span
                                whileHover={{
                                    WebkitTextStrokeWidth: '1px',
                                    WebkitTextStrokeColor: '#BDBBBB',
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    WebkitTextFillColor: '#FFFFFF',
                                    WebkitTextStrokeWidth: '1px',
                                    WebkitTextStrokeColor:
                                        activeSection === 'recents'
                                            ? '#BDBBBB'
                                            : '#000000',
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
                                    WebkitTextStrokeWidth: '1px',
                                    WebkitTextStrokeColor: '#BDBBBB',
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    WebkitTextFillColor: '#FFFFFF',
                                    WebkitTextStrokeWidth: '1px',
                                    WebkitTextStrokeColor:
                                        activeSection === 'shop'
                                            ? '#BDBBBB'
                                            : '#000000',
                                }}
                            >
                                Shop
                            </motion.span>
                        </BodyText>
                    </Link>
                    {activeSection === 'about' ? (
                        ''
                    ) : (
                        <Link href="/about">
                            <BodyText
                                size="medium"
                                className={`${ballet.className} font-ballet`}
                                color="text-black-100"
                            >
                                <motion.span
                                    whileHover={{
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#BDBBBB',
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        WebkitTextFillColor: '#FFFFFF',
                                        WebkitTextStrokeWidth: '1px',
                                        WebkitTextStrokeColor: '#000000',
                                    }}
                                >
                                    About
                                </motion.span>
                            </BodyText>
                        </Link>
                    )}
                    <div className="flex w-full justify-evenly items-center">
                        <BodyText size="small" className="italic">
                            Follow us on Social Media:
                        </BodyText>
                        <a
                            href="https://t.me/wepesgrinduniversity"
                            className="underline-offset-4 underline"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <TelegramLogo />
                        </a>
                        <a
                            href="https://www.instagram.com/wepesuniversity?igsh=MWNjaWt3ZGZ1aHF1Mw%3D%3D&utm_source=qr"
                            className="underline-offset-4 underline"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <InstagramLogo />
                        </a>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className={`z-20 top-0 grid left-0 w-full fixed mix-blend-difference`}
            >
                <motion.div className="pl-7 z-20">
                    <Link href="/">
                        <Logo />
                    </Link>
                </motion.div>
            </motion.div>
        </>
    )
}

export default NavigationMobile
