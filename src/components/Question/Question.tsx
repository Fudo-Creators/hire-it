import usePopup from "../../hooks/usePopup";

import Loader from "../UI/Loader/Loader";
import { BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

import styles from "../Question/Question.module.scss";
import { useState } from "react";

const Question: React.FC = (props: any) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true); // пока нет бд, оставлю тут true
  const { showPopup, setShowPopup, Portal } = usePopup();

  return isLoaded ? (
    <div className={styles.wrapper__default}>
      <h1 className={styles.question__title}>
        Чем LinkedHashSet отличается от HashSet?
        <div className={styles.question__title__line}></div>
      </h1>
      {showPopup ? (
        <Portal>
          <div className={styles.answer__container}>
            <h2 className={styles.answer__title}>Объяснение</h2>
            <span className={`popup__close ${styles.answer__close}`}>
              ✖
            </span>
            <SyntaxHighlighter
                language='javascript'
                style={darcula}
                className={styles.answer__text}
                wrapLines={true}
                wrapLongLines={true}>
                LinkedHashSet отличается от HashSet только тем, что в его основе лежит LinkedHashMap вместо HashMap. Благодаря этому порядок элементов при обходе коллекции является идентичным порядку добавления элементов (insertion-order). При добавлении элемента, который уже присутствует в LinkedHashSet (т.е. с одинаковым ключом), порядок обхода элементов не изменяется.
              </SyntaxHighlighter>
              <div className={styles.answer__next}>
              <Button>дальше</Button>
              </div>
          </div>
        </Portal>
      ) : null}
      <div className={styles.question__btns}>
        <BulbOutlined
          className="question__btns__bulb"
          onClick={() => setShowPopup(true)}
        />
        <Button>дальше</Button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
export default Question;
