import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddFileIcon, MoreIcon } from '../../assets/icons/SvgIcons';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { msToTime } from '../../utils/convertMs';
import styles from './ViewPage.module.css';

export const ViewPage = () => {
  const pages = useSelector(state => state.sitePages);

  const currentDate = Date.now();

  return (
    <UserLayout>
      <div className={styles.page}>
        <div className={styles.sortBar}>
          <ul className={styles.sortBar__list}>
            <li className={styles.sortBar__item}>
              <button type="button" className={styles.sortBar__btn}>
                Page title
              </button>
            </li>
            <li className={styles.sortBar__item}>
              <button type="button" className={styles.sortBar__btn}>
                Created
              </button>
            </li>
            <li className={styles.sortBar__item}>
              <button type="button" className={styles.sortBar__btn}>
                Status
              </button>
            </li>
            <li className={styles.sortBar__item}>
              <button type="button" className={styles.sortBar__btn}>
                Author
              </button>
            </li>
          </ul>
          <Link className={styles.addBtn} to="/create">
            <AddFileIcon size={24} />
            Add new
          </Link>
        </div>
        <ul className={styles.pagesList}>
          {pages.map(({ id, pageName, created, published, authorName, isAdmin }) => (
            <li key={id} className={styles.pagesList__item}>
              <p className={styles.pagesList__item__title}>{pageName}</p>
              <p className={styles.pagesList__item__created}>{msToTime(created, currentDate)}</p>
              <p
                className={
                  published
                    ? styles.pagesList__item__badge
                    : styles.pagesList__item__badgeUunpublished
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
          ))}
        </ul>
      </div>
    </UserLayout>
  );
};
