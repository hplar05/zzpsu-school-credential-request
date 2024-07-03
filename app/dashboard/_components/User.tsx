import React from "react";
import { useUser } from "@clerk/nextjs";

export const User = () => {
  const { user } = useUser();

  return (
    <div>
      <h1 className="text-3xl font-bold">Hi, {user?.fullName}</h1>
      <h1 className="text-3xl font-semibold">
        Our Website is Under Construction 🚧
      </h1>
    </div>
  );
};
