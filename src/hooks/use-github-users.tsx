import { useQuery } from "react-query";
import { GET_GITHUB_USERS } from "../queries/get-github-users";
import { fetchQuery } from "../clients/react-query-client";

export const useGithubUsers = (searchPhrase: string) => {
  const { data, refetch } = useQuery("users", async () => {
    const search = await fetchQuery(GET_GITHUB_USERS, { searchPhrase });

    return { users: search.nodes, totalCount: search.userCount };
  });

  return {
    users: data?.users,
    totalUsers: data?.totalCount,
    fetchUsers: refetch,
  };
};
