import { tabsData } from "./Data.header"; // Структура данных для табов.
import styles from "../Header/Header.module.scss";
import PageHeader from "../UI/PageHeader/PageHeader";
import Tabs from "antd/lib/tabs";
import { useEffect, useRef } from "react";
// import Tabs from "../UI/Tabs/Tabs";
// Компонент хедера.
const { TabPane } = Tabs;

const Header: React.FC = () => {
  
  const onChange = (key: string) => {
    const element = document.querySelector(".ant-tabs-ink-bar.ant-tabs-ink-bar-animated");
    if (Number(key) === 0) { 
      element?.classList.add("first")
      element?.classList.remove("third")
      element?.classList.remove("second")
    } else if (Number(key) === 1) {
      element?.classList.add("second")
      element?.classList.remove("first")
      element?.classList.remove("third")
    } else {
      element?.classList.add("third")
      element?.classList.remove("first")
      element?.classList.remove("second")
    }
  };

  return (
    <PageHeader
      title={
        <>
          <Tabs className={styles.tabs} onChange={onChange}>
            {tabsData.map((item: string | JSX.Element, i: number) => (
              <>
                <TabPane tab={item} key={i}></TabPane>
              </>
            ))}
          </Tabs>
        </>
      }
    ></PageHeader>
  );
};

export default Header;
