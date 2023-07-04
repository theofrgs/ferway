import React from 'react';
import styles from '../styles/Header.module.css';
import { FaTrello } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={styles.header}>
      <button className={styles.title}>
        <h2 className={styles.title}>
          <FaTrello className={styles.icon} />
          Trello
        </h2>
      </button>
    </div>
  );
};



export default Header;
