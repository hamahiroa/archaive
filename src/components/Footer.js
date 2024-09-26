import React from "react";
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
            <img src="./img/archaive2.svg" alt="ARCHAIVE" className={styles.logo} />
          </div>
          <address>
            株式会社STAR UP<br />
            〒602-6081<br />
            京都府京都市上京区甲斐守町97西陣産業創造會館109
          </address>
        </div>
        <div className={styles.rightSection}>
          <a href="mailto:archaive@starup01.jp" className={styles.emailButton}>
            <span className={styles.emailIcon}>✉</span> archaive@starup01.jp
          </a>
          <p className={styles.emailNote}>（土日・祝日は返信が遅れる場合がございます。）</p>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © STAR UP, Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;