import { Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { notification } from "antd";
type NotificationType = "success" | "info" | "warning" | "error";

const Questions = (props: any) => {
  const { title, code, answers, key } = props.questions;
  const [value, setValue] = useState<string>();
  const [ban, setBan] = useState<boolean>(false);
  //const [checked, setChecked] = useState<boolean>(false);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const winNotify = (type: NotificationType) => {
    notification[type]({
      message: `Верно! Ответ: ${key}!`,
    });
  };
  const failNotify = (type: NotificationType) => {
    notification[type]({
      message: "Не верно, ответ в подсказке.",
    });
  };
  const congrat = () => {
    setBan(true);
    return winNotify("success");
  };
  const failed = () => {
    setBan(true);
    return failNotify("error");
  };
  //console.log(trueAnswer, value);
  return (
    <div>
      <>
        <div>{title}</div>
        <SyntaxHighlighter language="javascript" style={darcula}>
          {code}
        </SyntaxHighlighter>
        {/* <div>Возможные ответы:{item.answers}</div> */}
        <Radio.Group onChange={onChange} value={value}>
          {answers.map((text: string) => {
            return (
              <Radio
                onClick={(e) => (key !== e.target.value ? failed() : congrat())}
                disabled={ban}
                value={text}
              >
                {text}
              </Radio>
            );
          })}
        </Radio.Group>
        <details>
          <summary>Правильный ответ:</summary>
          <p>{key}</p>
        </details>
      </>
      <div className="questionsWrapper"></div>
    </div>
  );
};
export default Questions;
