import { QuestionCircleOutlined as AntIcons } from "@ant-design/icons";
import { IconContextProps } from "@ant-design/icons/lib/components/Context";
import { FC } from "react";

export const QuestionCircleOutlined: FC<IconContextProps> = (props: any) => {
  return <AntIcons style={{ color: '#89ddff' }} {...props}/>;
};
export default QuestionCircleOutlined;
