import Hero from "@/components/hero/Hero";
import Image from "next/image";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="min-w-screen flex flex-col items-center justify-center">
      <Hero />
    </div>
  );
};

export default Home;
