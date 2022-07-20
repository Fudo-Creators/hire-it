import React from "react";

import { Layout } from "antd";
import Sider from "./components/Sider/Sider";
import Header from "./components/Header/Header";
import JsTasks from "./pages/main/js/JsTask/JsTask";
import Footer from "./components/Footer/Footer";

import styles from "./scss/App.module.scss";

const App: React.FC = () => {
  return (
    <Layout className={styles.wrapp}>
      <Sider />
      <div className={styles.container}>
        <Header />
        <JsTasks />
        <Footer />
      </div>
    </Layout>
  );
};
export default App;
