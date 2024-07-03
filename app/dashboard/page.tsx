"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import React from "react";

const page = () => {
  const { user } = useUser();
  const { userId, sessionId, getToken } = useAuth();
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Hi, {user?.fullName}</h1>
      <h1 className="text-3xl font-semibold">
        Our Website is Under Construction 🚧
      </h1>
    </div>
  );
};

export default page;
