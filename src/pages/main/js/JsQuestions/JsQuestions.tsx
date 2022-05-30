import Container from "../../../../components/Container/Container";
import Questions from "../../../../components/Questions/Questions";
const jsQuestions = () => {
  const JsQuestions = [
    {
      title: "Что будет в консоли?",
      code: 'Console.log("A")',
      answers: ["A", "Bsa", "C2 ", "DXZC"],
      key: "A",
    },

    {
      title: "Что будет в консоле?",
      code: "Console.log(1+2)",
      answers: ["1", "2", "3", "4"],
      key: "3",
    },
  ];

  return (
    <Container>
      {JsQuestions.map((item,index)=>{
        return <Questions key={index} questions={item} />
      })}
    </Container>
  );
};
export default jsQuestions;
