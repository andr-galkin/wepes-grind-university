'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Ballet } from 'next/font/google'
import { IconList } from './components/Icons'
import Navigation from './components/Navigation/Navigation'
import DisplayText from './components/Text/DisplayText'
import BodyText from './components/Text/BodyText'
import Link from 'next/link'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import { useAnimationWrapper } from './context/AnimationWrapperContext'
import { fullConfig } from '../helpers/FullTailwindConfig'

const ballet = Ballet({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Home() {
    const AnimatedLogo = IconList['AnimatedLogo']
    const { hasAnimated, triggerAnimation } = useAnimationWrapper()
    const [isXS, setIsXS] = useState<boolean>(true)
    const [isSM, setIsSM] = useState<boolean>(true)

    useEffect(() => {
        const mqXS = window.matchMedia(
            `(max-width: ${fullConfig.theme.screens.xs.max})`
        )

        const handler = (mq: {
            // eslint-disable-next-line no-unused-vars
            matches: boolean | ((prevState: boolean) => boolean)
        }) => {
            setIsXS(mq.matches)
        }

        setIsXS(mqXS.matches)

        mqXS.addEventListener('change', handler)

        return () => {
            mqXS.removeEventListener('change', handler)
        }
    }, [])

    useEffect(() => {
        const mqSM = window.matchMedia(
            `(min-width: ${fullConfig.theme.screens.sm.min}) and (max-width: ${fullConfig.theme.screens.sm.max})`
        )

        const handler = (mq: {
            // eslint-disable-next-line no-unused-vars
            matches: boolean | ((prevState: boolean) => boolean)
        }) => {
            setIsSM(mq.matches)
        }

        setIsSM(mqSM.matches)

        mqSM.addEventListener('change', handler)

        return () => {
            mqSM.removeEventListener('change', handler)
        }
    }, [])

    return (
        <div className="">
            <Navigation activeSection="main" />
            <motion.div
                className={`fixed w-full h-screen top-0 left-0 z-30 ${hasAnimated ? 'pointer-events-none opacity-0' : ''}`}
                transition={{
                    duration: 1,
                    delay: 2.5,
                    ease: cubicBezier(0.19, 1, 0.22, 1),
                }}
                variants={{
                    show: {
                        backdropFilter: 'blur(40px)',
                        backgroundColor: 'rgba(255,255,255,0.5)',
                    },
                    hidden: {
                        backdropFilter: 'blur(0px)',
                        backgroundColor: 'rgba(255,255,255,0)',
                    },
                }}
                initial={hasAnimated ? 'hidden' : 'show'}
                animate={'hidden'}
                onAnimationComplete={() => {
                    triggerAnimation()
                }}
            />
            <motion.div
                className={`fixed z-40 left-10 ${hasAnimated ? 'pointer-events-none opacity-0' : ''}`}
                initial={hasAnimated ? 'hidden' : 'show'}
                variants={{
                    show: {
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) scale(1.5)`,
                    },
                    hidden: {
                        left: `${isXS || isSM ? '1.75rem' : '2.5rem'}`,
                        top: '0%',
                        transform: 'translate(0%, 0%) scale(1)',
                    },
                }}
                animate={'hidden'}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                }}
            >
                <AnimatedLogo />
            </motion.div>
            <AnimatePresence>
                <motion.div
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                >
                    <div className="fixed w-full h-full flex justify-center items-center mix-blend-difference text-white">
                        <Link href="/recents/academic-leave">
                            <DisplayText
                                color="text-white"
                                className={`${ballet.className} font-ballet `}
                            >
                                <span
                                    style={{
                                        WebkitTextFillColor: '#FFFFFF',
                                        WebkitTextStrokeColor: '#000000',
                                    }}
                                >
                                    Academic leave
                                </span>
                            </DisplayText>
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="relative h-screen w-full -z-10">
                            <Image
                                src="/images/main_img.jpg"
                                alt="main"
                                fill
                                priority
                                className="object-fill"
                            />
                        </div>
                        <div className="relative h-screen w-full -z-10">
                            <Image
                                src="/images/main_img_1.jpg"
                                alt="main-1"
                                fill
                                priority
                                className="object-fill"
                            />
                        </div>
                    </div>
                    <div className="fixed left-4 bottom-4 mix-blend-difference text-white">
                        <BodyText size="small">
                            Music - Plaisir Douteux - Mitsubishi Eclipse, 2024
                        </BodyText>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
