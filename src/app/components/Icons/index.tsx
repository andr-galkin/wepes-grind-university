import React from 'react'
import Logo from '@/app/components/Icons/Logo'
import ArrowForward from '@/app/components/Icons/ArrowForward'
import ArrowOutward from '@/app/components/Icons/ArrowOutward'
import Instagram from '@/app/components/Icons/Instagram'
import Telegram from '@/app/components/Icons/Telegram'
import AnimatedLogo from '@/app/components/Icons/AnimatedLogo'

export interface IconComponent {
    color?: string
    fill?: string
    onComplete?: () => void
}

export const EmptyIcon: React.FC<IconComponent> = () => null

export interface IconListTypes {
    [name: string]: React.FC<IconComponent>
}

export const IconList: IconListTypes = {
    Logo: Logo,
    ArrowForward: ArrowForward,
    ArrowOutward: ArrowOutward,
    Instagram: Instagram,
    Telegram: Telegram,
    AnimatedLogo: AnimatedLogo,
}
