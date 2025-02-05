'use client'

import React from 'react'
import Navigation from '@/app/components/Navigation/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Page: React.FC = ({}) => {
    return (
        <div>
            <Navigation activeSection="recents" />
            <div className="h-screen w-full flex justify-center items-center flex-col">
                <Link href="/recents/academic-leave">
                    <motion.h1
                        whileHover={{
                            color: '#BDBBBB',
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        className="text-center text-black mb-20 font-bold italic"
                    >
                        ACADEMIC LEAVE
                    </motion.h1>
                </Link>
                <Link href="/recents/uniform">
                    <motion.h1
                        whileHover={{
                            color: '#BDBBBB',
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        className="text-center text-black font-bold italic"
                    >
                        UNIFORM
                    </motion.h1>
                </Link>
            </div>
        </div>
    )
}

export default Page
