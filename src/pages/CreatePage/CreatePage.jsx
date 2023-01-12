import React from 'react';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import styles from './CreatePage.module.css';

export const CreatePage = () => {
  return (
    <UserLayout>
      <div className={styles.page}>Create page</div>
    </UserLayout>
  );
};
