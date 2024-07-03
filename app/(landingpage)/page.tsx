import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import { Home } from "./_sections/Home";
import { About } from "./_sections/About";
import { Steps } from "./_sections/Steps";
import { Testimony } from "./_sections/Testimony";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] scroll-smooth">
      <main className="flex-1 ">
        <Home />
        <FloatingButton />
        <About />
        <Steps />
        <Testimony />
      </main>
    </div>
  );
}
