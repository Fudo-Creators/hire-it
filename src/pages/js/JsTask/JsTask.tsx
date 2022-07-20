import Container from "../../../components/Container/Container";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Sider from "../../../components/Sider/Sider";
import Task from "../../../components/Task/Task";
import Layout from "../../../components/UI/Layout/Layout";

import styles from "../../../scss/App.module.scss";

const JsTasks: React.FC = () => {
  return (
    <Layout className={styles.wrapp}>
      <Sider />
      <div className={styles.container}>
        <Header />
        <Container content={<Task />} />
        <Footer />
      </div>
    </Layout>
  );
};
export default JsTasks;
