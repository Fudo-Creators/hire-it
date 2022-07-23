import Container from "../../../components/Container/Container";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Question from "../../../components/Question/Question";
import Sider from "../../../components/Sider/Sider";
import Layout from "../../../components/UI/Layout/Layout";

import styles from "../../../scss/App.module.scss";

const JsQuestion: React.FC = () => {
  return (
    <>
      <Layout className={styles.wrapp}>
        <Sider />
        <div className={styles.container}>
          <Header />
          <Container content={<Question/>}/>
          <Footer />
        </div>
      </Layout>
    </>
  );
};
export default JsQuestion;
