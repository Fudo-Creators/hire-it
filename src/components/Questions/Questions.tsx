import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Questions = (props: any) => {
  console.log(props.questions);
  //const { questionTitle, questionCode, answers, answer } = props.questions;
  return (
    <div>
      {props.questions.map((item: any) => {
        return (
          <>
            <div>{item.questionTitle}</div>
            <SyntaxHighlighter language="javascript" style={darcula}>
              {item.questionCode}
            </SyntaxHighlighter>
            <div>Возможные ответы:{item.answers}</div>
            <details>
              <summary>Правильный ответ:</summary>
              <p>{item.answer}</p>
            </details>
          </>
        );
      })}
      <div className="questionsWrapper"></div>
    </div>
  );
};;
export default Questions;
