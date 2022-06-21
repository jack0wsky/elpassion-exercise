import React from "react";

interface ISearchInputProps {
  value: string;
  placeholder: string;
  onChange: (searchPhrase: string) => void;
}

const SearchInput = ({ value, placeholder, onChange }: ISearchInputProps) => (
  <input
    className="h-[37px] border-[1px] border-light-grey px-[17px] bg-grey-800 text-white font-[16px] rounded-[5px] w-[208px] md:w-[240px] focus:outline-none focus:border-white"
    type="search"
    value={value}
    placeholder={placeholder}
    onChange={({ target }) => onChange(target.value)}
  />
);

export default SearchInput;
