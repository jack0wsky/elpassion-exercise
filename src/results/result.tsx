import React from "react";
import { IUser } from "../types/github";

type ResultVariant = "repo" | "user";

interface IResultProps extends IUser {
  variant: ResultVariant;
}

export const Result = ({}: IResultProps) => {
  return <li className="pt-[20px] pb-[16px]"></li>;
};
