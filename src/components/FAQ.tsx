import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import FAQData from "./FAQData";
import { Hubot_Sans } from "next/font/google";
import BubbleSVG from "../../public/FAQ_assets/green bubbles.svg";
import BlackBg from "../../public/FAQ_assets/Black-119.svg";
import SectionHeading from "./ui/SectionHeading";

// Correct font styles
const Hubot = Hubot_Sans({ weight: "700", subsets: ["latin"] });

const FAQ = () => {
  const colorClasses = {
    red: "bg-red-300",
    blue: "bg-blue-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
  };
  
  const bubbleColorClasses = {
    red: "filter-red",
    blue: "filter-blue",
    yellow: "filter-yellow",
    green: "filter-green",
  };

  const items = FAQData.map((props) => (
    <Accordion type="single" collapsible key={props.key}>
      <AccordionItem className="rounded-xl border-bottom bg-[#ffffff08]" value={props.question}>
        <AccordionTrigger className={`text-white text-left hover:bg-inherit`}>
          <div className={`flex ${Hubot.className} md:text-2xl text-[0.8rem] items-center`}>
            <Image
              src={BubbleSVG}
              alt="bubbles"
              className={`border-bottom rounded-xl scale-75 origin-bottom-left ${bubbleColorClasses[props.color as keyof typeof bubbleColorClasses]}`}
            />
            {props.question}
          </div>
        </AccordionTrigger>
        <AccordionContent className={`${colorClasses[props.color as keyof typeof colorClasses]} rounded-xl p-5`}>
          <p className={`${Hubot.className} pl-2 md:md:text-lg text-[0.8rem] text-black`}>
            {props.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));

  return (
    <div id="faq" className="relative flex flex-col items-center md:pt-12 pt-20 p-6">
      <div className="relative flex items-center justify-center w-full mb-8">
        <SectionHeading
          title="FAQ"
          geometry="Dodecahedron"
        />
      </div>
      <div className="w-full max-w-4xl space-y-4">
        {items}
      </div>
    </div>
  );
};

export default FAQ;
