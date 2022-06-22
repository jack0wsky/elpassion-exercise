import React, { ReactElement } from "react";
import { Header } from "./header";
import { Helmet } from "react-helmet-async";

interface ILayoutProps {
  title: string;
  description: string;
  children: ReactElement | ReactElement[];
}

export const Layout = ({ title, children, description }: ILayoutProps) => (
  <main>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={title} />
    </Helmet>
    <Header />
    {children}
  </main>
);
