import Link from "next/link";
import React from "react";
import Logo from "@/components/images/logo.png";
import Notification from "@/components/images/notification.png";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const UserNavbar = () => {
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center stickyflex item-center justify-between dark:shadow-none p-4 sticky top-0 bg-[#800000] scroll-smooth ">
      <div className="ml-[6rem] max-md:ml-0">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image src={Logo} width="50" height="50" alt="Hero" className="" />
          <span className="sr-only">School Credentials Request</span>
        </Link>
      </div>

      <nav className="ml-auto flex gap-3 text-gray-200 max-md:hidden"></nav>
      <div className="mr-[6rem] max-md:mr-0">
        <ClerkLoading>
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="flex justify-center gap-3">
              <div className="cursor-pointer mt-1">
                <Image src={Notification} alt={""} width={27} height={27} />
              </div>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>Signed out</SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
