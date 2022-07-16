import { Layout as AntLayout } from "antd";
import { LayoutProps } from "antd/lib/layout";
import { FC } from "react";

const Layout: FC<LayoutProps> = (props) => {
  return <AntLayout {...props} />;
};
export default Layout;
