import { ReactNode } from "react";
import "./Layout.css";

const Layout = (props: { children: ReactNode }) => {
  return <main>{props.children}</main>;
};

export default Layout;
