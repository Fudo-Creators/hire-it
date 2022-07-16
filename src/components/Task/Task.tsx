import { useEffect, useState } from 'react';

import { Radio, RadioChangeEvent, Card, Button } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import clsx from 'clsx';

import { IQuestion } from '../../interfaces/interfaces';
import styles from './Task.module.scss';

type Props = {
  questions: IQuestion;
  key: number;
};

const Task = ({ questions }: Props) => {
  const { title, code, answers, key, spoiler } = questions; //data
  const { Meta } = Card;

  const [value, setValue] = useState<string>(); //current value
  const [machupAnswers, setMachupAnswers] = useState<Array<string>>([]);
  const [showSpoiler, setShowSpoiler] = useState<boolean>(false);
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
              console.log(text, value);

              return (
                <Radio
                  className={clsx(styles.task__btn, {
                    task__btn__checked: value === text,
                    task__btn__mistake: !isRight && value === text,
                    task__btn__right: closeAnswer && text === key,
                    task__btn__disabled: closeAnswer,
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
        {showSpoiler && <p className={styles.task__spoiler}>{spoiler}</p>}

        <div className={styles.task__btns}>
          {closeAnswer && !showSpoiler ? (
            <BulbOutlined className={styles.task__show_spoiler} onClick={() => setShowSpoiler(true)} />
          ) : null}
          <Button className={styles.task__confirm} onClick={gotAnswer} disabled={!value}>
            {!closeAnswer ? 'ответ' : 'дальше'}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Task;
