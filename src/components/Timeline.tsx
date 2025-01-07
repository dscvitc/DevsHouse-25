import Image from "next/image";
import Heading from "./ui/Heading";
const Timeline = () => {
  return (
    <div
      id="timeline"
      className="relative flex flex-col items-center md:pt-12 pt-20 p-6"
    >
      <div className="relative flex items-center justify-center w-full mb-8">
        {/* <div className="absolute inset-0 flex justify-center items-center -z-1 mt-5 mr-14">
          <Image
            src="/Timeline-bg.svg"
            alt="Timeline Background"
            width={500} 
            height={400} 
            className="object-contain opacity-40"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-white z-10">TIMELINE</h1> */}
        <div className="md-108 w-full">
          <Heading
            title="TIMELINE"
            geometry="Hyperboloid"
          />{" "}
          {/* Add margin-bottom here */}
        </div>
      </div>
      <div className="w-full max-w-4xl pt-20">
        <Image
          src="/Timeline.svg"
          alt="Timeline"
          width={900}
          height={600}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Timeline;
