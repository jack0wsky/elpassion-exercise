import React from "react";
import { Link } from "react-router-dom";

export const EmptyState = () => (
  <div className="w-full h-[100vh] flex flex-col justify-center items-center">
    <h1 className="font-bold text-[20px]">We couldn't find matching user</h1>
    <p className="text-gray-500 my-[12px]">Return to main page and try again</p>
    <Link
      to="/"
      className="px-[30px] py-[15px] bg-black text-white border-[1px] border-black hover:bg-white hover:text-black"
    >
      Go to main page
    </Link>
  </div>
)
