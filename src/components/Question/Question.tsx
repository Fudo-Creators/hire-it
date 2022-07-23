import { useEffect, useState } from "react";
import usePopup from "../../hooks/usePopup";
import { getQuestion } from "../../api/api";
import { IQuestion } from "../../interfaces/interfaces";

import Loader from "../UI/Loader/Loader";
import { BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

import styles from "../Question/Question.module.scss";

const Question: React.FC = (props: any) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { showPopup, setShowPopup, Portal } = usePopup();
  const [data, setData] = useState<IQuestion | any>();
  const [questionUpdate, setQuestionUpdate] = useState<number>(0);

  useEffect(() => {
    setIsLoaded(false);
    getQuestion(questionUpdate)
      .then((res) => {
        setData(res);
        setIsLoaded(true);
      })
      .catch(() => {
        console.log("Bro, somethink wrong:(");
        setIsLoaded(false);
      });
  }, [questionUpdate]);

  const generateRandInt = (): number => {
    const randInt = Math.floor(Math.random() * 2);
    return randInt;
  };

  return isLoaded ? (
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
