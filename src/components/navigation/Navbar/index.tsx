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
  // Custom scroll handler with offset
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (id) {
      const section = document.getElementById(id);
      if (section) {
        const offset = 100; // Adjust this value to set how much space above the section you want
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="bg-white/5 backdrop-blur-lg text-black py-6 px-5 max-sm:px-3 flex justify-between items-center fixed w-full z-50">
      <div className="flex justify-center items-center gap-x-5 z-50">
        <Image
          src={"images/gdsc-logo.svg"}
          alt="logo"
          height={40}
          width={80}
          className="max-md:h-10 max-md:w-10"
        />
        <div className="flex flex-col justify-center items-center text-white font-poppins max-sm:gap-y-0">
          <span className="max-md:text-lg md:text-xl max-sm:text-[16px]">
            Google Developer Groups
          </span>
          <span className="text-xs max-sm:text-[10px] leading-none">
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
                {/* <ul className="flex flex-col gap-y-3 items-start justify-center">
                  {navbarItems.map((item, idx) => (
                    <li key={idx}>
                      <CloseOnClickLink
                        className="cursor-pointer font-space-grotesk-reg"
                        // href={item.href}
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
                </ul> */}
                <ul className="flex flex-col gap-y-3 items-start justify-center">
                  {navbarItems.map((item, idx) => (
                    <li key={idx}>
                      <CloseOnClickLink
                        className="cursor-pointer font-hubot-sans-reg"
                        id={item.href} // Make sure each item has an href like "#section1"
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
                className="cursor-pointer text-white font-hubot-sans-reg text-sm line-clamp-1"
                onClick={(event) =>
                  handleClick(event, item.href)
                }
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
