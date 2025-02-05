'use client'

import React from 'react'
import { shopItems } from '../../../mockData/mockData'
import ShopItem from './ShopItem'

const ShopList: React.FC = ({}) => {
    return (
        <div className="grid gap-20 xl:grid-cols-3 ul:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 mb-40 xs:mt-48 sm:mt-48 xs:mb-24 sm:mb-24 mt-64 px-10">
            {shopItems.map(item => (
                <ShopItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default ShopList
