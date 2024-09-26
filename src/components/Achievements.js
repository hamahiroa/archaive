import React from "react";
import styles from '../css/Achievements.module.css';
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <div className={styles.title}>製造業を中心に幅広い実績</div>
      <div className={styles.content}>
        大手から町工場まで幅広い企業様にご導入いただいてます
      </div>
      <div className={styles.cardBox}>
        <AchievementCard 
          imgSrc="./img/achieve1.png" 
          content="一人ひとりの社員体験を継続的に向上させる取り組みとは"
          companyName="株式会社クロステック"
          tags={["メディア・エンターテイメント", "301~1000名"]}
        />
        <AchievementCard 
          imgSrc="./img/achieve2.png" 
          content="戦略人事の第一歩として、女性管理職の抜擢。東京インテリア家具の取り組みと変化とは"
          companyName="株式会社東京インテリア家具"
          tags={["製造・小売業", "1001名"]}
        />
        <AchievementCard 
          imgSrc="./img/achieve3.png" 
          content="会社の未来をつくる。ただのシステム化では終わらない、人事DXへの挑戦"
          companyName="高砂電気工業株式会社"
          tags={["製造業", "51~300名"]}
        />
      </div>
    </div>
  );
};

export default Achievements;
