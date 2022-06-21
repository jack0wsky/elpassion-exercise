import React from "react";
import { Link } from "react-router-dom";
import { IUser, IRepository } from "../types/github";
import { BookIcon } from "../components/shared/icons/book-icon";
import { StarIcon } from "../components/shared/icons/star";
import { formatDistanceToNowStrict } from "date-fns";

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

        <div className="flex flex-col ml-[8px] w-[300px] md:w-auto">
          <Link to={`/user/${login}`} className="text-primary font-medium">
            {name}
          </Link>
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
    issues,
  } = props;
  return (
    <li className="pt-[20px] pb-[16px] flex items-start relative">
      <span className="absolute w-full h-[1px] bg-grey-100 top-0" />
      <div className="w-[35px] h-[24px] flex justify-center items-center">
        <BookIcon />
      </div>

      <div className="flex flex-col justify-between ml-[8px] w-full">
        <p className="text-primary font-medium">{nameWithOwner}</p>

        <p className="mt-[5px] mb-[15px] text-grey-200">{description}</p>

        <ul className="flex flex-wrap gap-y-[2px] gap-x-[14px] items-center">
          <li className="flex items-center">
            <StarIcon />{" "}
            <p className="text-[12px] ml-[4px] text-grey-200">
              {stargazers.totalCount}
            </p>
          </li>

          {languages.nodes.map(({ name, color }) => (
            <li className="text-[12px] flex items-center">
              <div
                style={{ backgroundColor: color }}
                className="w-[12px] h-[12px] rounded-full mr-[3px]"
              />
              <span className="text-grey-200">{name}</span>
            </li>
          ))}

          {licenseInfo && (
            <li className="text-[12px] text-grey-200">{licenseInfo.name}</li>
          )}

          <li className="text-[12px] text-grey-200">
            Updated {formatDistanceToNowStrict(new Date(updatedAt))}
          </li>

          <li className="text-[12px] text-grey-200">
            {issues.totalCount} {issues.totalCount > 1 ? "issues" : "issue"}{" "}
            need help
          </li>
        </ul>
      </div>
    </li>
  );
};
