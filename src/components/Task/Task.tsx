import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { Radio, RadioChangeEvent, Card, Button } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import clsx from 'clsx';

import { IQuestion } from '../../interfaces/interfaces';
import styles from './Task.module.scss';
import usePopup from '../../hooks/usePopup';

type Props = {
  questions: IQuestion;
  key: number;
};

type Portal = {
  children: ReactNode;
};

const Portal = ({ children }: Portal) => ReactDOM.createPortal(children, document.body);

const Task = ({ questions }: Props) => {
  const { title, code, answers, key, spoiler } = questions; //data
  const { Meta } = Card;
  const { showPopup, onShowPopup } = usePopup();

  const [value, setValue] = useState<string>(); //current value
  const [machupAnswers, setMachupAnswers] = useState<Array<string>>([]);
  const [closeAnswer, setCloseAnswer] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(true);

  useEffect(() => {
    //mashup our asnwers
    const mashupAnswers = answers.sort(() => Math.random() - 0.5);
    setMachupAnswers(mashupAnswers);
  }, []);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const gotAnswer = () => {
    setIsRight(key === value);
    setCloseAnswer(true);
  };

  return (
    <div className={styles.task}>
      <Meta title={title} className={styles.task__title} />
      <Card
        className={styles.task__inner}
        actions={[
          <Radio.Group onChange={onChange} value={value} className={styles.task__group}>
            {machupAnswers.map((text: string) => {
              return (
                <Radio
                  className={clsx(styles.task__btn, {
                    task__btn__checked: value === text,
                    task__btn__mistake: !isRight && value === text,
                    task__btn__right: closeAnswer && text === key,
                    task__btn__disabled: closeAnswer,
                    task__btn__medium: text.length > 27,
                    task__btn__small: text.length > 35,
                  })}
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
            {code}
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
                {spoiler}
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
              onClick={() => onShowPopup(true)}
            />
          ) : null}
          <Button onClick={gotAnswer} disabled={!value}>
            {!closeAnswer ? 'ответ' : 'дальше'}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Task;
