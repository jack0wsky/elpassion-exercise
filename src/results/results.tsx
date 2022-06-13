import React, { useEffect, useState } from "react";
import { Result } from "./result";
import { IRepository, IUser } from "../types/github";
import { useSearch } from "../store/slices/search-slice";
import { useGithubUsers } from "../hooks/use-github-users";
import { useGithubRepositories } from "../hooks/use-github-repositories";

let timer: any;

export const Results = () => {
  const { searchPhrase } = useSearch();
  const [results, setResults] = useState<(IUser | IRepository)[]>([]);
  const [totalResults, setTotalResults] = useState("");

  const { users, totalUsers, fetchUsers } = useGithubUsers(searchPhrase);
  const { repositories, totalRepositories, fetchRepositories } =
    useGithubRepositories(searchPhrase);

  const debounce = (callback: () => void, timeout: number) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, timeout);
  };

  useEffect(() => {
    if (searchPhrase === "") {
      setResults([]);

      setTotalResults("0");

      return;
    }

    debounce(async () => {
      await fetchUsers();
      await fetchRepositories();
    }, 1000);
  }, [searchPhrase]);

  useEffect(() => {
    fetchUsers();
    fetchRepositories();
  }, []);

  useEffect(() => {
    if (!users || !repositories) return;

    const numberFormat = new Intl.NumberFormat("en-US");

    setTotalResults(numberFormat.format(totalUsers + totalRepositories));
    setResults(
      [
        ...users.map((user: any) => ({ ...user, variant: "user" })),
        ...repositories.map((repo: any) => ({ ...repo, variant: "repo" })),
      ].sort()
    );
  }, [users]);

  return (
    <section className="w-full px-[140px] mx-auto flex flex-col items-center">
      {totalResults !== "" && (
        <div className="mt-[34px] mb-[20px] w-[80%]">
          <p className="text-[21px]">{totalResults} results</p>
        </div>
      )}

      <ul className="w-[80%] min-h-[200px] flex flex-col">
        {results.map((result) => (
          <Result key={result.id} {...result} />
        ))}
      </ul>
    </section>
  );
};
