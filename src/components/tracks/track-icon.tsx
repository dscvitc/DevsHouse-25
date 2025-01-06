"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TrackIconProps {
  icon?: string;
  children?: React.ReactNode;
}

export function TrackIcon({ icon, children }: TrackIconProps) {
  return (
    <motion.div 
      className="relative flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-black z-10"
      whileHover={{ scale: 1.1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 15,
        mass: 1.2
      }}
    >
      {icon ? (
        <Image
          src={`/tracks/${icon}`}
          alt={`Track icon`}
          width={24}
          height={24}
          className="object-contain"
        />
      ) : children}
    </motion.div>
  );
}