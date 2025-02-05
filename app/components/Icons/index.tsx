import React from 'react'
import Logo from './Logo'
import ArrowForward from './ArrowForward'
import ArrowOutward from './ArrowOutward'
import Instagram from './Instagram'
import Telegram from './Telegram'
import AnimatedLogo from './AnimatedLogo'

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
