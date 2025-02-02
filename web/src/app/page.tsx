"use client";

import Navigation from "@/app/components/Navigation/Navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DisplayText from "@/app/components/Text/DisplayText";
import { Ballet } from "next/font/google";
import { Howl } from "howler";

const ballet = Ballet({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="">
      <motion.div
      // transition={{
      //   delay: 3,
      //   ease: cubicBezier(0.19, 1, 0.22, 1),
      // }}
      // animate={{
      //   filter: ["blur(20px)", "blur(0px)"],
      // }}
      >
        <Navigation activeSection="main" />
      </motion.div>
      <div className="absolute w-full h-full flex justify-center items-center ">
        <DisplayText
          color="text-white"
          className={`${ballet.className} font-ballet mix-blend-difference`}
        >
          <span
            style={{
              WebkitTextFillColor: "#FFFFFF",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000000",
            }}
          >
            Academic leave
          </span>
        </DisplayText>
      </div>
      <motion.div
        // transition={{
        //   delay: 3,
        //   ease: cubicBezier(0.19, 1, 0.22, 1),
        // }}
        // animate={{
        //   filter: ["blur(20px)", "blur(0px)"],
        // }}
        className="fixed left-0 w-full h-full -z-10"
      >
        <Image
          src="/images/main_img.png"
          alt="main"
          fill
          className="h-screen w-full object-fill"
        />
      </motion.div>
      <div className="fixed left-4 bottom-4">
        Music - Plaisir Douteux - Mitsubishi Eclipse, 2024
      </div>
    </div>
  );
}
