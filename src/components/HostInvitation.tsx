import Image from "next/image";
import { Hubot_Sans } from "next/font/google";
import { Button } from "@mantine/core";

const hubot = Hubot_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const HostInvitation = () => {
    return (
        <div className="relative lg:mt-24 lg:mb-36 h-fit flex flex-col items-center justify-center">
            <div className="absolute flex justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-1/2 md:translate-y-0 w-full">
                <Image
                    src="/detailedGlobe.svg"
                    alt="Host Background"
                    width={400}
                    height={400}
                    className="lg:w-[900px] md:w-[700px] sm:w-[500px] w-[300px] "  // Hidden on small screens
                />
            </div>

            <div className="relative md:flex md:justify-center items-center z-10 w-full md:pl-6 lg:px-24 px-8 py-28 backdrop-blur-md bg-opacity-20 rounded-lg lg:mt-32 lg:mb-12 sm:flex-row flex-col">
                <div className="flex justify-center">
                    <Image
                        src="/invitationHouse.svg"
                        alt="Host Invitation DevHouse"
                        width={400}
                        height={400}
                        className="lg:w-[400px] md:w-[300px] w-[200px]"  // Hide image on small screens
                    />
                </div>

                <div
                    style={hubot.style}
                    className="lg:ml-24 md:ml-6 sm:mt-4 text-white flex-col text-center w-full mt-8"
                >
                    <div className="flex mb-6 flex-col md:flex-row sm:items-center">
                        <div className="font-bold lg:text-5xl mr-4 text-xl text-md mb-6 sm:mb-0" style={hubot.style}>
                            Let&apos;s Host Together
                        </div>
                        <div>
                            <Button size="compact-xl" className="button-Sponsor mt-4 ml-0 ">
                                Sponsor Us
                            </Button>
                        </div>
                    </div>
                    <div className=" mb-2 lg:text-3xl text-lg md:text-left">
                        Elevate your brand, be part of the tech revolution!
                    </div>
                    <div className="lg:text-3xl text-lg md:text-left">
                        Write to collaborate with us at: devshouse.tech@gmail.com
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostInvitation