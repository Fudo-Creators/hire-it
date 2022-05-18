import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Questions = (props: any) => {
  //console.log(props.questions);
  const { questionTitle, questionCode, answers, answer } = props.questions;
  return (
    <>
      <div className="questionsWrapper"></div>
      <SyntaxHighlighter language="javascript" style={darcula}>
        console.log(props.questions);
      </SyntaxHighlighter>
    </>
  );
};
export default Questions;
