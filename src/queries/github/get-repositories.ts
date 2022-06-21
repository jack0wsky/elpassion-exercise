import { gql } from "graphql-request";

export const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int!, $query: String!) {
    search(first: $first, query: $query, type: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          updatedAt
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
          languages(first: 1) {
            nodes {
              name
            }
          }
        }
      }
      repositoryCount
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
    }
  }
`;
