import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { request } from "graphql-request";
import { IUser } from "../types/github";
import { useParams } from "react-router";
import { Layout } from "../components/shared/layout";
import { GET_USER_BY_NAME } from "../queries/github/get-user-by-name";
import { StarIcon } from "../components/shared/icons/star";
import { FollowersIcon } from "../components/shared/icons/followers-icon";
import { EmptyState } from "../components/user/empty-state";

export const User = () => {
  const [metadata, setMetadata] = useState<IUser | null>(null);
  const { user } = useParams();

  const resetData = () => setMetadata(null);

  useEffect(() => {
    resetData();
  }, []);

  const { data, isLoading, refetch } = useQuery(
    "user",
    async () => {
      return await request(
        "https://api.github.com/graphql",
        GET_USER_BY_NAME,
        {
          login: user,
        },
        {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        }
      );
    },
    { enabled: !!user }
  );

  useEffect(() => {
    if (!user) return;

    refetch();
  }, [user]);

  useEffect(() => {
    if (isLoading || !data) return;

    setMetadata(data.user);
  }, [isLoading, data]);

  if (isLoading) return <p>Loading...</p>;

  if (!isLoading && !data && !metadata) return <EmptyState />;

  if (!metadata) return null;

  const { avatarUrl, name, starredRepositories, followers, following } =
    metadata;

  return (
    <Layout title={`${name} | Github Issues`}>
      <section className="flex flex-col items-center">
        <div className="w-[296px] h-[296px] mt-[45px] rounded-full flex justify-center items-center overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={avatarUrl}
            alt={name}
          />
        </div>
        <h1 className="text-[26px] font-medium mt-[16px]">{name}</h1>
        <p className="text-grey-200 text-[20px]">{user}</p>

        <ul className="flex gap-[19px] mt-[13px]">
          <li className="flex items-center">
            <FollowersIcon />{" "}
            <span className="ml-[4px] text-grey-200 text-[12px]">
              {followers.totalCount} Followers
            </span>
          </li>

          <li className="text-grey-200 text-[12px]">
            {following.totalCount} Following
          </li>

          <li className="flex items-center">
            <StarIcon />{" "}
            <span className="ml-[4px] text-grey-200 text-[12px]">
              {starredRepositories.totalCount}
            </span>
          </li>
        </ul>
      </section>
    </Layout>
  );
};
