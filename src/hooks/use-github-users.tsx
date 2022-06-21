import { useQuery } from "react-query";
import { GET_USERS } from "../queries/github/get-users";
import { GET_USER_BY_NAME } from "../queries/github/get-user-by-name";
import { fetchQuery } from "../clients/react-query-client";

export const useGithubUsers = (
  searchPhrase: string,
  lastItem: string | null,
  firstItem: string | null
) => {
  const PER_PAGE = 9;

  const { data, refetch } = useQuery("users", async () => {
    const search = await fetchQuery(GET_USERS, {
      searchPhrase,
      first: PER_PAGE,
      after: lastItem || null,
      before: firstItem || null,
    });

    return {
      users: search.nodes,
      totalCount: search.userCount,
      lastItem: search.pageInfo.endCursor,
      firstItem: search.pageInfo.startCursor,
    };
  });

  const { data: userData, refetch: fetchUser } = useQuery(
    "user",
    async (login) => {
      return await fetchQuery(GET_USER_BY_NAME, {
        login,
      });
    }
  );

  return {
    userData,
    users: data?.users,
    totalUsers: data?.totalCount,
    lastItem: data?.lastItem,
    firstItem: data?.firstItem,
    fetchUser,
    fetchUsers: refetch,
  };
};
