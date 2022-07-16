import { Button as AntButton } from "antd";
import { ButtonProps } from "antd/lib/button";
import { FC } from "react";

const Button: FC<ButtonProps> = (props) => {
  return <AntButton {...props} />;
};
export default Button;