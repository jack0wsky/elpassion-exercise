import React from "react";
import { IUser, IRepository } from "../types/github";

interface IUserResultProps extends IUser {
  variant: "user";
}

interface IRepoResultProps extends IRepository {
  variant: "repo";
}

export const Result = (props: IUserResultProps | IRepoResultProps) => {
  if (props.variant === "user") {
    const { avatarUrl, bio, login, location, name } = props;
    return (
      <li className="pt-[20px] pb-[16px] flex items-start relative">
        <span className="absolute w-full h-[1px] bg-grey-200 top-0" />
        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
          <img src={avatarUrl} alt={login} />
        </div>

        <div className="flex flex-col ml-[8px]">
          <p className="text-primary">{name}</p>
          <p>{login}</p>

          <p>{bio}</p>

          {location && <p>{location}</p>}
        </div>
      </li>
    );
  }

  const { nameWithOwner } = props;
  return (
    <li className="pt-[20px] pb-[16px] flex items-start">
      <div className="w-[35px] h-[35px] rounded-full"></div>

      <div className="flex flex-col ml-[8px]">
        <p>{nameWithOwner}</p>
      </div>
    </li>
  );
};
