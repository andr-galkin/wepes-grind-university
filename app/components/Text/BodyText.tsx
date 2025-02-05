'use client'

import React, { ReactNode } from 'react'

interface BodyTextProps {
    children: string | ReactNode
    color?: string
    size: 'small' | 'medium'
    className?: string
    upperCase?: boolean
}

const BodyText = ({
    children,
    color = 'text-black-100',
    className,
    size,
}: BodyTextProps) => {
    const sizes = {
        small: 'xs:text-base sm:text-base md:text-base lg:text-base xl:text-lg ul:text-xl',
        medium: 'xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ul:text-7xl',
    }
    return <p className={`${sizes[size]} ${className} ${color}`}>{children}</p>
}

export default BodyText
