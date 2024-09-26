import React from "react";
import styles from '../css/Download.module.css';

const Download = () => {
  return (
    <div className={styles.download}>
      <h2 className={styles.title}>【無料】資料ダウンロードはこちら</h2>
      <form action="#" method="post">
        <div className={styles.formGroup}>
          <label htmlFor="company">会社名<span className={styles.required}>*必須</span></label>
          <input type="text" id="company" placeholder="例）株式会社STAR UP" required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="department">部署<span className={styles.required}>*必須</span></label>
          <select id="department" required>
            <option value="">選択してください</option>
            {/* 他の選択肢をここに追加 */}
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="position">役職<span className={styles.required}>*必須</span></label>
          <select id="position" required>
            <option value="">選択してください</option>
            {/* 他の選択肢をここに追加 */}
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label>名前<span className={styles.required}>*必須</span></label>
          <div className={styles.nameFields}>
            <input type="text" id="lastName" placeholder="姓" required />
            <input type="text" id="firstName" placeholder="名" required />
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">メールアドレス<span className={styles.required}>*必須</span></label>
          <input type="email" id="email" placeholder="例） sample@starup.jp" required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="phone">電話番号<span className={styles.required}>*必須</span></label>
          <input type="tel" id="phone" placeholder="例） 09012345678" required />
        </div>
        
        <div className={styles.formGroup}>
          <div className={styles.privacyPolicy}>
            <p>プライバシーポリシー<span className={styles.required}>*必須</span></p>
            <div className={styles.agreeCheckbox}>
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">同意する</label>
          </div>
          </div>
          <p className={styles.policyNote}>プライバシーポリシーに同意の上でお進みください。</p>
        </div>
        
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>ダウンロードする（無料）</button>
        </div>
      </form>
    </div>
  );
};

export default Download;