import { useEffect, useState } from 'react';

import { Radio, RadioChangeEvent, Card, Button } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import clsx from 'clsx';

import { IQuestion } from '../../interfaces/interfaces';
import styles from './Task.module.scss';
import { getTask } from "../../api/api";

const Task: React.FC = () => {
  const { Meta } = Card;

  const [value, setValue] = useState<string>(); //current value
  const [showSpoiler, setShowSpoiler] = useState<boolean>(false);
  const [closeAnswer, setCloseAnswer] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(true);
  const [data, setData] = useState<IQuestion>();
  const [taskUpdate, setTaskUpdate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Вызов метода api с данными.
    getTask(taskUpdate)
      .then((res) => {
        setData(res);
        setIsLoading(true);
      })
      .catch(() => {
        console.log("Bro, somethink wrong:(");
        setIsLoading(false);
      });
  }, [taskUpdate]);

  const onChange = (e: RadioChangeEvent): void => {
    setValue(e.target.value);
  };
  const generateRandInt = (): number => {
    return Math.floor(Math.random() * 130);
  };
  const gotAnswer = (): void => {
    setIsRight(data!.key === value);

    setCloseAnswer(true);
    if (closeAnswer) {
      // Если ответ получен и нажата кнопка далее в задаче - тогда все состояния обновляются.
      setShowSpoiler(false);
      setCloseAnswer(false);
      setIsLoading(false);
      setTaskUpdate(generateRandInt);
    }
  };

  return isLoading ? (
    <div key={data!.id} className={styles.task}>
      <Meta title={data?.title} className={styles.task__title} />
      <Card
        className={styles.task__inner}
        actions={[
          <Radio.Group
            onChange={onChange}
            value={value}
            className={styles.task__group}
          >
            {data!.answers!.map((text: string) => {
              return (
                <Radio
                  className={clsx(styles.task__btn, {
                    task__btn__checked: value === text,
                    task__btn__mistake: !isRight && value === text,
                    task__btn__right: closeAnswer && text === data?.key,
                    task__btn__disabled: closeAnswer,
                  })}
                  disabled={closeAnswer}
                  value={text}
                >
                  {text}
                </Radio>
              );
            })}
          </Radio.Group>,
        ]}
      >
        <>
          <SyntaxHighlighter
            showLineNumbers={true}
            lineNumberStyle={{ minWidth: "20px", opacity: "0.2" }}
            language="javascript"
            style={darcula}
            className={styles.task__code}
          >
            {data!.code!}
          </SyntaxHighlighter>
        </>
      </Card>
      <div className={styles.task__wrapp}>
        {showSpoiler && <p className={styles.task__spoiler}>{data?.spoiler}</p>}

        <div className={styles.task__btns}>
          {closeAnswer && !showSpoiler ? (
            <BulbOutlined
              className={styles.task__show_spoiler}
              onClick={() => setShowSpoiler(true)}
            />
          ) : null}
          <Button
            className={styles.task__confirm}
            onClick={gotAnswer}
            disabled={!value}
          >
            {!closeAnswer ? "ответ" : "дальше"}
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <>Is loading</>
  );
};
export default Task;
