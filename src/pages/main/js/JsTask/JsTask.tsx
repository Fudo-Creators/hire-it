import Container from "../../../../components/Container/Container";
import Header from "../../../../components/Header/Header";
import Task from "../../../../components/Task/Task";
import { Col, Divider, Row } from "antd";
const JsTasks = () => {
  const JsTasks = [
    // источник: https://github.com/lydiahallie/javascript-questions/blob/master/ru-RU/README.md
    {
      title: "Что будет в консоли?",
      code: `function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
      }
      
      sayHi();`,
      answers: [
        "Lydia и undefined",
        "Lydia и ReferenceError",
        "ReferenceError и 21",
        "undefined и ReferenceError",
      ],
      key: "undefined и ReferenceError",
      spoiler: `Внутри функции мы сперва определяем переменную name с помощью ключевого слова var. Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением undefined по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение name когда пытаемся вывести её в консоль, поэтому в консоли будет undefined.
      Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение ReferenceError.`,
    },
    {
      title: "",
      code: `for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }`,
      answers: ["0 1 2 и 0 1 2", "0 1 2 и 3 3 3", "3 3 3 и 0 1 2"],
      key: "3 3 3 и 0 1 2",
      spoiler: `Из-за очереди событий в JavaScript, функция setTimeout вызывается после того как цикл будет завершен. Так как переменная i в первом цикле была определена с помощью var, она будет глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя унарный оператор ++. К моменту выполнения функции setTimeout значение i будет равно 3 в первом примере.
      Во втором цикле переменная i определена с помощью let. Такие переменные (а также const) имеют блочную область видимости (блок это что угодно между { }). С каждой итерацией i будет иметь новое значение, и каждое значение будет замкнуто в своей области видимости внутри цикла.`,
    },
    {
      title: "Что будет в консоли?",
      code: `const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius
      };
      
      shape.diameter();
      shape.perimeter();`,
      answers: ["20 и 62.83185307179586", "20 и NaN", "20 и 63", "NaN и 63"],
      key: "20 и NaN",
      spoiler: `Заметь, что diameter это обычная функция, в то время как perimeter это стрелочная функция.
      У стрелочных функций значение this указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове perimeter значение this у этой функции указывает не на объект shape, а на внешнюю область видимости (например, window).
      У этого объекта нет ключа radius, поэтому возвращается undefined.`,
    },
    {
      title: "Что будет в консоли?",
      code: `+true;
      !"Lydia";`,
      answers: ["1 и false", "false и NaN", "false и false"],
      key: "1 и false",
      spoiler: `Унарный плюс приводит операнд к числу. true это 1, а false это 0.
      Строка 'Lydia' это "истинное" значение. На самом деле мы спрашиваем "является ли это истинное значение ложным"? Ответ: false.`,
    },
    {
      title: "Что НЕ является валидным?",
      code: `const bird = {
        size: "small"
      };
      
      const mouse = {
        name: "Mickey",
        small: true
      };`,
      answers: [
        "mouse.bird.size",
        "mouse[bird.size]",
        `mouse[bird["size"]]`,
        "Все варианты валидны",
      ],
      key: "mouse.bird.size",
      spoiler: `В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не набираем их как строки, они всегда преобразовываются к строкам под капотом.
      JavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает [ и продолжает пока не встретит ]. Только после этого он вычислит то, что находится внутри скобок.
      mouse[bird.size]: Сперва определяется bird.size, которое равно "small". mouse["small"] возвращает true.     
      Но с записью через точку так не происходит. У mouse нет ключа bird. Таким образом, mouse.bird равно undefined. Затем мы запрашиваем ключ size, используя точечную нотацию: mouse.bird.size. Так как mouse.bird это undefined, мы запрашиваем undefined.size. Это не является валидным, и мы получаем ошибку типа Cannot read property "size" of undefined.`,
    },
    {
      title: "Что будет в консоли?",
      code: `let c = { greeting: "Hey!" };
      let d;
      
      d = c;
      c.greeting = "Hello";
      console.log(d.greeting);`,
      answers: ["Hello", "Hey!", "undefined", "ReferenceError", "TypeError"],
      key: "Hello",
      spoiler: `В JavaScript все объекты являются ссылочными типами данных.
      Сперва переменная c указывает на объект. Затем мы указываем переменной d ссылаться на тот же объект, что и c.
      Когда изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект.`,
    },
    {
      title: "Что будет в консоли?",
      code: `let a = 3;
      let b = new Number(3);
      let c = 3;
      
      console.log(a == b);
      console.log(a === b);
      console.log(b === c);`,
      answers: [
        "true false true",
        "false false true",
        "true false false",
        "false true true",
      ],
      key: "true false false",
      spoiler: `new Number() это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных фич и это объект.
      Оператор == разрешает приведение типов, он проверяет равенство значений. Оба значения равны 3, поэтому возвращается true.
      При использовании оператора === значение и тип должны быть одинаковыми. Но в нашем случае это не так: new Number() это не число, это объект. Оба возвращают false.`,
    },
    {
      title: "Каким будет результат?",
      code: `class Chameleon {
        static colorChange(newColor) {
          this.newColor = newColor;
          return this.newColor;
        }
      
        constructor({ newColor = "green" } = {}) {
          this.newColor = newColor;
        }
      }
      
      const freddie = new Chameleon({ newColor: "purple" });
      freddie.colorChange("orange");`,
      answers: ["orange", "purple", "green", "TypeError"],
      key: "green",
      spoiler: `Функция colorChange является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка TypeError.`,
    },
    {
      title: "Что будет в консоли?",
      code: `let greeting;
      greetign = {};
      console.log(greetign);`,
      answers: ["{}", "ReferenceError: greetign is not defined", "undefined"],
      key: "{}",
      spoiler: `В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо greeting написали greetign, интерпретатор JS на самом деле выполнил global.greetign = {} (или window.greetign = {} в браузере).
      Нужно использовать "use strict", чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение.`,
    },
    {
      title: "Что произойдет?",
      code: `function bark() {
        console.log("Woof!");
      }
      
      bark.animal = "dog";`,
      answers: [
        "Ничего, всё в порядке!",
        "SyntaxError. Нельзя добавлять свойства функциям таким способом.",
        "undefined",
        "ReferenceError",
      ],
      key: "Ничего, всё в порядке!",
      spoiler: `В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов).
      Функция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией.`,
    },

    // {
    //   title: "",
    //   code: ``,
    //   answers: ["", "", "", ""],
    //   key: "",
    //   spoiler: ``,
    // },
  ];
  const loader = (
    <div key="loader" className="loader">
      Loading ...
    </div>
  );

  return (
    <>
      <Header />
      <Container>
        <>
          <h1>Желаю удачи!</h1>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {JsTasks.map((item, index) => {
              return (
                <Col className="gutter-row" span={8}>
                  <Task index={index} questions={item} />
                </Col>
              );
            })}
          </Row>
        </>
      </Container>
    </>
  );
};
export default JsTasks;
