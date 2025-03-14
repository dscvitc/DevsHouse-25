"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";

interface SectionHeadingProps {
  title: string;
  geometry: string;
  textClass?: string;
}

const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function SectionHeading({ title, geometry, textClass }: SectionHeadingProps) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative mb-16 mx-auto w-full"
    >
      <div className="md-108 mb-24 md:mb-0 w-full md:pb-2">
        <motion.div variants={fadeInUpVariants}>
          <Heading
            title={title}
            geometry={geometry}
            textClass={textClass}
          />
        </motion.div>
      </div>
    </motion.div>
  );
} 