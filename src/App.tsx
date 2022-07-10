import React from "react";

import { Layout } from "antd";

import Sider from "./components/Sider/Sider";
import Header from "./components/Header/Header";

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Content>Content</Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default App;
