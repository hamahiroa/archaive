import React from "react";
import styles from '../css/Function.module.css';

const FunctionCard = ({ imgSrc, title, content }) => {
  return (
    <div className={styles.functionCard}>
      <div className={styles.imgTitleContainer}>
        <div className={styles.imgBox}>
          {imgSrc && <img src={imgSrc} alt={title} />}
        </div>
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.cardContent}>
        {/* Split the content by '\n' and insert <br /> with span to avoid extra spacing */}
        {content.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < content.split('\n').length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FunctionCard;
