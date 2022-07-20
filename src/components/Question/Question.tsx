import { Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { notification, Spin } from "antd";
import styles from "../Question/Question.module.sass";

const Question = (props: any) => {
  const { title, key } = props.questions;
  const { index } = props;

  return (
    <div className={styles.wrapper__default}>
      <>asd</>
    </div>
  );
};
export default Question;
