import { gql } from "graphql-request";

export const GET_GITHUB_USERS = gql`
  query GetUsers($query: String!) {
    search(first: 9, query: $query, type: USER) {
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
    }
  }
`;
