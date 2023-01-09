import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../assets/icons/SvgIcons';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon className={styles.logo__icon} size={42} />
      <Link className={styles.logo__link} to="/">
        <p className={styles.logo__text}>
          Rival
          <span>CMS</span>
        </p>
      </Link>
    </div>
  );
};
