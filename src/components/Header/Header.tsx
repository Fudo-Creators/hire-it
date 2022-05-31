import { Divider, Image, Menu } from "antd";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import styles from "../Header/Header.module.sass";
//@ts-ignore
import mainLogo from "../../resources/logo/HI-IT.png";
import menuStructure from "./menuStructure";
import "antd/dist/antd.css";
import { useState } from "react";

const Header = () => {
  let navigate = useNavigate();
  //co[current, setCurrent] = useState("mail");
  return (
    <>
      <header>
        <div className={styles.wrapperImages}>
          <div className={styles.wrapperImages}>
            <div className={styles.logo}>
              <Image height={75} width={75} preview={false} src={mainLogo} />
            </div>
            <div className={styles.logo}>
              <a href="https://github.com/Fudo-Creators">
                <Image
                  height={75}
                  width={75}
                  preview={false}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
            </div>
          </div>
          <div className={styles.info}>
            Вопросы и задачи к собеседованиям Frontend-Devs😏
          </div>
        </div>
        <Divider className={styles.superPuperDivider} />
        <div>
          <Menu
            onClick={(e) => navigate(e.key)}
            //selectedKeys={[current]}
            mode="horizontal"
            items={menuStructure}
          />
        </div>
      </header>
    </>
  );
};;;
export default Header;
