"use client";
import React from "react";
import Logo from "@/components/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-[80vh] max-md:h-[65vh] flex justify-center items-center"
    >
      <div className="container px-4 md:px-6">
        <div className="grid max-lg:text-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                <TypeAnimation
                  sequence={["ZPPSU Credentials", 500, "Request Automate", 500]}
                  wrapper="span"
                  speed={50}
                  className="block"
                  repeat={Infinity}
                />
              </h1>
              <p className="max-w-[600px] max-lg:max-w-full text-muted-foreground md:text-xl ">
                Earn your school credential with our streamlined process. Get
                started today and take the first step towards a brighter future.
              </p>
            </div>
            <div className="flex flex-col max-lg:items-center max-lg:justify-center gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#800000] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#990404] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href={"/dashboard"}
              >
                Get Started
              </Link>
            </div>
          </div>
          <Image
            src={Logo}
            alt="Hero"
            className="mx-auto overflow-hidden sm:w-full max-lg:hidden h-[430px] w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};
