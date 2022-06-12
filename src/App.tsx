import React from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1>
          Добро пожаловать! Ресурс нацелен на подготовку к собеседованиям.
        </h1>
        <h2>Ресурс не собирает информацию и не сохраняет её.</h2>
        <h2>
          Для продолжения работы нажмите или наведитесь на нужный раздел сверху.
        </h2>
      </Container>
    </div>
  );
}

export default App;
