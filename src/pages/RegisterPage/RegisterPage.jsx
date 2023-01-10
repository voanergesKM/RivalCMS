import React from 'react';
import styles from './RegisterPage.module.css';
import { RegisterForm } from '../../components/Form/RegisterForm';
import { RegisterHeader } from '../../components/RegisterHeader/RegisterHeader';

export const RegisterPage = () => {
  return (
    <>
      <RegisterHeader />
      <main className={styles.container} style={{ paddingTop: '10.5rem' }}>
        <RegisterForm />
      </main>
    </>
  );
};
