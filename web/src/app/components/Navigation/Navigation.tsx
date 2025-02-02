"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  cubicBezier,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { IconList } from "@/app/components/Icons";
import { Ballet } from "next/font/google";
import BodyText from "@/app/components/Text/BodyText";

const ballet = Ballet({
  subsets: ["latin"],
  weight: ["400"],
});

interface NavigationProps {
  activeSection: "recents" | "shop" | "main" | "about";
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [headerIsHidden, setHeaderIsHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const Logo = IconList["Logo"];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: number | any = scrollY.getPrevious();
    if (latest >= 10) {
      setHeaderIsHidden(previous < latest);
    }
  });

  return (
    <motion.div
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
      variants={{
        show: {
          y: "0% -100%",
        },
        hidden: {
          y: "-100%",
        },
      }}
      transition={{
        duration: "0.8",
        ease: cubicBezier(0.16, 1, 0.3, 1),
      }}
      animate={headerIsHidden ? "hidden" : "show"}
      className={`z-20 top-0 grid left-0 w-full ${activeSection === "about" ? "" : "fixed"}`}
    >
      <motion.div className="pl-10">
        <Link href="/">
          <Logo />
        </Link>
      </motion.div>
      {activeSection !== "about" && (
        <div className="flex gap-x-16 h-full items-center pt-10 justify-center">
          <Link href="/recents">
            <BodyText
              size="medium"
              className={`${ballet.className} font-ballet`}
              color={`${activeSection === "recents" ? "text-wgu-grey" : "text-black-100"}`}
            >
              <motion.span
                whileHover={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#BDBBBB",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  WebkitTextFillColor: "#FFFFFF",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#000000",
                }}
              >
                Recents
              </motion.span>
            </BodyText>
          </Link>
          <Link href="/shop">
            <BodyText
              size="medium"
              className={`${ballet.className} font-ballet`}
              color={`${activeSection === "shop" ? "text-wgu-grey" : "text-black-100"}`}
            >
              <motion.span
                whileHover={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#BDBBBB",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  WebkitTextFillColor: "#FFFFFF",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#000000",
                }}
              >
                Shop
              </motion.span>
            </BodyText>
          </Link>
        </div>
      )}
      {activeSection !== "about" && (
        <div className="justify-end pt-10 pr-10 flex h-full items-center">
          <Link href="/about">
            <BodyText
              size="medium"
              className={`${ballet.className} font-ballet`}
              color="text-black-100"
            >
              <motion.span
                whileHover={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#BDBBBB",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  WebkitTextFillColor: "#FFFFFF",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#000000",
                }}
              >
                About
              </motion.span>
            </BodyText>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Navigation;
