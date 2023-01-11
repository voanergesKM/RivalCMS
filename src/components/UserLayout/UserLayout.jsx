import React from 'react';
import { Container } from '../Container';
import { UserHeader } from '../UserHeader/UserHeader';
import styles from './UserLayout.module.css';

export const UserLayout = ({ children }) => {
  return (
    <Container>
      <UserHeader />
      <main className={styles.page}>
        <nav className={styles.sidebar}></nav>
        {children}
      </main>
    </Container>
  );
};
