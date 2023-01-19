import React from 'react';
import { MoreIcon } from '../../../assets/icons/SvgIcons';
import styles from './ActionsMoreBtn.module.css';

export const ActionsMoreBtn = ({ toggle }) => {
  return (
    <button
      onClick={() => toggle(true)}
      type="button"
      className={styles.button}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
      }}
    >
      <MoreIcon size={24} />
    </button>
  );
};
