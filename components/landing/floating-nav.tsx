"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconInfoCircle,
  IconBriefcase,
  IconUsers,
  IconPricetag,
  IconAward,
} from "@tabler/icons-react";

export default function FloatingNavbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: (
        <IconInfoCircle className="h-4 w-4 text-neutral-600 dark:text-white" />
      ),
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-600 dark:text-white" />
      ),
    },
    {
      name: "Work",
      link: "#work",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-600 dark:text-white" />
      ),
    },
    {
      name: "Team",
      link: "#team",
      icon: (
        <IconUsers className="h-4 w-4 text-neutral-600 dark:text-white" />
      ),
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: (
        <IconPricetag className="h-4 w-4 text-neutral-600 dark:text-white" />
      ),
    },
    {
      name: "Awards",
      link: "#awards",
      icon: (
        <IconAward className="h-4 w-4 text-neutral-600 dark:text-white" />
      ),
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
