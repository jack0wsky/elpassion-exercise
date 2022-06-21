import React from "react";
import { Layout } from "../components/shared/layout";
import { Results } from "../results/results";

export const Home = () => {
  return (
    <Layout title="Github App">
      <Results />
    </Layout>
  );
};
