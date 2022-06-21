import { gql } from "graphql-request";

export const GET_NEXT_REPOSITORIES = gql`
  query GetRepositories($first: Int!, $query: String!, $after: String!) {
    search(first: $first, after: $after, query: $query, type: REPOSITORY) {
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
