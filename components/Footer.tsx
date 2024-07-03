import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex justify-center py-6 w-full shrink-0 items-center px-4 md:px-6 border-t ">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 School Credentials Request. All rights reserved.
      </p>
    </footer>
  );
};
