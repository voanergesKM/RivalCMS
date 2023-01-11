import React from 'react';
import { Logo } from '../Logo/Logo';
import styles from './UserHeader.module.css';

export const UserHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
      </nav>
      <div className={styles.userInfo}>
        <span className={styles.userInfo__badge}>Pro plan</span>
        <img
          className={styles.userInfo__avatar}
          src="../../assets/images/userAvatar.jpg"
          alt="user avatar"
        />
      </div>
    </header>
  );
};
