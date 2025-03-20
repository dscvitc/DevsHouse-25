'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function SponsorPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const handleFormClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sponsor_form_click', {
        event_category: 'Sponsor',
        event_label: 'Orkes Sponsor Form',
        value: 1
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative mx-4 max-w-2xl rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Support Our Sponsor - Orkes
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                If you&apos;re a tech enthusiast and want to make a real impact, we&apos;d love your support! Our incredible sponsor, Orkes, has a GitHub repo that has already gained amazing attention from the community.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Now, as part of our hackathon, we&apos;re aiming to contribute 1500 stars to their repo, and we truly believe that with your help, we can make it happen.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                It&apos;s simple—just take a moment to star their repo,{' '}
                <a
                  href="https://github.com/conductor-oss/conductor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  @conductor-oss/conductor
                </a>
                , and fill out this quick{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdltcjDZGLQpe64c-nkeyS8L-MV2W2X7PDVFFYvrJUrgZNPyw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  onClick={handleFormClick}
                >
                  Google Form
                </a>
                . It only takes a few seconds, but your action will mean so much to us, to Orkes, and to the entire community.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Your support helps bring our shared vision to life and shows the power of tech enthusiasts like you coming together.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re genuinely grateful for every star, every moment of your time, and for being part of this amazing journey with us. Together, we can achieve something great, and we can&apos;t do it without you. Thank you from the bottom of our hearts for your support!
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 