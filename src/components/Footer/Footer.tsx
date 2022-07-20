import React, { FC } from "react";
import vk from "../../resources/logo/black_vk.svg";
import tg from "../../resources/logo/black_tg.svg";
import github from "../../resources/logo/black_github.svg";

import styles from "../Footer/Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerCopyright}>© HIRE-IT 2022</span>
        <div className={styles.footerLogos}>
          <a className={styles.footerLogo} href="/">
            <img src={github} alt="github" />
          </a>
          <a className={styles.footerLogo} href="/">
            <img src={tg} alt="telegram" />
          </a>
          <a className={styles.footerLogo} href="/">
            <img src={vk} alt="vk" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
