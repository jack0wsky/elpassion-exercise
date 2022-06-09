import React from "react";
import { GithubLogo } from "./icons/github-logo";
import { Link } from "react-router-dom";

export const Header = () => (
  <header style={{ backgroundColor: "#000" }}>
    <Link to="/">
      <GithubLogo />
    </Link>

    <input placeholder="Search" />
  </header>
);
