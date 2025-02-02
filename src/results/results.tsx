import React, { useEffect, useState } from "react";
import { Result } from "./result";
import { IRepository, IUser } from "../types/github";
import { useSearch } from "../store/slices/search-slice";
import { useGithubUsers } from "../hooks/use-github-users";
import { useGithubRepositories } from "../hooks/use-github-repositories";
import { LoadingSpinner } from "../components/shared/loading-spinner";
import { Pagination } from "../components/results/pagination";
import { EmptyState } from "../components/results/empty-state";

let timer: any;

interface IResult {
  repo: string | null;
  user: string | null;
}

export const Results = () => {
  const { searchPhrase } = useSearch();
  const [results, setResults] = useState<(IUser | IRepository)[]>([]);
  const [totalResults, setTotalResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastItems, setLastItems] = useState<IResult>({
    repo: null,
    user: null,
  });

  const [firstItems, setFirstItems] = useState<IResult>({
    repo: null,
    user: null,
  });

  const { users, totalUsers, fetchUsers, lastItem, firstItem } = useGithubUsers(
    searchPhrase,
    lastItems.user,
    firstItems.user
  );

  const { repositories, totalRepositories, fetchRepositories, lastRepo } =
    useGithubRepositories(searchPhrase);

  useEffect(() => {
    if (!lastItem && !lastRepo) return;

    setLastItems({ repo: lastRepo, user: lastItem });

    setFirstItems({ ...firstItems, user: firstItem });
  }, [lastItem, lastRepo, users]);

  const fetchResults = async () => {
    try {
      setLoading(true);

      await fetchUsers();
      await fetchRepositories();

      setLoading(false);
    } catch (error) {
      alert("Cannot fetch data. Please refresh page and try again");
      setLoading(false);
    }
  };

  const debounce = (callback: () => void, timeout: number) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, timeout);
  };

  useEffect(() => {
    debounce(async () => fetchResults(), 1000);
  }, [searchPhrase]);

  useEffect(() => {
    fetchResults();
  }, [page]);

  useEffect(() => {
    if (!users || !repositories) return;

    const numberFormat = new Intl.NumberFormat("en-US");

    setTotalResults(numberFormat.format(totalUsers + totalRepositories));
    setResults([
      ...users.map((user: IUser) => ({ ...user, variant: "user" })),
      ...repositories.map((repo: IRepository) => ({
        ...repo,
        variant: "repo",
      })),
    ]);
  }, [users]);

  if (loading && results.length === 0) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  const navigateToPreviousPage = () => {
    setLastItems({ repo: null, user: null });
    setPage((prevState) => prevState - 1);
  };

  const navigateToNextPage = () => {
    setFirstItems({ repo: null, user: null });
    setPage((prevState) => prevState + 1);
  };

  return (
    <section className="w-full px-[16px] md:px-[140px] mx-auto flex flex-col items-center">
      {parseFloat(totalResults) > 0 && (
        <div className="mt-[34px] mb-[20px] w-full md:w-[80%]">
          <p className="text-[21px]">{totalResults} results</p>
        </div>
      )}

      <ul className="w-full md:w-[80%] mb-[58px] min-h-[200px] flex flex-col">
        {parseFloat(totalResults) > 0 ? (
          results.map((result) => {
            if (!result.id) return null;

            return <Result key={result.id} {...result} />;
          })
        ) : (
          <EmptyState />
        )}
      </ul>

      {searchPhrase === "" && (
        <Pagination
          currentPage={page}
          onPrevious={navigateToPreviousPage}
          onNext={navigateToNextPage}
        />
      )}
    </section>
  );
};
