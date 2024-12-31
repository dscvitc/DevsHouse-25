import { Hubot_Sans } from "next/font/google";

const hubot = Hubot_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Divider({ heading, mt, mb }: { heading: string, mt: string, mb: string }) {
    return (
        <div className={`w-screen flex flex-row items-center font-mona justify-center text-center mt-4 mb-${mb}`} style={{ marginBottom: mb, marginTop: mt }}>
            <div className="w-[25%] border-0 border-white border-t-2 border-dashed m-4 sm:w-[25%] lg:w-[30%]"></div>
            <div className=" text-white text-[20px] font-bold font-space sm:text-[30px] lg:[40px]"
                style={hubot.style}
            >{heading}</div>
            <div className="w-[25%] border-0 border-white border-t-2 border-dashed m-4 sm:w-[25%] lg:w-[30%]"></div>
        </div >
    );
}