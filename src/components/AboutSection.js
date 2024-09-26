// src/components/AboutSection.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useLocation
import styles from '../css/AboutSection.module.css';

const AboutSection = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleNavigation = (path) => {
    // First, scroll to the top
    window.scrollTo(0, 0);
    // Then navigate to the new page
    navigate(path);
  };

  return (
    <div className={styles.about}>
      <div className={styles.aboutMain}>
        <div className={styles.imgbox}>
          <img src="/img/about.png" alt="テキストテキストテキスト" />
        </div>
        <div className={styles.Textbox}>
          <div className={styles.title}>AIアシストで生まれた時間、あなたは何に使いますか？</div>
          <div className={styles.subtitle}>図面検索の時間の削減で、本当にやりたいことへ</div>
          <div className={styles.content}>
            これまでに蓄積された膨大な量の図面からAIで類似図面を検索。類似図面検索・差分検出により、見積り業務にかかる時間や変更点の見逃しを大幅に削減。<br/>
            できた余裕で図面の新規技術の試作や後継者への技術の継承を。
          </div>
        </div>
      </div>
      <div className={styles.aboutButton}>
        <button onClick={() => handleNavigation('/download')}>資料ダウンロード</button>
        <button onClick={() => handleNavigation('/contact')}>デモ申し込み</button>
      </div>
    </div>
  );
};

export default AboutSection;