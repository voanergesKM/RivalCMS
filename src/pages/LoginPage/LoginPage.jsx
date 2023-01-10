import React from 'react';
import { LoginForm } from '../../components/Form/LoginForm';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  );
};
