"use client";

import { motion } from "framer-motion";

import { DottedSeperator } from "@/components/tracks/dotted-seperator";
import { TrackIcon } from "@/components/tracks/track-icon";
import { trackVariants } from "@/components/tracks/tracks-animations";

interface TrackItemProps {
    track: {
        title: string;
        number: string;
        description: string;
        icon: string;
        gradientClass: string;
    };
    isLast: boolean;
}

export function TrackItem({ track, isLast }: TrackItemProps) {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            className="relative"
            variants={trackVariants}
        >
            <div className="flex">
                <TrackIcon icon={track.icon} />
                <div className="ml-8">
                    <div className="max-w-lg space-y-3 max-sm:space-y-1">
                        <h3 className={`text-3xl font-bold md:text-5xl gradient-text ${track.gradientClass}`}>
                        {track.title}
                        </h3>
                        <p className="text-lg font-semibold tracking-wider text-[#AEAEAE] md:text-xl">
                        {track.number}
                        </p>
                        <p className="text-base leading-relaxed text-gray-300 md:text-lg max-sm:leading-[22px]">
                        {track.description}
                        </p>
                    </div>
                    {!isLast && (
                        <div className="mt-8">
                            <DottedSeperator />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}