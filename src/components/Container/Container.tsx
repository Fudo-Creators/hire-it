import React from "react";
import "./container.sass";
const Container = (props: any) => {
  return <div className="container">{props.children}</div>;
};
export default Container;
