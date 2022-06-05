import React from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1>Добро пожаловать, наведя на картинку можно приступить к выбору.</h1>
      </Container>
    </div>
  );
}

export default App;
