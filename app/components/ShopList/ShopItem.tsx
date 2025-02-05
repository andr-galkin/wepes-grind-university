'use client'

import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, PanInfo } from 'framer-motion'
import { IconList } from '../Icons'
import BodyText from '../Text/BodyText'

interface ShopItemProps {
    item: {
        id: string
        collection: string
        price: string
        name: string
        previewPrice: string
        description: string
        media: Array<string>
    }
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
    const ArrowForward = IconList['ArrowForward']
    const ArrowOutward = IconList['ArrowOutward']

    const [itemHovered, setItemHovered] = useState<boolean>(false)
    const [itemIndex, setItemIndex] = useState<number>(0)

    const handleNextImage = useCallback(() => {
        setItemIndex(prevState => (prevState + 1) % item.media.length)
    }, [item.media.length])

    const handlePrevImage = useCallback(() => {
        setItemIndex(prevState =>
            prevState === 0 ? item.media.length - 1 : prevState - 1
        )
    }, [item.media.length])

    const handleDrag = useCallback(
        (_: MouseEvent, { offset: { x: dragOffset } }: PanInfo) => {
            console.log(Math.abs(dragOffset))
            if (Math.abs(dragOffset) > 55) {
                if (dragOffset < 60) {
                    handleNextImage()
                } else {
                    handlePrevImage()
                }
            }
        },
        [handleNextImage, handlePrevImage]
    )

    return (
        <motion.div
            className="flex flex-col items-center select-none"
            onHoverStart={() => {
                setItemHovered(true)
            }}
            onHoverEnd={() => {
                setItemHovered(false)
                if (itemIndex !== 0) {
                    setItemIndex(0)
                }
            }}
        >
            <motion.div className="relative">
                <motion.div
                    variants={{
                        active: {
                            opacity: 1,
                            scale: 1,
                        },
                        hidden: {
                            opacity: 0,
                            scale: 0.9,
                        },
                    }}
                    initial="hidden"
                    transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                    }}
                    animate={itemHovered ? 'active' : 'hidden'}
                    className="absolute -left-[1rem] top-[40%] cursor-pointer z-30 xs:hidden sm:hidden"
                    onClick={() => {
                        handlePrevImage()
                    }}
                >
                    <ArrowOutward />
                </motion.div>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
                    onDragEnd={handleDrag}
                    whileDrag={{
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, .1)',
                    }}
                >
                    <Link
                        href={`/shop/${item.id}`}
                        className="flex justify-center items-center"
                    >
                        <Image
                            src={item.media[itemIndex]}
                            alt="image"
                            priority
                            className="object-cover xs:w-[300px] xs:h-[400px] sm:w-[300px] sm:h-[400px]"
                            width={400}
                            height={400}
                        />
                    </Link>
                </motion.div>
                <div className="flex justify-between mt-10 w-full">
                    <BodyText
                        size="small"
                        className="font-extrabold italic uppercase"
                    >
                        {item.collection}
                    </BodyText>
                    <BodyText
                        size="small"
                        className="font-extrabold text-center mx-4 italic uppercase"
                    >
                        {item.name}
                    </BodyText>
                    <BodyText
                        size="small"
                        className="font-extrabold italic uppercase"
                    >
                        {item.previewPrice}
                    </BodyText>
                </div>
                <motion.div
                    variants={{
                        active: {
                            opacity: 1,
                            scale: 1,
                        },
                        hidden: {
                            opacity: 0,
                            scale: 0.9,
                        },
                    }}
                    initial="hidden"
                    transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                    }}
                    animate={itemHovered ? 'active' : 'hidden'}
                    className="absolute -right-[1rem] top-[40%] cursor-pointer z-30 xs:hidden sm:hidden"
                    onClick={() => {
                        handleNextImage()
                    }}
                >
                    <ArrowForward />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ShopItem
