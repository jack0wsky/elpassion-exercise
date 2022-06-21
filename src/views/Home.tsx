import React from "react";
import { Layout } from "../components/shared/layout";
import { Results } from "../results/results";

export const Home = () => (
  <Layout
    title="Github App"
    description="Simple app created for ElPassion using Github API"
  >
    <Results />
  </Layout>
);
