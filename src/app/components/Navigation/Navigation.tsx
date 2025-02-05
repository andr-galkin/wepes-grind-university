"use client";

import React from "react";
import NavigationDesktop from "@/app/components/Navigation/NavigationDesktop";
import NavigationMobile from "@/app/components/Navigation/NavigationMobile";



export interface NavigationProps {
  activeSection: "recents" | "shop" | "main" | "about";
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {


  return (
      <>
        <div className='sm:hidden xs:hidden'>
          <NavigationDesktop activeSection={activeSection}/>
        </div>
        <div className='md:hidden lg:hidden xl:hidden ul:hidden'>
          <NavigationMobile activeSection={activeSection}/>
        </div>
      </>
  );
};

export default Navigation;
