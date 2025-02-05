'use client'

import React, { ReactNode } from 'react'

interface DisplayTextProps {
    children: string | ReactNode
    color: string
    className?: string
    upperCase?: boolean
}

const DisplayText = ({ children, color, className = '' }: DisplayTextProps) => {
    return (
        <p
            style={{
                transform: 'translate3d(0,0,0)',
            }}
            className={`${color} xs:text-6xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[12.5rem] ul:text-[12.5rem] ${className}`}
        >
            {children}
        </p>
    )
}

export default DisplayText
