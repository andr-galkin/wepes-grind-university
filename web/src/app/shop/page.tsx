"use client";

import React from "react";
import Navigation from "@/app/components/Navigation/Navigation";
import ShopList from "@/app/components/ShopList/ShopList";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div>
      <Navigation activeSection="shop" />
      <ShopList />
    </div>
  );
};

export default Page;
