import React from 'react';
import { MoreIcon } from '../../assets/icons/SvgIcons';
import { msToTime } from '../../utils/convertMs';
import styles from './ViewPageListItem.module.css';

export const ViewPageListItem = ({
  item: { id, pageName, created, published, authorName, isAdmin },
}) => {
  const currentDate = Date.now();

  return (
    <li className={styles.pagesList__item}>
      <p className={styles.pagesList__item__title}>{pageName}</p>
      <p className={styles.pagesList__item__created}>{msToTime(created, currentDate)}</p>
      <p
        className={
          published ? styles.pagesList__item__badge : styles.pagesList__item__badgeUunpublished
        }
      >
        {published ? 'Published' : 'Unpublished'}
      </p>
      <div className={styles.pagesList__item__authorWrapper}>
        <p className={styles.pagesList__item__author}>{authorName}</p>
        {isAdmin && <span className={styles.pagesList__item__bageAdmin}>Admin</span>}
      </div>
      <div
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          marginLeft: 'auto',
        }}
      >
        <MoreIcon size={24} />
      </div>
    </li>
  );
};
