"use client";
import {
  CloseOnClickLink,
  CustomSheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/custom-sheet";
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
import { FadeText } from "@/components/ui/fade-text";

type Props = {};

const Navbar = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
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
      <div className="text-5xl cursor-pointer mx-2 lg:hidden flex h-10 w-7 items-center">
        <CustomSheet>
          <SheetTrigger>
            <Menu className="h-5 w-5 text-white" />
          </SheetTrigger>
          <SheetContent className="bg-[#131313] text-white border-none">
            <SheetHeader>
              <SheetTitle></SheetTitle>

              <div>
                <ul className="flex flex-col gap-y-3 items-start justify-center">
                  {navbarItems.map((item, idx) => (
                    <li key={item.href}>
                      <CloseOnClickLink
                        href={item.href}
                        className="cursor-pointer font-space-grotesk-reg"
                        onClick={() => {}}
                      >
                        <FadeText
                          direction="right"
                          framerProps={{
                            show: {
                              transition: {
                                delay: idx * 0.25,
                              },
                            },
                          }}
                          text={item.title}
                        />
                      </CloseOnClickLink>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetHeader>
          </SheetContent>
        </CustomSheet>
      </div>

      <div className="hidden lg:block flex-1 justify-center items-center gap-x-5 z-50">
        <ul className=" ps-10 flex justify-start items-center gap-x-6">
          {navbarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="cursor-pointer text-white font-space-grotesk-reg text-sm line-clamp-1"
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
