import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./search-input";
import { useSearch } from "../../store/slices/search-slice";

export const Header = () => {
  const { searchPhrase, updateSearch } = useSearch();

  return (
    <header className="bg-grey-800 w-full h-[52px] md:h-[72px] px-[20px] flex justify-between items-center">
      <Link to="/">
        <img src="/icons/github-logo.png" alt="github logo" />
      </Link>

      <SearchInput
        value={searchPhrase}
        placeholder="Search"
        onChange={updateSearch}
      />
    </header>
  );
};
