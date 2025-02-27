"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const lenis: Lenis = new Lenis({
      duration: 1.2, // Adjust scrolling smoothness (higher = smoother)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothWheel: true, // Enables smooth scrolling for the mouse wheel
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis on unmount
    };
  }, []);

  return null;
};

export default SmoothScroll;
