interface Track {
    title: string
    number: string
    description: string
    icon: string
    gradientClass: string
}

export const tracks: Track[] = [
    {
        title: "Finance",
        number: "TRACK #01",
        description:
            "Break free from the ordinary! Our FinTech track empowers you to redefine financial systems. Dive into the world of digital payments, lending, and financial inclusion to create scalable and secure solutions for the future.",
        icon: "finance.svg",
        gradientClass: "gradient-finance",
    },
    {
        title: "AR/VR",
        number: "TRACK #02",
        description:
            "Step into the future! Our AR/VR track invites you to craft immersive experiences and simulations. Explore how augmented and virtual realities can revolutionize industries and redefine human interaction.",
        icon: "ar-vr.svg",
        gradientClass: "gradient-arvr",
    },
    {
        title: "Environmental Sustainability",
        number: "TRACK #03",
        description:
            "Build a sustainable tomorrow! In the Environmental Sustainability track, leverage cutting-edge technology to tackle environmental challenges. Innovate eco-friendly solutions that contribute to a greener, healthier planet.",
        icon: "env-sus.svg",
        gradientClass: "gradient-environmental",
    },
    {
        title: "Blockchain and DApps",
        number: "TRACK #04",
        description:
            "Embrace decentralization! The Blockchain and DApps track empowers you to create transparent, secure, and decentralized ecosystems. Dive into smart contracts and blockchain technology to shape the future.",
        icon: "ethereum-2.svg",
        gradientClass: "gradient-blockchain",
    },
    {
        title: "IoT and Smart Devices",
        number: "TRACK #05",
        description:
            "Connect the world around you! The IoT and Smart Devices track is your chance to develop intelligent solutions for a seamlessly connected future. Create smart technologies that simplify and enhance everyday life.",
        icon: "iot.svg",
        gradientClass: "gradient-iot",
    },
    {
        title: "Open Innovation",
        number: "TRACK #06",
        description:
            "Innovate without boundaries! The Open Innovation track is your playground to dream big. Collaborate with diverse minds, tackle real-world challenges, and create groundbreaking solutions that defy convention.",
        icon: "open-innovation.svg",
        gradientClass: "gradient-innovation",
    },
  ];