import {
  Radio,
  RadioChangeEvent,
  Spin,
  notification,
  Collapse,
  Card,
} from "antd";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

  const { Panel } = Collapse;
  const { Meta } = Card;
  return (
    <>
      {!loading ? (
        <Spin />
      ) : (
        <Card
          className={
            ban && !success
              ? styles.wrapper__failed
              : success && !ban
              ? !ban && styles.wrapper__default
              : success && styles.wrapper__success
          }
          actions={[
            <>
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
                <Collapse accordion>
                  <Panel header="Правильный ответ" key={key}>
                    <p>{key}</p>
                    {spoiler && (
                      <Collapse>
                        <Panel header="Почему так?:)" key={key + 1}>
                          <p>{spoiler}</p>
                        </Panel>
                      </Collapse>
                    )}
                  </Panel>
                </Collapse>
              )}
            </>,
          ]}
        >
          <>
            <SyntaxHighlighter language="javascript" style={darcula}>
              {code}
            </SyntaxHighlighter>
            <Meta title={title} />
          </>
        </Card>
      )}
    </>
  );
};
export default Task;
