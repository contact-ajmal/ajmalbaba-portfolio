"use client";

import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { FeaturedProject } from "@/components/sections/FeaturedProject";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProject />
      <Story />
    </main>
  );
}
