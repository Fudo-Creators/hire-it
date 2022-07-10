import Container from "../../../../components/Container/Container";
import Header from "../../../../components/Header/Header";
import { Image } from "antd";
const JsRecomendations = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>
          <b>Документация:</b>
          <br />
          <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
            MDN Web Docs
          </a>
          <br />
          <a href="https://javascript.ru/manual">javascript</a>
          <br />
          <b>Задачки:</b>
          <br />
          <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
            CodeWars
          </a>
          <br />
          <a href="https://www.codewars.com/kata/search/javascript?q=&beta=false">
            LeetCode
          </a>
        </h1>
        <Image
          width={500}
          alt="красивая картинка"
          src="https://pbs.twimg.com/media/FLjNCfaXwAIDCZR?format=jpg&name=large"
        />
      </Container>
    </>
  );
};
export default JsRecomendations;
