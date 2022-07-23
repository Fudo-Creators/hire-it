import { useEffect, useState } from 'react';

import { Radio, RadioChangeEvent, Card} from 'antd';
import Button from "../UI/Button/Button";
import { BulbOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import clsx from 'clsx';

import { IQuestion } from '../../interfaces/interfaces';
import styles from './Task.module.scss';
import { getTask } from '../../api/api';
import usePopup from '../../hooks/usePopup';
import Loader from '../UI/Loader/Loader';

const Task: React.FC = () => {
  const { Meta } = Card;
  const { showPopup, setShowPopup, Portal } = usePopup();

  const [value, setValue] = useState<string>(''); //current value
  const [closeAnswer, setCloseAnswer] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(true);
  const [data, setData] = useState<IQuestion>();
  const [mashupAsnwers, setMachupAnswers] = useState<string[]>();
  const [taskUpdate, setTaskUpdate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTask(taskUpdate)
      .then((res) => {
        setData(res);
        const mashupAnswers = res.answers!.sort(() => Math.random() - 0.5);
        setMachupAnswers(mashupAnswers);
        setIsLoading(true);
      })
      .catch(() => {
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
      setShowPopup(false);
      setValue('');
      setIsRight(true);
      setCloseAnswer(false);
      setIsLoading(false);
      setTaskUpdate(generateRandInt);
    }
  };

  const setBtnClasses = (text: string) => {
    const obj = {
      task__btn__checked: value === text,
      task__btn__mistake: !isRight && value === text,
      task__btn__right: closeAnswer && text === data!.key,
      task__btn__disabled: closeAnswer,
      task__btn__medium: text.length > 27,
      task__btn__small: text.length > 32,
    };

    return obj;
  };

  return isLoading ? (
    <div className={styles.task}>
      <Meta title={data!.title} className={clsx(styles.task__title, { task__title__medium: data!.title.length > 25 })} />
      <Card
        className={styles.task__inner}
        actions={[
          <Radio.Group onChange={onChange} value={value} className={styles.task__group}>
            {mashupAsnwers &&
              mashupAsnwers.map((text: string) => {
                return (
                  <Radio
                    className={clsx(styles.task__btn, setBtnClasses(text))}
                    disabled={closeAnswer}
                    value={text}>
                    {text}
                  </Radio>
                );
              })}
          </Radio.Group>,
        ]}>
        <>
          <SyntaxHighlighter
            showLineNumbers={true}
            lineNumberStyle={{ minWidth: '20px', opacity: '0.2' }}
            language='javascript'
            style={darcula}
            className={styles.task__code}>
            {data!.code ? data!.code : ''}
          </SyntaxHighlighter>
        </>
      </Card>
      <div className={styles.task__wrapp}>
        <Portal>
          {showPopup && (
            <div className={`popup ${styles.task__spoiler}`}>
              <h3 className={styles.task__spoiler_title}>Объяснение</h3>
              <SyntaxHighlighter
                language='javascript'
                style={darcula}
                className={styles.task__text}
                wrapLines={true}
                wrapLongLines={true}>
                {data!.spoiler ? data!.spoiler : ''}
              </SyntaxHighlighter>
              <span className={`popup__close ${styles.task__close}`}>✖</span>

              <div className={styles.task__spoiler_wrapp}>
                <Button onClick={gotAnswer} disabled={!value}>
                  дальше
                </Button>
              </div>
            </div>
          )}
        </Portal>

        <div className={styles.task__btns}>
          {closeAnswer && !showPopup ? (
            <BulbOutlined
              className={`popup__show ${styles.task__show_spoiler}`}
              onClick={() => setShowPopup(true)}
            />
          ) : null}
          <Button onClick={gotAnswer} disabled={!value}>
            {!closeAnswer ? 'ответ' : 'дальше'}
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
export default Task;
