import React from 'react';
import { SignInHeaderBtn } from '../Buttons/SignInHeaderBtn/SignInHeaderBtn';
import { Logo } from '../Logo/Logo';
import styles from './RegisterHeader.module.css';

export const RegisterHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <SignInHeaderBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
};
