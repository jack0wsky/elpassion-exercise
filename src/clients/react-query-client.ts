import { QueryClient } from "react-query";
import { request } from "graphql-request";

export const queryClient = new QueryClient();

export const ENDPOINT = "https://api.github.com/graphql";

export const HEADER = {
  Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
};

export const fetchQuery = async (
  query: any,
  { searchPhrase, first, after, before, login }: any
) => {
  const { search } = await request(
    ENDPOINT,
    query,
    { query: searchPhrase, first, after, before, login },
    HEADER
  );

  return search;
};
