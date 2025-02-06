'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { formatString } from '../../../functions/formatString'
import { IconList } from '../../components/Icons'
import { RecentsLookBook } from '../../../mockData/mockData'

let animationFrameId: number

type LookBookKeys = keyof typeof RecentsLookBook

const Page = ({ params }: { params: { recentsId: string } }) => {
    const Logo = IconList['Logo']

    const title = formatString(params.recentsId.toUpperCase())

    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState<number>(0)
    const [xPosition, setXPosition] = useState<number>(0)
    const [isPaused, setIsPaused] = useState<boolean>(false)

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(
                containerRef.current.getBoundingClientRect().width
            )
            setXPosition(containerRef.current.getBoundingClientRect().width)
        }
    }, [containerRef])

    useEffect(() => {
        const animate = () => {
            setXPosition(prev => (prev >= 0 ? -containerWidth : prev + 1))
            animationFrameId = requestAnimationFrame(animate)
        }

        if (!isPaused) {
            animationFrameId = requestAnimationFrame(animate)
        } else {
            cancelAnimationFrame(animationFrameId)
        }

        return () => cancelAnimationFrame(animationFrameId)
    }, [isPaused, containerWidth])

    const handleHoverStart = useCallback(() => {
        setIsPaused(true)
    }, [])

    const handleHoverEnd = useCallback(() => {
        setIsPaused(false)
    }, [])

    return (
        <div>
            <motion.div className="flex justify-center w-full pt-10">
                <Link href="/">
                    <Logo />
                </Link>
            </motion.div>
            <div className="flex w-full px-10 justify-between xs:flex-col sm:flex-col xs:items-center sm:items-center xs:mt-10 sm:mt-10">
                <div className="xs:border-b-2 sm:border-b-2 border-wgu-grey xs:pb-3 sm:pb-3">
                    <h2 className="italic font-bold">{title}</h2>
                </div>
                <div className="flex xs:pt-3 sm:pt-3">
                    <Link href={`/recents/${params.recentsId}/promo`}>
                        <motion.h2
                            whileHover={{
                                color: '#BDBBBB',
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className="italic text-black font-bold"
                        >
                            Promo
                        </motion.h2>
                    </Link>
                    <h2 className="mx-4 italic font-bold">/</h2>
                    <Link
                        className={'pointer-events-none'}
                        href={`/recents/${params.recentsId}/video`}
                    >
                        <motion.h2
                            whileHover={{
                                color: '#BDBBBB',
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className={`italic font-bold text-wgu-grey`}
                        >
                            Video
                        </motion.h2>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-hidden z-20 relative h-[50rem] xs:mt-0 sm:mt-0 mt-20">
                <motion.div
                    className="absolute whitespace-nowrap flex"
                    style={{ x: xPosition }}
                    onMouseEnter={handleHoverStart}
                    onMouseLeave={handleHoverEnd}
                >
                    {Array(7)
                        .fill(null)
                        .map((_, i) => (
                            <div className="flex" key={i} ref={containerRef}>
                                {RecentsLookBook[
                                    params.recentsId as LookBookKeys
                                ].map((item, index) => (
                                    <Link
                                        href={`/shop/${item.id}`}
                                        key={item.id + index}
                                    >
                                        <motion.div
                                            whileHover={{
                                                scale: 1.1,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: 'easeInOut',
                                            }}
                                            className="xs:w-[20rem] sm:w-[20rem] w-[28.125rem] h-[42.188rem] cursor-pointer relative"
                                        >
                                            <Image
                                                fill
                                                className="w-full h-full absolute left-0 top-0 object-cover"
                                                src={item.src}
                                                alt={`Marquee-Image-${index}`}
                                            />
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Page
