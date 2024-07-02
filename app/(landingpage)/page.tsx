import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { JSX, SVGProps } from "react";
import { Home } from "./(sections)/Home";
import { About } from "./(sections)/About";
import { Steps } from "./(sections)/Steps";
import { Testimony } from "./(sections)/Testimony";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] scroll-smooth">
      <main className="flex-1 ">
        <Navbar />
        <Home />
        <About />
        <Steps />
        <Testimony />
        <Footer />
      </main>
    </div>
  );
}
