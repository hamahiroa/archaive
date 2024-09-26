import React from "react";
import styles from '../css/FeaturesSection.module.css';

const FeaturesCard = ({ imgSrc, title, content }) => {
  return (
    <div className={styles.featuresCard}>
      <div className={styles.imgBox}>
        {imgSrc && <img src={imgSrc} alt={title} />}
      </div>
      <div className={styles.cardTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
