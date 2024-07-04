import Logo from "@/components/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import React, { SVGProps } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

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
      <div className="ml-6 max-md:ml-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                prefetch={false}
              >
                <Image
                  className="transition-all group-hover:scale-110"
                  src={Logo}
                  alt={""}
                  height="100"
                  width="100"
                />
                <span className="sr-only">School Credentials</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
                prefetch={false}
              >
                ZZPSU Document Request Management
              </Link>

              <Link
                href="#home"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Benefits
              </Link>
              <Link
                href="#steps"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Steps
              </Link>
              <Link
                href="#testimony"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Testimonies
              </Link>
              <Link
                href="#testimony"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Get Started
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          href="/dashboard"
          className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 max-md:hidden"
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

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
