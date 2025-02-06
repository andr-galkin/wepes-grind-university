'use client'

import React, { createContext, useCallback, useContext, useState } from 'react'

interface AnimationWrapperContextType {
    hasAnimated: boolean
    triggerAnimation: () => void
}

const AnimationWrapperContext = createContext<
    AnimationWrapperContextType | undefined
>(undefined)

export const AnimationWrapperProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [hasAnimated, setHasAnimated] = useState(false)

    const triggerAnimation = useCallback(() => {
        setHasAnimated(true)
    }, [])

    return (
        <AnimationWrapperContext.Provider
            value={{ hasAnimated, triggerAnimation }}
        >
            {children}
        </AnimationWrapperContext.Provider>
    )
}

export const useAnimationWrapper = () => {
    const context = useContext(AnimationWrapperContext)
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider')
    }
    return context
}
