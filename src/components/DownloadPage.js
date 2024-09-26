import React from "react";
import styles from '../css/DownloadPage.module.css';

const DownloadPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>ArchAIve</h1>
        <h2 className={styles.subtitle}>お問い合わせ</h2>
        <img src="./path/to/your/image.png" alt="Background" className={styles.image} />
        <p>HRBrainタレントマネジメントのお問い合わせページです。<br/>
          ご質問や費用のご相談など、お気軽にお問い合わせください。
        </p>
        <h3 className={styles.functionTitle}>ArchAIveの主な機能</h3>
        <ul>
          <li>AI類似図面検索</li>
          <li>図面向き差分検索</li>
          <li>過去図面検索データベース</li>
        </ul>
      </div>
      <div className={styles.rightSection}>
        <form>
          <label>会社: <input type="text" required /></label>
          <label>部署: 
            <select required>
              <option value="">選択してください</option>
              {/* Options */}
            </select>
          </label>
          <label>役職: 
            <select required>
              <option value="">選択してください</option>
              {/* Options */}
            </select>
          </label>
          <label>氏名: <input type="text" required /></label>
          <label>メールアドレス: <input type="email" required /></label>
          <label>電話番号: <input type="tel" required /></label>
          <label>お問い合わせ内容: 
            <select required>
              <option value="">選択してください</option>
              {/* Options */}
            </select>
          </label>
          <label>お問い合わせ詳細: <textarea required /></label>
          <label>
            <input type="checkbox" required /> プライバシーポリシーに同意する
          </label>
          <button type="submit">送信する</button>
        </form>
        <p className={styles.note}>※個人の方や、当社が競合他社と判断した場合にはお見積りをお断りする場合がございますのでご了承ください。</p>
      </div>
    </div>
  );
};

export default DownloadPage;
