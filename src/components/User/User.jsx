import React from 'react';
import styles from './User.module.css';

export const User = ({ authorName, isAdmin, style }) => {
  return (
    <div style={style} className={styles.container}>
      <p className={styles.user__name}>{authorName && authorName}</p>
      {isAdmin && <span className={styles.user__badge}>Admin</span>}
    </div>
  );
};
