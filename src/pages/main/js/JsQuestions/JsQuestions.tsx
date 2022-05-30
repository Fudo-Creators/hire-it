import Questions from '../../../../components/Questions/Questions' 
const jsQuestions = () => {
  const JsQuestions = [
    {
      title: "Что будет в консоли?",
      code: 'Console.log("A")',
      answers: ["A ", "B ", "C ", "D "],
      answer: "A",
    },
  ];
  return (
    <div className="">
      <Questions questions={JsQuestions} />
    </div>
  );
};
export default jsQuestions;
