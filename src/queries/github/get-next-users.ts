import { gql } from "graphql-request";

export const GET_NEXT_USERS = gql`
  query GetUsers($query: String!, $first: Int!, $after: String!) {
    search(first: $first, query: $query, after: $after, type: USER) {
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
        startCursor
        hasNextPage
        endCursor
      }
    }
  }
`;
