import { useCallback, useState } from "react";

import { Layout, MenuProps } from "antd";
import Menu from "../UI/Menu/Menu";
import Image from "../UI/Image/Image";

import Github from "../../resources/logo/github.svg";
import Vk from "../../resources/logo/vk.svg";
import Tg from "../../resources/logo/tg.svg";

import styles from "../../App.module.sass";

import { items, mainKeysMenu } from "./Data.sider";

// Компонент бокового меню, благодаря ключам 1 порядка будет происходит редирект внутри приложения.

const Sider = () => {
  const { Sider } = Layout;

  const [openKeys, setOpenKeys] = useState(["javascript"]);

  const onOpenChange: MenuProps["onOpenChange"] = useCallback(
    (keys: any) => {
      console.log("is callback", openKeys);

      const latestOpenKey = keys.find(
        (key: string) => openKeys.indexOf(key) === -1
      );
      if (mainKeysMenu.indexOf(latestOpenKey!) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    },
    [openKeys]
  );

  return (
    <Sider className={styles.sider}>
      <header className={styles.header}>
        <h1 className={styles.font}>HIRE-IT</h1>
        <a href="https://github.com/Fudo-Creators">
          <Image
            onClick={() => console.log("hi")}
            preview={false}
            width={35}
            height={30}
            src={Github}
          />
        </a>
        <Image preview={false} width={40} height={30} src={Tg} />
        <Image preview={false} width={40} height={30} src={Vk} />
      </header>
      <div className={styles.wrapper}>
        <Menu
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={(e) => console.log(e.key)}
          className={styles.sider}
          theme="dark"
          mode="inline"
          items={items}
        />
      </div>
    </Sider>
  );
};

export default Sider;
