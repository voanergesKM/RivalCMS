import React from 'react';
import { Logo } from '../Logo/Logo';
import styles from './UserHeader.module.css';
import userAvatar from '../../assets/images/userAvatar.jpg';

export const UserHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo />
      </nav>
      <div className={styles.userInfo}>
        <p className={styles.userInfo__badge}>Pro plan</p>
        <img className={styles.userInfo__avatar} src={userAvatar} alt="user avatar" />
      </div>
    </header>
  );
};
