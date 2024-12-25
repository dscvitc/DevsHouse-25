"use client";
import Image from "next/image";
import React, { useState } from "react";
import { navbarItems } from "@/constants/index";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="bg-white/5 backdrop-blur-lg text-black py-6 px-5 flex justify-between items-center fixed w-full z-10">
      <div className="flex justify-center items-center gap-x-5 z-50">
        <Image
          src={"images/gdsc-logo.svg"}
          alt="logo"
          height={40}
          width={80}
          className="max-md:h-10 max-md:w-10"
        />
        <div className="flex flex-col justify-center items-center text-white font-poppins">
          <span className="max-md:text-lg md:text-xl">
            Google Developer Groups
          </span>
          <span className="max-md:text-xs md:text-xs">
            Vellore Institute of Technology, Chennai
          </span>
        </div>
      </div>
      <div
        className="text-5xl cursor-pointer mx-2 md:hidden flex h-10 w-7 items-center stroke-white"
        onClick={onClickHandler}
      >
        <Menu className="h-5 w-5 text-white" />
      </div>
      <ul
        className={`bg-[#131313] flex flex-col justify-center items-start gap-y-5 z-50 absolute w-full left-0 py-4  pl-7  mt-0 transition-all ease-in duration-500 ${
          !navbar && "opacity-0 top-[-400px] "
        } ${navbar && "opacity-100 top-[5.75rem] "}`}
      >
        {navbarItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="cursor-pointer text-white font-space-grotesk-reg"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:block flex-1 justify-center items-center gap-x-5 z-50">
        <ul className="flex justify-center items-center gap-x-10">
          {navbarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="cursor-pointer text-white font-space-grotesk-reg"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
