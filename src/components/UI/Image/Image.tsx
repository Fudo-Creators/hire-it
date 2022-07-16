import { Image as AntImage } from "antd";
import { ImageProps } from "antd/lib/image";
import { FC } from "react";

const Image: FC<ImageProps> = (props) => {
  return <AntImage {...props} />;
};
export default Image;