"use client";

import { useState } from "react";
import Particles from "@/magicui/components/magicui/particles";

const ParticlesDemo = () => {
  const [color] = useState("#ffffff");

  return (
    <div className="relative h-[100px] w-full overflow-hidden rounded-lg bg-background">
      <span className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 md:text-8xl">
        Amaga
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
