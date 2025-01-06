export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut",
        },
    },
};

export const trackVariants = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1.0],
        },
    },
};

export const fadeInUpVariants = {
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

export const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 15,
    mass: 1.2,
};
