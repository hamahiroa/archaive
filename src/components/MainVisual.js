import React from "react";
import Download from "./Download";
import styles from '../css/MainVisual.module.css';

const MainVisual = () => {
  return (
    <div className={styles.mainVisual}>
      <div className={styles.content}>
        <div className={styles.slide}>
          <div className={styles.smallTextBox}> クラウド図面検索システムで </div>
          <div className={styles.largeTextBox}> 現場に最も求められる図面管理を </div>
          <img src="/img/main.png" alt="大きい写真" className={styles.mediumPhoto} />
        </div>
        <div className={styles.downloadWrapper}>
          <Download />
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
