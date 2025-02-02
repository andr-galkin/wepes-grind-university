import React from "react";
import Logo from "@/app/components/Icons/Logo";
import ArrowForward from "@/app/components/Icons/ArrowForward";
import ArrowOutward from "@/app/components/Icons/ArrowOutward";

export interface IconComponent {
  color?: string;
  fill?: string;
}

export const EmptyIcon: React.FC<IconComponent> = () => null;

export interface IconListTypes {
  [name: string]: React.FC<IconComponent>;
}

export const IconList: IconListTypes = {
  Logo: Logo,
  ArrowForward: ArrowForward,
  ArrowOutward: ArrowOutward,
};
