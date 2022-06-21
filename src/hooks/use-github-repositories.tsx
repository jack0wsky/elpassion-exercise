import { useQuery } from "react-query";
import { GET_REPOSITORIES } from "../queries/github/get-repositories";

import { fetchQuery } from "../clients/react-query-client";

export const useGithubRepositories = (searchPhrase: string) => {
  const PER_PAGE = 9;

  const { data, refetch } = useQuery("repos", async () => {
    const search = await fetchQuery(GET_REPOSITORIES, {
      searchPhrase,
      first: PER_PAGE,
      after: "",
    });

    return {
      repositories: search.nodes,
      totalCount: search.repositoryCount,
      lastItem: search.pageInfo.endCursor,
    };
  });

  return {
    repositories: data?.repositories,
    totalRepositories: data?.totalCount,
    lastRepo: data?.lastItem,
    fetchRepositories: refetch,
  };
};
