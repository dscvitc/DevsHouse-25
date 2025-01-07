import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import FAQData from "./FAQData";
// import { Space_Grotesk } from "next/font/google";
import { Hubot_Sans } from "next/font/google";
import RedBubble from "../../public/FAQ_assets/green bubbles.svg";
import YellowBubble from "../../public/FAQ_assets/green bubbles (1).svg";
import BlueBubble from "../../public/FAQ_assets/green bubbles (2).svg";
import GreenBubble from "../../public/FAQ_assets/green bubbles (3).svg";
import BlackBg from "../../public/FAQ_assets/Black-119.svg"

// import { Mona_Sans } from "next/font/google"; 
import Heading from "../components/ui/Heading"

// const Space = Space_Grotesk({ weight: "700", subsets: ["latin"] });
const Hubot = Hubot_Sans({weight:"700", subsets:["latin"]});
// const Mona = Mona_Sans({ weight: "700", subsets: ["latin"] });

const FAQ = () => {
  const colorClasses = {
    red: "bg-red-300",
    blue: "bg-blue-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
  };
  const imageClasses = {
    red: RedBubble,
    blue: BlueBubble,
    yellow: YellowBubble,
    green: GreenBubble,
  };
  const items = FAQData.map((props) => (
    <Accordion type="single" collapsible key={props.key}>
      <AccordionItem className="rounded-xl border-bottom bg-[#ffffff08]" value={props.question}>
        <AccordionTrigger className={`text-white text-left hover:bg-inherit`}>
          <div className={`flex  ${Hubot.className} md:text-2xl text-[0.8rem] items-center`}>
            <Image
              src={imageClasses[props.color as keyof typeof imageClasses]}
              alt="bubbles"
              className="border-bottom rounded-xl scale-75 origin-bottom-left"
            />
            {props.question}
          </div>
        </AccordionTrigger>
        <AccordionContent className={`${colorClasses[props.color as keyof typeof colorClasses]} rounded-xl p-5`}>
          <p className={`${Hubot.className} pl-2 md:md:text-lg text-[0.8rem] text-black `}>
            {props.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));

  return (
    <>
      <div
        id="faqs"
        className="flex flex-col justify-center items-center pb-20 md:pb-0 pt-10 relative mt-8"
      >
      <div className="relative flex flex-col items-center">
        {/* Heading with relative positioning */}
        
          {/* <h1
            className={`text-5xl ${Mona.className} text-white text-center mb-14 relative z-10`}
          >
            FAQs
          </h1> */}

          {/* Image positioned absolutely behind the text */}
          {/* <div className="absolute inset-0 flex justify-center -top-14">
            <Image
              src={FaqBg}
              alt="Tracks Background"
              width={270}
              height={170}
              className="w-40 h-40 object-contain opacity-70"
              priority
            />
          </div> */}
          <div className="md-108">
        <Heading title="‎‎ ‎‎‎  ‎ ‎FAQ‎ ‎  ‎" geometry="Ellipsoid"/> {/* Add margin-bottom here */}
      </div>
    

        {/* Accordion content below */}
        <div className="w-[100%] md:w-[80%] h-auto z-10 mt-10">
          <Accordion type="single" className="space-y-4">
            {items}
          </Accordion>
        </div>
      </div>

  
        <Image
          style={{
            position: "absolute",
            zIndex: -1,
            top: "55%", 
            left: "50%", 
            transform: "translate(-50%, -45%)", 
            width: "90vw",
            height: "80vw",
          }}
          src={BlackBg}
          width={800}
          height={800}
          alt=""
        />
      </div>
    </>
  );
  
};

export default FAQ;