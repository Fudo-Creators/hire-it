import { BulbOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

export const BulbOutlined: FC<IconContextProps> = (props: any) => {
  return <AntIcons {...props} />;
};
export default BulbOutlined;
