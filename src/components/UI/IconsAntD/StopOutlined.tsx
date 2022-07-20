import { StopOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

export const StopOutlined: FC<IconContextProps> = (props: any) => {
  return <AntIcons style={{  color: '#f07178' }} {...props}/>;
};
export default StopOutlined;
