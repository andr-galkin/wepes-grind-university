'use client'

import React from 'react'
import { shopItems } from '@/mockData/mockData'
import ShopItem from '@/app/components/ShopList/ShopItem'

const ShopList: React.FC = ({}) => {
    return (
        <div className="grid gap-20 xl:grid-cols-3 ul:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 mb-40 xs:my-48 sm:my-48 mt-64 px-10">
            {shopItems.map(item => (
                <ShopItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default ShopList
