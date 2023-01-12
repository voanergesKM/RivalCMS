import React from 'react';
import { Container } from '../Container';
import { UserHeader } from '../UserHeader/UserHeader';
import styles from './UserLayout.module.css';

import { manageList, featureList } from '../../utils/LinkItemsData';
import { NavLink, useLocation } from 'react-router-dom';

export const UserLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Container>
      <UserHeader />
      <main className={styles.page}>
        <nav className={styles.sidebar}>
          <p className={styles.sidebar__title}>Manage</p>
          <ul className={styles.sidebar__list}>
            {manageList.map(({ href, title, icon: Icon }, index) => (
              <li className={styles.list__item} key={index}>
                <Icon size={24} />
                <NavLink
                  className={() =>
                    href === location.pathname ? styles.list__linkActive : styles.list__link
                  }
                  to={href}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <p className={styles.sidebar__title}>Pro features</p>
          <ul className={styles.sidebar__list}>
            {featureList.map(({ href, title, icon: Icon }, index) => (
              <li className={styles.list__item} key={index}>
                <Icon size={24} />
                <NavLink className={styles.list__link} to={href}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </main>
    </Container>
  );
};
