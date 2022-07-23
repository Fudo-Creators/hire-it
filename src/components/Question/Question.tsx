import { useEffect, useState } from "react";
import usePopup from "../../hooks/usePopup";
import { getQuestion } from "../../api/api";
import { IQuestion } from "../../interfaces/interfaces";

import Loader from "../UI/Loader/Loader";

import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "../UI/Button/Button";

import styles from "../Question/Question.module.scss";
import BulbOutlined from "../UI/IconsAntD/BulbOutlined";

const Question: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { showPopup, setShowPopup, Portal } = usePopup();
  const [data, setData] = useState<IQuestion | any>();
  const [questionUpdate, setQuestionUpdate] = useState<number>(0);

  useEffect(() => {
    setIsLoading(false);
    getQuestion(questionUpdate)
      .then((res) => {
        setData(res);
        setIsLoading(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [questionUpdate]);

  const generateRandInt = (): number => {
    const randInt = Math.floor(Math.random() * 2);
    return randInt;
  };

  return isLoading ? (
    <div className={styles.wrapper__default}>
      <h1 className={styles.question__title}>
        {data.title}
        <div className={styles.question__title__line}></div>
      </h1>
      {showPopup ? (
        <Portal>
          <div className={styles.answer__container}>
            <h2 className={styles.answer__title}>Объяснение</h2>
            <span className={`popup__close ${styles.answer__close}`}>✖</span>
            <SyntaxHighlighter
              language="javascript"
              style={darcula}
              className={styles.answer__text}
              wrapLines={true}
              wrapLongLines={true}
            >
              {data.spoiler}
            </SyntaxHighlighter>
            <div className={styles.answer__next}>
              <Button
                onClick={() => {
                  setShowPopup(false);
                  setQuestionUpdate(generateRandInt);
                }}
              >
                дальше
              </Button>
            </div>
          </div>
        </Portal>
      ) : null}
      <div className={styles.question__btns}>
        <BulbOutlined
          //@ts-ignore
          className="question__btns__bulb"
          onClick={() => setShowPopup(true)}
        />
        <Button
          onClick={() => {
            setQuestionUpdate(generateRandInt);
          }}
        >
          дальше
        </Button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
export default Question;
