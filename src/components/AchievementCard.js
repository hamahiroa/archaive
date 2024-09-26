import React from "react";
import styles from '../css/Achievements.module.css';

const AchievementCard = ({ imgSrc,content, companyName, tags }) => {
  return (
    <div className={styles.achievementCard}>
      <div className={styles.imgBox}>
        {imgSrc && <img src={imgSrc} alt={content} />}
      </div>
      <div className={styles.cardContent}>
        <p>{content}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <div key={tag} className={styles.tag}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
