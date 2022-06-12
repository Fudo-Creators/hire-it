import Container from "../../../../components/Container/Container";
import Header from "../../../../components/Header/Header";
import Question from "../../../../components/Question/Question";
const JsQuestions = () => {
  const JsQuestions = [
    // источник: https://github.com/lydiahallie/javascript-questions/blob/master/ru-RU/README.md
    {
      title: "Какие типы данных существуют в JavaScript?",
      key: `Число «number» - Единый тип число используется как для целых, так и для дробных чисел. Существуют специальные числовые значения Infinity (бесконечность) и NaN (ошибка вычислений). Например, бесконечность Infinity получается при делении на ноль. Ошибка вычислений NaN будет результатом некорректной математической операции.
      Строка «string»
      Булевый (логический) тип «boolean»
      Специальное значение «null» - В JavaScript null не является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках. Это просто специальное значение, которое имеет смысл «ничего» или «значение неизвестно».
      Специальное значение «undefined» - Значение undefined, как и null, образует свой собственный тип, состоящий из одного этого значения. Оно имеет смысл «значение не присвоено». Если переменная объявлена, но в неё ничего не записано, то её значение как раз и есть undefined.
      Объекты «object» - Первые 5 типов называют «примитивными». Особняком стоит шестой тип: «объекты». Он используется для коллекций данных и для объявления более сложных сущностей. Объявляются объекты при помощи фигурных скобок {...}`,
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <h1>Желаю удачи!</h1>
        {JsQuestions.map((item, index) => {
          return <Question index={index} questions={item} />;
        })}
      </Container>
    </>
  );
};
export default JsQuestions;
