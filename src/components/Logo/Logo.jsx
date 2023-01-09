import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../assets/icons/SvgIcons';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Link className={styles.logo__link} to="/">
      <LogoIcon className={styles.logo__icon} size={42} />
      <p className={styles.logo__text}>
        Rival
        <span>CMS</span>
      </p>
    </Link>
  );
};
