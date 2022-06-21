import { gql } from "graphql-request";

export const GET_USERS = gql`
  query GetUsers($query: String!, $first: Int!, $after: String, $before: String) {
    search(first: $first, query: $query, after: $after, before: $before, type: USER) {
      nodes {
        ... on User {
          id
          bio
          avatarUrl
          location
          name
          login
        }
      }
      userCount
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;
