// pages/About2.js
import React from "react";
import vitimage from "../../public/AboutsImages/vit-image.svg";
import gdscimage from "../../public/AboutsImages/GDSC_team.svg";
import clubLogo from "../../public/AboutsImages/GDSC_Logo.svg";
import diamond from "../../public/AboutsImages/Diamond.svg";
import glitter from "../../public/AboutsImages/Glitter.svg"; // Import the Glitter SVG
import Image from "next/image";
import Heading from "./ui/Heading"; // Adjust the path as necessary

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full items-center justify-evenly text-white font-spaceGrotesk -mt-12 md:mt-32"
    >
      <div className="md-108 w-full flex items-center justify-center">
        <Heading title="ABOUT US" geometry="Dodecahedron" />{" "}
        {/* Add margin-bottom here */}
      </div>

      <div className="flex flex-col md:flex-row w-full px-8 md:px-16 items-center gap-20 m-12 pt-12 md:pt-0">
        <div className="flex flex-col md:w-1/2">
          <p className="text-6xl font-bold mb-8">
            VIT Chennai
          </p>
          <p className="text-2xl text-gray-400">
            Vellore Institute of Technology, founded in 1984
            is one of the leading engineering colleges in
            India. It aims to provide a world-class
            education that not only polishes technical
            mastery and analytical skills but also imbibes
            strong ethical values in their students.
          </p>
        </div>
        <Image
          src={vitimage}
          alt={"VIT IMAGE"}
          className="md:w-2/5"
        ></Image>
      </div>

      {/* New section for club logo and heading */}
      <div className="flex flex-row items-center w-full mb-5 px-8 md:px-16">
        <Image
          src={clubLogo}
          alt={"Club Logo"}
          className="w-32 h-32 mr-4"
        />
        <p className="text-5xl font-bold">GDG on Campus</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full items-center gap-12 px-8 md:px-24 m-8">
        <div className="relative md:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent rounded-full blur-3xl"></div>
          <Image
            src={gdscimage}
            alt={"GDSC IMAGE"}
            className="relative w-full h-auto"
          ></Image>
        </div>
        <div className="flex flex-col md:w-1/2 items-start relative">
          {" "}
          {/* Make this div relative */}
          <div className="relative">
            {" "}
            {/* Wrap Diamond and Glitter in a relative div */}
            <Image
              src={diamond}
              alt={"Diamond"}
              className="w-24 h-24 mb-4 animate-bounce"
            />
            <Image
              src={glitter}
              alt={"Glitter"}
              className="absolute top-0 right-[-10px] w-8 h-8 animate-bounce-glitter"
            />{" "}
            {/* Adjusted position and animation */}
          </div>
          <p className="text-2xl text-gray-400">
            GDG On Campus VIT Chennai is a student run community
            group powered by Google Developers. We are a
            passionate group of budding developers who work
            together to build solutions for local businesses
            and communities with Google technology and
            promote healthy developer culture.
          </p>
        </div>
      </div>
    </div>
  );
}
