import React, { ReactElement } from "react";
import { Header } from "./header";

interface ILayoutProps {
  children: ReactElement | ReactElement[];
}

export const Layout = ({ children }: ILayoutProps) => (
  <main>
    <Header />
    {children}
  </main>
);
