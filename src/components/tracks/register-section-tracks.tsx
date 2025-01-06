"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@mantine/core";

import { TrackIcon } from "@/components/tracks/track-icon";
import { fadeInUpVariants } from "@/components/tracks/tracks-animations";

export function RegisterSection() {
    return (
        <motion.div 
            className="relative"
            variants={fadeInUpVariants}
        >
            <div className="flex">
                <TrackIcon>
                    <ArrowRight className="h-6 w-6 text-white" />
                </TrackIcon>
                <div className="ml-8 flex md:flex-row flex-col items-start md:items-center justify-center gap-6">
                    <p className="text-xl font-medium text-white md:text-2xl">
                        Let&apos;s redefine what&apos;s possible.
                    </p>
                    <Link 
                        target="_blank"
                        href="https://devshouse25.devfolio.co/" 
                        passHref
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 300,
                                damping: 15
                            }}
                        >
                            <Button
                                size="compact-lg"
                                className="button-Sponsor"
                            >
                                Register Now!
                            </Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}