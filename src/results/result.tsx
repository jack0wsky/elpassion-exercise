import React from "react";
import { IUser, IRepository } from "../types/github";
import { BookIcon } from "../components/shared/icons/book-icon";
import { StarIcon } from "../components/shared/icons/star";

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
        <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
          <img src={avatarUrl} alt={login} />
        </div>

        <div className="flex flex-col ml-[8px]">
          <p className="text-primary font-medium">{name}</p>
          <p className="text-gray-500">{login}</p>

          <p className="mt-[20px] mb-[8px]">{bio}</p>

          {location && <p className="text-[12px]">{location}</p>}
        </div>
      </li>
    );
  }

  const {
    nameWithOwner,
    licenseInfo,
    updatedAt,
    stargazers,
    languages,
    description,
  } = props;
  return (
    <li className="pt-[20px] pb-[16px] flex items-start relative">
      <span className="absolute w-full h-[1px] bg-grey-200 top-0" />
      <div className="w-[35px] h-[35px] flex justify-center items-center">
        <BookIcon />
      </div>

      <div className="flex flex-col justify-between ml-[8px] w-full">
        <p className="text-primary font-medium">{nameWithOwner}</p>

        <p className="mt-[5px] mb-[15px] text-grey-200">{description}</p>

        <div className="flex gap-[10px] items-center">
          <div className="flex items-center">
            <StarIcon /> <p className="text-[12px]">{stargazers.totalCount}</p>
          </div>

          {languages.nodes.map((language) => (
            <p className="text-[12px]">{language.name}</p>
          ))}

          {licenseInfo && <p className="text-[12px]">{licenseInfo.name}</p>}

          <p className="text-[12px]">Updated {updatedAt}</p>
        </div>
      </div>
    </li>
  );
};
