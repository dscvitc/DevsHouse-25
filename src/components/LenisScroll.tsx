'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// Add TypeScript declaration for the global window object
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function LenisScroll() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      autoResize: true,
      infinite: false,
      autoRaf: true,
      anchors: {
        offset: 0,
      },
      prevent: (node) => {
        return node.hasAttribute('data-lenis-prevent');
      }
    });

    // Make lenis available globally
    window.lenis = lenis;

    // Handle link clicks manually to ensure they work with smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: 0,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      });
    });

    // Clean up the Lenis instance when the component unmounts
    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return null;
} 