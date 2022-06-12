import { Radio, RadioChangeEvent } from "antd";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { notification, Spin } from "antd";
import styles from "../Task/Task.module.sass";
type NotificationType = "success" | "info" | "warning" | "error";

const Task = (props: any) => {
  const { title, code, answers, key, spoiler } = props.questions;
  const { index } = props;
  const [value, setValue] = useState<string>();
  const [loading, isLoading] = useState<boolean>(false);
  const [ban, setBan] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(true);

  useEffect(() => {
    isLoading(true);
  }, [props]);
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
    setSuccess(false);
    return failNotify("error");
  };
  return (
    <>
      {!loading ? (
        <Spin />
      ) : (
        <div
          className={
            ban && !success
              ? styles.wrapper__failed
              : success && !ban
              ? !ban && styles.wrapper__default
              : success && styles.wrapper__success
          }
        >
          <>
            <div className="text-sky-500 dark:text-sky-400">
              <div>{title}</div> <div>№{index + 1}</div>
            </div>
            <SyntaxHighlighter language="javascript" style={darcula}>
              {code}
            </SyntaxHighlighter>
            {/* <div>Возможные ответы:{item.answers}</div> */}
            <Radio.Group onChange={onChange} value={value}>
              {answers.map((text: string) => {
                return (
                  <Radio
                    onClick={(e) =>
                      key !== (e.target as HTMLInputElement).value
                        ? failed()
                        : congrat()
                    }
                    disabled={ban}
                    value={text}
                  >
                    {text}
                  </Radio>
                );
              })}
            </Radio.Group>
            {ban && (
              <details>
                <summary>Правильный ответ:</summary>
                <p>{key}</p>
                {spoiler && (
                  <details>
                    <summary>Подробнее:</summary>
                    <p>{spoiler}</p>
                  </details>
                )}
              </details>
            )}
          </>
        </div>
      )}
    </>
  );
};
export default Task;
