export interface IUser {
  id: string;
  bio: string;
  avatarUrl: string;
  location: string;
  login: string;
  name: string;
  variant: 'user';
}

export interface IRepository {
  id: string;
  nameWithOwner: string;
  description: string;
  updatedAt: string;
  licenseInfo: {
    name: string;
  };
  stargazers: {
    totalCount: number;
  };
  languages: {
    nodes: { name: string }[];
  };
  variant: 'repo';
}
