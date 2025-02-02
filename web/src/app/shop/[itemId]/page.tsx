"use client";

import React from "react";
import Navigation from "@/app/components/Navigation/Navigation";
import { shopItems } from "@/mockData/mockData";
import Image from "next/image";
import BodyText from "@/app/components/Text/BodyText";
import { AnimatePresence } from "framer-motion";
import SizesTable from "@/app/components/SizesTable/SizesTable";

const Page = ({ params }: { params: { itemId: string } }) => {
  const detailedItem = shopItems.filter((item) => item.id === params.itemId)[0];
  return (
    <div>
      <Navigation activeSection="shop" />
      <div
        style={{
          gridTemplateRows: "1fr",
        }}
        className="grid mt-64 content-center justify-center justify-items-center px-10"
      >
        <div className="flex flex-row justify-between w-full items-center h-fit">
          <h1 className="whitespace-nowrap font-bold italic">
            {detailedItem.name}
          </h1>
          <BodyText
            color="text-black"
            className="font-bold italic"
            size="medium"
          >
            {detailedItem.price}$
          </BodyText>
        </div>
        <div
          style={{
            gridTemplateColumns: "25% 1fr 25%",
          }}
          className="grid w-full"
        >
          <div className="flex flex-col items-start justify-center">
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
          <div className="flex justify-center items-center">
            <Image
              src={detailedItem.media[0]}
              alt="item"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="w-full mb-5">
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
  );
};

export default Page;
