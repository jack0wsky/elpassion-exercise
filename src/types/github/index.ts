interface ICount {
  totalCount: number;
}

export interface IUser {
  id: string;
  bio: string;
  avatarUrl: string;
  location: string;
  login: string;
  name: string;
  starredRepositories: ICount;
  followers: ICount;
  following: ICount;
  variant: "user";
}

interface ILanguage {
  name: string;
  color: string;
}

export interface IRepository {
  id: string;
  nameWithOwner: string;
  description: string;
  updatedAt: string;
  licenseInfo: {
    name: string;
  };
  issues: ICount;
  stargazers: ICount;
  languages: {
    nodes: ILanguage[];
  };
  variant: "repo";
}
