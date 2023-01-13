import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MoreIcon } from '../../assets/icons/SvgIcons';
import { changePageStatus } from '../../redux/addFilesSlice';
import { msToTime } from '../../utils/convertMs';
import styles from './ViewPageListItem.module.css';

export const ViewPageListItem = ({
  item: { id, pageName, created, published, authorName, isAdmin },
}) => {
  const [status, setStatus] = useState(published);

  const currentDate = Date.now();
  const dispatch = useDispatch();

  const handleChangeStatus = id => {
    setStatus(!status);
    dispatch(changePageStatus(id));
  };

  return (
    <li className={styles.pagesList__item}>
      <p className={styles.pagesList__item__title}>{pageName}</p>
      <p className={styles.pagesList__item__created}>{msToTime(created, currentDate)}</p>
      <p
        onClick={() => handleChangeStatus(id)}
        className={
          status ? styles.pagesList__item__badge : styles.pagesList__item__badgeUunpublished
        }
      >
        {status ? 'Published' : 'Unpublished'}
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
