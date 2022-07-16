import { tabsData } from "./Data.header"; // Структура данных для табов.

import styles from "../../App.module.scss";
import PageHeader from "../UI/PageHeader/PageHeader";

import Tabs from "antd/lib/tabs";
//import Tabs from "../UI/Tabs/Tabs";

// Компонент хедера.


const { TabPane } = Tabs;

const Header: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <PageHeader
      className={`${styles.header} ${styles.font}`}
      title={
        <>
          <Tabs onChange={onChange}>
            {tabsData.map((item: string | JSX.Element, i: number) => (
              <TabPane tab={item} key={i}></TabPane>
            ))}
          </Tabs>
        </>
      }
    ></PageHeader>
  );
};

export default Header;
