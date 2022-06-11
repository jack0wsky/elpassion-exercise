import { useQuery } from "react-query";
import { GET_REPOSITORIES } from "../queries/get-repositories";

import { fetchQuery } from "../clients/react-query-client";

export const useGithubRepositories = (searchPhrase: string) => {
  const { data, refetch } = useQuery("repos", async () => {
    const search = await fetchQuery(GET_REPOSITORIES, { searchPhrase });

    return { repositories: search.nodes, totalCount: search.repositoryCount };
  });

  return {
    repositories: data?.repositories,
    totalRepositories: data?.totalCount,
    fetchRepositories: refetch,
  };
};
