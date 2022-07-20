import { useState } from "react";

import { tabsData } from "./Data.header"; 
import Tabs from "antd/lib/tabs";
import PageHeader from "../UI/PageHeader/PageHeader";

import clsx from "clsx";
import styles from "../Header/Header.module.scss";

const { TabPane } = Tabs;

const Header: React.FC = () => {
  const [value, setValue] = useState("0");
  const onChange = (key: string) => {
    setValue(key);
  };

  return (
    <PageHeader
      title={
        <>
          <Tabs
            className={clsx(styles.tabs, {
              first: value === "0",
              second: value === "1",
              third: value === "2",
            })}
            onChange={onChange}
          >
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
