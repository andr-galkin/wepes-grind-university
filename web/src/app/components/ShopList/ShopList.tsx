"use client";

import React from "react";
import { shopItems } from "@/mockData/mockData";
import ShopItem from "@/app/components/ShopList/ShopItem";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ShopListProps {}

const ShopList: React.FC<ShopListProps> = ({}) => {
  const mediaQuery = useMediaQuery();

  return (
    <div
      style={{
        gridTemplateColumns: mediaQuery.md ? "1fr 1fr" : "1fr 1fr 1fr",
      }}
      className="grid gap-20 mb-40 mt-64 px-10"
    >
      {shopItems.map((item) => (
        <ShopItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShopList;
