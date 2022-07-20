import { CheckCircleOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

export const CheckCircleOutlined: FC<IconContextProps> = (props) => {
  return <AntIcons style={{ color: "#c3e88d" }} {...props} />;
};
export default CheckCircleOutlined;
