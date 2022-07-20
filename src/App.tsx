import React from "react";

import { Layout } from "antd";
import Sider from "./components/Sider/Sider";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styles from "./scss/App.module.scss";
import Container from "./components/Container/Container";

const App: React.FC = () => {
  return (
    <Layout className={styles.wrapp}>
      <Sider />
      <div className={styles.container}>
        <Header />
        <Container content={"Добавить Home page"} />
        <Footer />
      </div>
    </Layout>
  );
};
export default App;
