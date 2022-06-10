import React from "react";

type ResultVariant = "repo" | "user";

interface IResultProps {
  variant: ResultVariant;
}

export const Result = ({}: IResultProps) => {
  return <li className="pt-[20px] pb-[16px]"></li>;
};
