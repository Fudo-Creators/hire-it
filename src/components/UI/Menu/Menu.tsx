import { Menu as AntMenu } from "antd";
import { MenuProps } from "antd/lib/menu";
import { FC } from "react";

const Menu: FC<MenuProps> = (props) => {
  return <AntMenu {...props} />;
};
export default Menu;