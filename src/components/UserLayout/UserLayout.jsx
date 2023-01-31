import React from 'react';
import { Container } from '../Container';
import { UserHeader } from '../UserHeader/UserHeader';
import styles from './UserLayout.module.css';

import { manageList, featureList } from '../../utils/LinkItemsData';
import { NavLink, useLocation } from 'react-router-dom';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useState } from 'react';
import { CloseMenuIcon, OpenMenuIcon } from '../../assets/icons/SvgIcons';

export const UserLayout = ({ children }) => {
  const location = useLocation();
  const { isMobile, isMobilePlus, isTablet } = useMatchMedia();
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      setisMenuOpen(false);
    }
  };

  return (
    <Container>
      <UserHeader />
      <div style={{ display: 'flex' }}>
        <div
          className={isMenuOpen ? styles.backdrop : styles.backdropClosed}
          onClick={handleBackdropClick}
        >
          <aside style={isMenuOpen ? null : { height: '100%' }}>
            <nav className={isMenuOpen ? styles.sidebar__open : styles.sidebar}>
              {isMobile || isMobilePlus || isTablet ? (
                <div className={styles.menuIcon} onClick={toggleMenu}>
                  {!isMenuOpen ? <OpenMenuIcon size={36} /> : <CloseMenuIcon size={36} />}
                </div>
              ) : null}
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
          </aside>
        </div>
        <main style={{ width: '100%' }}>{children}</main>
      </div>
    </Container>
  );
};
