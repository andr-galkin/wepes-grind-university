"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconList } from "@/app/components/Icons";
import { formatString } from "@/functions/formatString";

const Page = ({ params }: { params: { recentsId: string } }) => {
  const Logo = IconList["Logo"];
  const [videoEnabled, setVideoEnabled] = useState<boolean>(false);

  return (
    <div>
      <motion.div className="flex justify-center w-full pt-10">
        <Link href="/">
          <Logo />
        </Link>
      </motion.div>
      <div className="flex w-full px-10 justify-between">
        <div>
          <h2 className="italic font-bold">
            {formatString(params.recentsId.toUpperCase())}
          </h2>
        </div>
        <div className="flex">
          <Link href={`/recents/${params.recentsId}/promo`}>
            <motion.h2
              whileHover={{
                color: "#BDBBBB",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="italic text-black font-bold"
            >
              Promo
            </motion.h2>
          </Link>
          <h2 className="mx-4 italic font-bold">/</h2>
          <Link
            className={videoEnabled ? "" : "pointer-events-none"}
            href={`/recents/${params.recentsId}/video`}
          >
            <motion.h2
              whileHover={{
                color: "#BDBBBB",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={`italic font-bold ${videoEnabled ? "text-black" : "text-wgu-grey"}`}
            >
              Video
            </motion.h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
