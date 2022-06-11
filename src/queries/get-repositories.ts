import { gql } from "graphql-request";

export const GET_REPOSITORIES = gql`
  query {
    search(first: 9, query: "env", type: REPOSITORY) {
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
    }
  }
`;
