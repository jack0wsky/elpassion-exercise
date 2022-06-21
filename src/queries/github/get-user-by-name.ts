import { gql } from "graphql-request";

export const GET_USER_BY_LOGIN = gql`
  query GetUserByLogin($login: String!) {
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
