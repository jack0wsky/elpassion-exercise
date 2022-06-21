import { gql } from "graphql-request";

export const GET_USER_BY_NAME = gql`
  query GetUserByName($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        ... on StarredRepositoryConnection {
          totalCount
        }
      }
    }
  }
`;
