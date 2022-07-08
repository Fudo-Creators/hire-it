import Container from "../../components/Container/Container";
import { useLocation } from "react-router-dom";
import { Image } from "antd";
const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <h1>И что это мы тут делаем? </h1>
        <h2>
          А у нас тут ошибка или 404 страничка!
          <br />
          {`hire-it${location.pathname}.ru`}
        </h2>
        <Image
          alt="Тут должна быть гифка, просто не загрузилась :("
          preview={false}
          width={340}
          src="https://tenor.com/view/peace-out-im-out-bye-gif-14304356.gif"
        />
      </Container>
    </>
  );
};
export default NotFound;
