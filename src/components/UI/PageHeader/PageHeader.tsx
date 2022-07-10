import { PageHeader as AntPageHeader } from "antd";
import { PageHeaderProps } from "antd/lib/page-header";
import { FC } from "react";

const Menu: FC<PageHeaderProps> = (props) => {
  return <AntPageHeader {...props} />;
};
export default Menu;
