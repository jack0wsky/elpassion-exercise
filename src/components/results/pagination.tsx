import React from "react";

interface IPaginationProps {
  currentPage: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const Pagination = ({
  currentPage,
  onPrevious,
  onNext,
}: IPaginationProps) => (
  <div className="flex justify-between mb-[73px] w-[200px]">
    <button
      className="disabled:text-grey-200"
      disabled={currentPage === 1}
      onClick={onPrevious}
    >
      Previous
    </button>
    <button onClick={onNext}>Next</button>
  </div>
);
