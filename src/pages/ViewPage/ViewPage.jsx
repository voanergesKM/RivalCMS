import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddFileIcon } from '../../assets/icons/SvgIcons';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { ViewPageListItem } from '../../components/ViewPageListItem/ViewPageListItem';
import styles from './ViewPage.module.css';

export const ViewPage = () => {
  const pages = useSelector(state => state.sitePages);
  const [sortedPages, setSortedPages] = useState(pages);

  const handleFilterClick = filterBy => {
    setSortedPages(
      structuredClone(pages).sort((a, b) => {
        if (filterBy === 'created' || filterBy === 'published') {
          return a[filterBy] > b[filterBy] ? -1 : 1;
        }
        return a[filterBy] > b[filterBy] ? 1 : -1;
      })
    );
  };

  return (
    <UserLayout>
      <div className={styles.page}>
        <div className={styles.sortBar}>
          <ul className={styles.sortBar__list}>
            <li className={styles.sortBar__item}>
              <button
                onClick={() => handleFilterClick('pageName')}
                type="button"
                className={styles.sortBar__btn}
              >
                Page title
              </button>
            </li>
            <li className={styles.sortBar__item}>
              <button
                onClick={() => handleFilterClick('created')}
                type="button"
                className={styles.sortBar__btn}
              >
                Created
              </button>
            </li>
            <li className={styles.sortBar__item}>
              <button
                onClick={() => handleFilterClick('published')}
                type="button"
                className={styles.sortBar__btn}
              >
                Status
              </button>
            </li>
            <li className={styles.sortBar__item}>
              <button
                onClick={() => handleFilterClick('authorName')}
                type="button"
                className={styles.sortBar__btn}
              >
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
          {sortedPages.map(item => (
            <ViewPageListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </UserLayout>
  );
};
