import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/ContactPage.module.css';

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={styles.contactPage}>
      {/* Left section */}
      <div className={styles.leftSection}>
        <h1 className={styles.title}>ArchAIve</h1>
        <h2 className={styles.subtitle}>お問い合わせ</h2>
        <img src="./img/contact.png" alt="Background" className={styles.image} />

        {/* Gray background section */}
        <div className={styles.infoSection}>
          <p className={styles.description}>
            HRBrainタレントマネジメントのお問い合わせページです。<br />
            ご質問や費用のご相談など、お気軽にお問い合わせください。
          </p>
          <h3 className={styles.functionTitle}>💡 ArchAIveの主な機能</h3>
          <ul className={styles.functionList}>
            <li>AI類似図面検索</li>
            <li>図面向き差分検索</li>
            <li>過去図面検索データベース</li>
          </ul>
        </div>
        <p className={styles.note}>
          ※個人の方や、当社が競合他社と判断した場合にはお見積りをお断りする場合がございますのでご了承ください。
        </p>
      </div>

      {/* Right section */}
      <div className={styles.rightSection}>
        <h2 className={styles.formTitle}>お問い合わせはこちらから</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>会社: <span className={styles.required}>*必須</span>
              <input type="text" required />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>部署: <span className={styles.required}>*必須</span>
              <select required>
                <option value="">選択してください</option>
                {/* Add other options here */}
              </select>
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>役職: <span className={styles.required}>*必須</span>
              <select required>
                <option value="">選択してください</option>
                {/* Add other options here */}
              </select>
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>氏名: <span className={styles.required}>*必須</span>
              <input type="text" required />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>メールアドレス: <span className={styles.required}>*必須</span>
              <input type="email" required />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>電話番号: <span className={styles.required}>*必須</span>
              <input type="tel" required />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>お問い合わせ内容: <span className={styles.required}>*必須</span>
              <select required>
                <option value="">選択してください</option>
                {/* Add other options here */}
              </select>
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>お問い合わせ詳細: <span className={styles.required}>*必須</span>
              <textarea required></textarea>
            </label>
          </div>
          
          {/* Privacy Policy section */}
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



          <button type="submit" className={styles.submitButton}>送信する</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
