import Questions from '../../../../components/Questions/Questions' 
const jsQuestions = () => {
  const JsQuestions = [{questionTitle:'Что будет в консоли?', questionCode:'Console.log("A")',answers:['A','B','C','D'], answer:'A'}]
  return (
    <Questions questions={JsQuestions}/>
  )
};
export default jsQuestions;
