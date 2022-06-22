import React from "react";

export const EmptyState = () => (
  <div className="w-full h-[100vh] flex flex-col justify-center items-center">
    <h1 className="font-bold text-[20px]">
      We couldn't find matching user or repository
    </h1>
    <p className="text-gray-500 my-[12px]">
      Make sure you provided correct name
    </p>
  </div>
);
