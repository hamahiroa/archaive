import React from "react";
import styles from '../css/Function.module.css';
import FunctionCard from "./FunctionCard";

const Function = () => {
  return (
    <div className={styles.function}>
    <div className={styles.title}>主な機能</div>
    <div className={styles.content}>
      ArchAIveの主な機能になります。<br/>
      お問い合わせいただきますと、貴社に合わせた最適なプランをおすすめできます。
    </div>
    <div className={styles.cardBox}>
      <FunctionCard 
        imgSrc="./img/function3.svg" 
        title="類似図面検索" 
        content={"形状の一致度により、図面を順で表示可能\n企業名や商品名によるフィルタリングによって最速の図面検索を実現可能です。" }
      />
      <FunctionCard 
        imgSrc="./img/function4.svg" 
        title="差分検出" 
        content="図面の差分検出によって、リピートの図面の差分を簡単に見える化。交差の変更など細かな違いも見逃しません。" 
      />
      <FunctionCard 
        imgSrc="./img/function1.svg" 
        title="図面管理データベース" 
        content="必要な要素のみ絞ることによって、図面管理のコストを最小限に。図面登録の際の作業時間を削減します。" 
      />
      <FunctionCard 
        imgSrc="./img/function2.svg" 
        title="データの" 
        content="組織の作成" 
      />
    </div>
    </div>
  );
};

export default Function;
