import { Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { notification, Spin } from "antd";
import styles from "../Question/Question.module.sass";
type NotificationType = "success" | "info" | "warning" | "error";

const Question = (props: any) => {
  const { title, key } = props.questions;
  const { index } = props;

  return (
    <div className={styles.wrapper__default}>
      <>
        <div className={styles.headQuestion}>
          <div>{title}</div> <div>№{index + 1}</div>
        </div>
        <details>
          <summary>Правильный ответ:</summary>
          <p>{key}</p>
        </details>
      </>
    </div>
  );
};
export default Question;
