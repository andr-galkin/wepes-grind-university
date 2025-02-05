'use client'

import React from 'react'
import Navigation from '@/app/components/Navigation/Navigation'
import { shopItems } from '@/mockData/mockData'
import Image from 'next/image'
import BodyText from '@/app/components/Text/BodyText'
import SizesTable from '@/app/components/SizesTable/SizesTable'

const Page = ({ params }: { params: { itemId: string } }) => {
    const detailedItem = shopItems.filter(item => item.id === params.itemId)[0]
    return (
        <div>
            <Navigation activeSection="shop" />
            <div className="flex mt-64 xs:mt-52 sm:mt-52 xs:mb-20 sm:mb-20 content-center justify-center flex-col xs:px-6 sm:px-6 px-10">
                <div className="xs:flex-col sm:flex-col flex flex-row justify-between xs:text-center sm:text-center w-full items-center h-fit">
                    <h1 className="whitespace-break-spaces font-bold italic xs:pb-3 sm:pb-3 xs:border-b-2 sm:border-b-2 border-wgu-grey">
                        {detailedItem.name}
                    </h1>
                    <BodyText
                        color="text-black"
                        className="font-bold italic xs:hidden sm:hidden"
                        size="medium"
                    >
                        {detailedItem.price}
                    </BodyText>
                </div>
                <div className="grid grid-cols-25/100/25 xs:grid-cols-1 sm:grid-cols-1">
                    <div className="flex flex-col items-start justify-center xs:order-4 sm:order-4">
                        <BodyText
                            className="mb-5 font-bold italic"
                            size="medium"
                            color="text-black"
                        >
                            Description
                        </BodyText>
                        <BodyText
                            size="small"
                            color="text-black"
                            className="whitespace-break-spaces italic"
                        >
                            {detailedItem.description}
                        </BodyText>
                    </div>
                    <div className="flex justify-center items-center xs:order-1 sm:order-1">
                        <Image
                            src={detailedItem.media[0]}
                            alt="item"
                            width={500}
                            height={500}
                        />
                    </div>
                    <BodyText
                        color="text-black"
                        className="font-bold order-2 italic md:hidden lg:hidden xl:hidden ul:hidden text-center mb-10 border-b-2 pb-3 border-wgu-grey"
                        size="medium"
                    >
                        {detailedItem.price}
                    </BodyText>
                    <div className="flex flex-col items-start justify-center xs:order-3 sm:order-3 xs:mb-10 sm:mb-10">
                        <div className="w-full mb-5 flex flex-col">
                            <BodyText
                                className="mb-5 font-bold italic"
                                size="medium"
                                color="text-black"
                            >
                                Sizes
                            </BodyText>
                            <SizesTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
