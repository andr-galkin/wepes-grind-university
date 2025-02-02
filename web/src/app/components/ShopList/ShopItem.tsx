"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IconList } from "@/app/components/Icons";

interface ShopItemProps {
  item: {
    id: string;
    collection: string;
    price: string;
    name: string;
    description: string;
    media: Array<string>;
  };
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
  const ArrowForward = IconList["ArrowForward"];
  const ArrowOutward = IconList["ArrowOutward"];

  const [itemHovered, setItemHovered] = useState<boolean>(false);
  const [itemIndex, setItemIndex] = useState<number>(0);

  const handleNextImage = useCallback(() => {
    setItemIndex((prevState) => (prevState + 1) % item.media.length);
  }, [item.media.length]);

  const handlePrevImage = useCallback(() => {
    setItemIndex((prevState) =>
      prevState === 0 ? item.media.length - 1 : prevState - 1,
    );
  }, [item.media.length]);

  return (
    <motion.div
      className="flex flex-col items-center select-none"
      onHoverStart={() => {
        setItemHovered(true);
      }}
      onHoverEnd={() => {
        setItemHovered(false);
        if (itemIndex !== 0) {
          setItemIndex(0);
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
            ease: "easeInOut",
          }}
          animate={itemHovered ? "active" : "hidden"}
          className="absolute -left-[1rem] top-[40%] cursor-pointer z-30"
          onClick={() => {
            handlePrevImage();
          }}
        >
          <ArrowOutward />
        </motion.div>
        <Link
          href={`/shop/${item.id}`}
          className="flex justify-center items-center"
        >
          <Image
            src={item.media[itemIndex]}
            alt="image"
            priority
            className="object-cover"
            width={400}
            height={400}
          />
        </Link>
        <div className="flex justify-between mt-10 w-full">
          <p className="font-bold">{item.collection}</p>
          <p className="font-bold text-center mx-4">{item.name}</p>
          <p className="font-bold">{item.price}$</p>
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
            ease: "easeInOut",
          }}
          animate={itemHovered ? "active" : "hidden"}
          className="absolute -right-[1rem] top-[40%] cursor-pointer z-30"
          onClick={() => {
            handleNextImage();
          }}
        >
          <ArrowForward />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ShopItem;
