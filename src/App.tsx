import React from "react";

import { Layout } from "antd";
import Sider from "./components/Sider/Sider";
import Header from "./components/Header/Header";
import JsTasks from "./pages/main/js/JsTask/JsTask";

import styles from "./scss/App.module.scss";

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className={styles.wrapp}>
      <Sider />
      <div className={styles.container}>
        <Header />
        <JsTasks />
      </div>
      {/* <Footer style={{ textAlign: "center" }}>Footer</Footer> */}
    </Layout>
  );
};
export default App;
