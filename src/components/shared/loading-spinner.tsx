import React from "react";

export const LoadingSpinner = () => (
  <div className="w-[60px] h-[60px] rounded-full bg-grey-100 relative overflow-hidden">
    <div className="w-1/2 h-1/2 bg-black absolute origin-bottom-right animate-spin" />
    <div className="absolute w-[56px] h-[56px] rounded-full top-1/2 left-1/2 -ml-[28px] -mt-[28px] -mr-[48%] bg-white" />
  </div>
);
