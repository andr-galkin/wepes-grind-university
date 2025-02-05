'use client'

import Navigation from '@/app/components/Navigation/Navigation'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Image from 'next/image'
import DisplayText from '@/app/components/Text/DisplayText'
import { Ballet } from 'next/font/google'
import { IconList } from '@/app/components/Icons'
import BodyText from '@/app/components/Text/BodyText'

const ballet = Ballet({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Home() {
    const AnimatedLogo = IconList['AnimatedLogo']
    const [logoAnimationComplete, setLogoAnimationComplete] =
        useState<boolean>(false)
    const [logoIsVisible, setLogoIsVisible] = useState<boolean>(true)
    const [logoHasAnimated, setLogoHasAnimated] = useState(
        typeof window !== 'undefined' && localStorage.getItem('hasAnimated')
    )

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!localStorage.getItem('hasAnimated') && logoAnimationComplete) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                setLogoHasAnimated(true)
                localStorage.setItem('hasAnimated', String(true))
            }
        }
    }, [logoAnimationComplete])

    return (
        <div className="">
            <Navigation activeSection="main" />
            <AnimatePresence>
                {/*{!(logoAnimationComplete || logoHasAnimated) && (*/}
                {/*    <>*/}
                {/*        <motion.div*/}
                {/*            className={`fixed w-full h-screen top-0 left-0 z-30`}*/}
                {/*            transition={{*/}
                {/*                duration: 1,*/}
                {/*                delay: 2.5,*/}
                {/*                ease: cubicBezier(0.19, 1, 0.22, 1),*/}
                {/*            }}*/}
                {/*            exit={{*/}
                {/*                backdropFilter: 'blur(0px)',*/}
                {/*                backgroundColor: 'rgba(255,255,255,0)',*/}
                {/*            }}*/}
                {/*            initial={{*/}
                {/*                backdropFilter: 'blur(40px)',*/}
                {/*                backgroundColor: 'rgba(255,255,255,0.5)',*/}
                {/*            }}*/}
                {/*            animate={*/}
                {/*                logoAnimationComplete*/}
                {/*                    ? {*/}
                {/*                          backdropFilter: 'blur(0px)',*/}
                {/*                          backgroundColor:*/}
                {/*                              'rgba(255,255,255,0)',*/}
                {/*                      }*/}
                {/*                    : {*/}
                {/*                          backdropFilter: 'blur(40px)',*/}
                {/*                          backgroundColor:*/}
                {/*                              'rgba(255,255,255,0.5)',*/}
                {/*                      }*/}
                {/*            }*/}
                {/*            onAnimationComplete={() => {*/}
                {/*                setLogoAnimationComplete(true)*/}
                {/*            }}*/}
                {/*        />*/}
                {/*        <motion.div*/}
                {/*            exit={{ opacity: 0 }}*/}
                {/*            className={`fixed z-40`}*/}
                {/*            initial={{ opacity: 1 }}*/}
                {/*            animate={*/}
                {/*                logoIsVisible ? { opacity: 1 } : { opacity: 0 }*/}
                {/*            }*/}
                {/*            transition={{*/}
                {/*                duration: 1,*/}
                {/*                delay: 0.5,*/}
                {/*                ease: cubicBezier(0.16, 1, 0.3, 1),*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <AnimatedLogo*/}
                {/*                onComplete={() => {*/}
                {/*                    setLogoIsVisible(false)*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </motion.div>*/}
                {/*    </>*/}
                {/*)}*/}
            </AnimatePresence>

            <div className="absolute w-full h-full flex justify-center items-center ">
                <DisplayText
                    color="text-white"
                    className={`${ballet.className} font-ballet mix-blend-difference`}
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
            </div>
            <motion.div className="fixed left-0 w-full h-full -z-10">
                <Image
                    src="/images/main_img.jpg"
                    alt="main"
                    fill
                    className="h-screen w-full object-fill"
                />
            </motion.div>
            <div className="fixed left-4 bottom-4">
                <BodyText size="small">
                    Music - Plaisir Douteux - Mitsubishi Eclipse, 2024
                </BodyText>
            </div>
        </div>
    )
}
