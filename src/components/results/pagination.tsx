import React from "react";

interface IPaginationProps {
  currentPage: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

export const Pagination = ({
  currentPage,
  onPreviousPage,
  onNextPage,
}: IPaginationProps) => (
  <div className="flex justify-between mb-[73px] w-[200px]">
    <button
      className="disabled:text-grey-200"
      disabled={currentPage === 1}
      onClick={onPreviousPage}
    >
      Previous
    </button>
    <button onClick={onNextPage}>Next</button>
  </div>
);
