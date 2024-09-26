import React from "react";
import styles from "../css/ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.leftContent}>
        <div className={styles.textBlock}>
          <div className={styles.logoContainer}>
            <img src="./img/archaive1.svg" alt="ARCHAIVE" className={styles.logo} />
          </div>
          <h2 className={styles.text2}>お問い合わせ</h2>
          <p className={styles.text3}>
            様々な製造業で活用されている<br/>
            ArchAIveが丸ごとわかる資料はこちら
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>
            サービス資料はこちら
            <span className={styles.buttonArrow}>&gt;</span>
          </button>
          <button className={styles.button2}>
            お問い合わせはこちら
            <span className={styles.buttonArrow}>&gt;</span>
          </button>
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src="/img/contact-screenshots.png" alt="ArchAIve Screenshots" />
      </div>
    </div>
  );
};

export default ContactSection;