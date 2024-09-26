import React from "react";
import styles from '../css/FeaturesSection.module.css';
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
  return (
    <div className={styles.features}>
      <div className={styles.title}>ArchAIveの特徴</div>
      <div className={styles.cardBox}>
        <FeaturesCard 
          imgSrc="img/feature2.png" 
          title="図面内の形状分析により、リピートや類似品の検索を簡単に" 
          content="形状の一致度により、図面を順で表示可能企業名や商品名によるフィルタリングによって最速の図面検索を実現可能です。" 
        />
        <FeaturesCard 
          imgSrc="img/feature1.png" 
          title="差分検出機能で見逃しミスを最小化" 
          content="図面の差分検出によって、リピートの図面の差分を簡単に見える化。交差の変更など細かな違いも見逃しません。" 
        />
        <FeaturesCard 
          imgSrc="img/feature3.png" 
          title="図面管理データベースにより、現場最適な管理を" 
          content="必要な要素のみ絞ることによって、図面管理のコストを最小限に。図面登録の際の作業時間を削減します。" 
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
