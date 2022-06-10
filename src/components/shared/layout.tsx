import React, { ReactElement } from "react";
import { Header } from "./header";
import { Helmet } from "react-helmet";

interface ILayoutProps {
  title: string;
  children: ReactElement | ReactElement[];
}

export const Layout = ({ title, children }: ILayoutProps) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    {children}
  </main>
);
