import axios from "axios";

export const GithubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});
