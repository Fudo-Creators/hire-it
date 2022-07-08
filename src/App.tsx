import React from "react";

import { Layout } from "antd";

import Sider from "./components/Slider/Sider";

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default App;
