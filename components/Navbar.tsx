import Logo from "@/components/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import React, { SVGProps } from "react";

export const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center stickyflex item-center justify-between dark:shadow-none p-4 sticky top-0 bg-[#800000] scroll-smooth ">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image src={Logo} width="50" height="50" alt="Hero" className="" />
        <span className="sr-only">School Credentials Request</span>
      </Link>
      <nav className="ml-auto flex gap-3 text-gray-200 max-md:hidden">
        <Link
          href="#home"
          className="text-base font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-base font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#steps"
          className="text-base font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Steps
        </Link>
        <Link
          href="#testinomy"
          className="text-base font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Testimony
        </Link>
      </nav>
      <div className="ml-6">
        <Link
          href="/dashboard"
          className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

function SchoolIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
