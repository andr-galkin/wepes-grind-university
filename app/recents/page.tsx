'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation/Navigation'
import DisplayText from '../components/Text/DisplayText'

const Page: React.FC = ({}) => {
    return (
        <div>
            <Navigation activeSection="recents" />
            <div className="h-screen w-full flex justify-center items-center flex-col">
                <Link href="/recents/academic-leave">
                    <DisplayText color="text-black" className="mb-20">
                        <motion.span
                            whileHover={{
                                color: '#BDBBBB',
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className="text-center mb-20 font-bold italic"
                        >
                            ACADEMIC LEAVE
                        </motion.span>
                    </DisplayText>
                </Link>
                <Link href="/recents/uniform">
                    <DisplayText color="text-black" className="mb-20">
                        <motion.span
                            whileHover={{
                                color: '#BDBBBB',
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className="text-center mb-20 font-bold italic"
                        >
                            UNIFORM
                        </motion.span>
                    </DisplayText>
                </Link>
            </div>
        </div>
    )
}

export default Page
