import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../css/Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    navigate('/'); // Navigate to the homepage
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
        {/* Use onClick to ensure scrolling to the top */}
        <a href="/" onClick={handleLogoClick}>
          <img src="./img/archaive.svg" alt="Logo" className={styles.logoImage} />
        </a>
      </h1>
      <nav>
        <ul>
          <li><Link to="/contact">お問い合わせ</Link></li>
          <li><Link to="/download">資料ダウンロード</Link></li> {/* Update Link */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
