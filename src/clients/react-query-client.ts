import { QueryClient } from "react-query";
import { request } from "graphql-request";

export const queryClient = new QueryClient();

export const fetchQuery = async (
  query: any,
  { searchPhrase, first, after, before, login }: any
) => {
  const { search } = await request(
    "https://api.github.com/graphql",
    query,
    { query: searchPhrase, first, after, before, login },
    { Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}` }
  );

  return search;
};
