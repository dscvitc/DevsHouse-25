import Image from "next/image";
import React from "react";
import { SponsorMarquee } from "../SponsorMarquee";
import polygonLogo from "@/../public/sponsors/polygon.png";
import aptosLogo from "@/../public/sponsors/aptos.png";
import codecraftersLogo from "@/../public/sponsors/codecrafters.png";
import wolframLogo from "@/../public/sponsors/wolfram.png";
import xyzLogo from "@/../public/sponsors/xyz.png";
import ethindiaLogo from "@/../public/sponsors/ethindia.png";
import devfolioLogo from "@/../public/sponsors/devfolio.png";
import { Mona_Sans } from "next/font/google";

const monasans = Mona_Sans({ subsets: ["latin"] });



const Sponsor = () => {
  return (
    <div id="sponsors" className={`flex justify-center ${monasans.className} items-center flex-col`}>
      <SponsorMarquee />



      {/* RUBY SECTION */}

      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex justify-center w-full items-center ">
          <svg
            className="flex justify-end w-1/2"
            height="5"
            viewBox="0 0 633 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1875 5.78467H0V0.784668H13.1875V5.78467ZM65.9375 5.78467H39.5625V0.784668H65.9375V5.78467ZM118.688 5.78467H92.3125V0.784668H118.688V5.78467ZM171.438 5.78467H145.063V0.784668H171.438V5.78467ZM224.188 5.78467H197.813V0.784668H224.188V5.78467ZM276.938 5.78467H250.562V0.784668H276.938V5.78467ZM329.687 5.78467H303.312V0.784668H329.687V5.78467ZM382.437 5.78467H356.062V0.784668H382.437V5.78467ZM435.188 5.78467H408.812V0.784668H435.188V5.78467ZM487.938 5.78467H461.562V0.784668H487.938V5.78467ZM540.688 5.78467H514.313V0.784668H540.688V5.78467ZM593.438 5.78467H567.063V0.784668H593.438V5.78467ZM633 5.78467H619.813V0.784668H633V5.78467Z"
              fill="white"
            />
          </svg>
          <span className="text-[#FF5A4C] mx-4 text-[25px] leading-normal font-bold px-1 font-spaceGrotesk max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
            Ruby
          </span>
          <svg
            className="flex justify-start w-1/2"
            height="5"
            viewBox="0 0 629 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1042 5.78467H0V0.784668H13.1042V5.78467ZM65.5208 5.78467H39.3125V0.784668H65.5208V5.78467ZM117.938 5.78467H91.7292V0.784668H117.938V5.78467ZM170.354 5.78467H144.146V0.784668H170.354V5.78467ZM222.771 5.78467H196.563V0.784668H222.771V5.78467ZM275.188 5.78467H248.979V0.784668H275.188V5.78467ZM327.604 5.78467H301.396V0.784668H327.604V5.78467ZM380.021 5.78467H353.812V0.784668H380.021V5.78467ZM432.438 5.78467H406.229V0.784668H432.438V5.78467ZM484.854 5.78467H458.646V0.784668H484.854V5.78467ZM537.271 5.78467H511.063V0.784668H537.271V5.78467ZM589.688 5.78467H563.479V0.784668H589.688V5.78467ZM629 5.78467H615.896V0.784668H629V5.78467Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">

          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://devfolio.co/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={devfolioLogo} alt={"DEVFOLIO LOGO"} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://polygon.technology/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={polygonLogo} width={350} alt={"POLYGON LOGO"} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>


        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://aptosfoundation.org/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={aptosLogo} alt={"APTOS LOGO"} width={300} height={250} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://ethindia2024.devfolio.co/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={ethindiaLogo} alt={"ETHINDIA LOGO"} width={500} height={250} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>
      </div>

      {/* Emerald SECTION */}

      <div className="flex flex-col items-center w-full justify-center mt-20">
        <div className="flex justify-center w-full items-center">
          <svg
            className="flex justify-end "
            height="5"
            viewBox="0 0 593 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3542 5.78467H0V0.784668H12.3542V5.78467ZM61.7708 5.78467H37.0625V0.784668H61.7708V5.78467ZM111.188 5.78467H86.4792V0.784668H111.188V5.78467ZM160.604 5.78467H135.896V0.784668H160.604V5.78467ZM210.021 5.78467H185.313V0.784668H210.021V5.78467ZM259.438 5.78467H234.729V0.784668H259.438V5.78467ZM308.854 5.78467H284.146V0.784668H308.854V5.78467ZM358.271 5.78467H333.562V0.784668H358.271V5.78467ZM407.688 5.78467H382.979V0.784668H407.688V5.78467ZM457.104 5.78467H432.396V0.784668H457.104V5.78467ZM506.521 5.78467H481.813V0.784668H506.521V5.78467ZM555.938 5.78467H531.229V0.784668H555.938V5.78467ZM593 5.78467H580.646V0.784668H593V5.78467Z"
              fill="white"
            />
          </svg>
          <span className="text-[#5293FF] mx-4 text-[25px] leading-normal font-bold font-spaceGrotesk  max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
            Emerald
          </span>
          <svg
            className="flex justify-start "
            height="5"
            viewBox="0 0 592 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3333 5.78467H0V0.784668H12.3333V5.78467ZM61.6667 5.78467H37V0.784668H61.6667V5.78467ZM111 5.78467H86.3333V0.784668H111V5.78467ZM160.333 5.78467H135.667V0.784668H160.333V5.78467ZM209.667 5.78467H185V0.784668H209.667V5.78467ZM259 5.78467H234.333V0.784668H259V5.78467ZM308.333 5.78467H283.667V0.784668H308.333V5.78467ZM357.667 5.78467H333V0.784668H357.667V5.78467ZM407 5.78467H382.333V0.784668H407V5.78467ZM456.333 5.78467H431.667V0.784668H456.333V5.78467ZM505.667 5.78467H481V0.784668H505.667V5.78467ZM555 5.78467H530.333V0.784668H555V5.78467ZM592 5.78467H579.667V0.784668H592V5.78467Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://codecrafters.io/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center p-18">
                  <Image src={codecraftersLogo} alt={"CODECRAFTERS LOGO"} width={150} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center justify-center w-full">
        {/* TOPAZ SECTION */}
        <div className="flex flex-col items-center justify-center mt-20 w-full">
          <div className="flex justify-center items-center">
            <svg
              className="flex justify-end w-1/2"
              height="5"
              viewBox="0 0 592 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3333 5.78467H0V0.784668H12.3333V5.78467ZM61.6667 5.78467H37V0.784668H61.6667V5.78467ZM111 5.78467H86.3333V0.784668H111V5.78467ZM160.333 5.78467H135.667V0.784668H160.333V5.78467ZM209.667 5.78467H185V0.784668H209.667V5.78467ZM259 5.78467H234.333V0.784668H259V5.78467ZM308.333 5.78467H283.667V0.784668H308.333V5.78467ZM357.667 5.78467H333V0.784668H357.667V5.78467ZM407 5.78467H382.333V0.784668H407V5.78467ZM456.333 5.78467H431.667V0.784668H456.333V5.78467ZM505.667 5.78467H481V0.784668H505.667V5.78467ZM555 5.78467H530.333V0.784668H555V5.78467ZM592 5.78467H579.667V0.784668H592V5.78467Z"
                fill="white"
              />
            </svg>
            <span className="text-[#FCCF4B] mx-4 text-[25px] leading-normal font-bold font-spaceGrotesk  max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
              Topaz
            </span>
            <svg
              className="flex justify-start w-1/2"
              height="5"
              viewBox="0 0 629 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1042 5.78467H0V0.784668H13.1042V5.78467ZM65.5208 5.78467H39.3125V0.784668H65.5208V5.78467ZM117.938 5.78467H91.7292V0.784668H117.938V5.78467ZM170.354 5.78467H144.146V0.784668H170.354V5.78467ZM222.771 5.78467H196.563V0.784668H222.771V5.78467ZM275.188 5.78467H248.979V0.784668H275.188V5.78467ZM327.604 5.78467H301.396V0.784668H327.604V5.78467ZM380.021 5.78467H353.812V0.784668H380.021V5.78467ZM432.438 5.78467H406.229V0.784668H432.438V5.78467ZM484.854 5.78467H458.646V0.784668H484.854V5.78467ZM537.271 5.78467H511.063V0.784668H537.271V5.78467ZM589.688 5.78467H563.479V0.784668H589.688V5.78467ZM629 5.78467H615.896V0.784668H629V5.78467Z"
                fill="white"
              />
            </svg>
          </div>
          {/* company section */}
          <div className="flex flex-col gap-12 mt-20 justify-center items-center">
            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://www.wolfram.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={wolframLogo} alt={"WOLFRAM LOGO"} width={300} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://gen.xyz/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={xyzLogo} alt={"XYZ LOGO"} width={250} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Sponsor;
