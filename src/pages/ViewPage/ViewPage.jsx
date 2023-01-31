import { useState } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { AddFileIcon, SortsIcon } from '../../assets/icons/SvgIcons';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import Pagination from '../../components/Pagination/Pagination';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { ascendingSort, descendingSort } from '../../utils/pagesSort';
import styles from './ViewPage.module.css';

export const ViewPage = () => {
  const pages = useSelector(state => state.sitePages);

  const initialState = { pages: [...pages], sortBy: '', direction: 'default' };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchParams, setSearchParams] = useSearchParams();

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const { isMobile, isMobilePlus } = useMatchMedia();

  useEffect(() => {
    dispatch({ type: 'default' });
  }, [pages]);

  useEffect(() => {
    if (!searchParams.get('page')) setSearchParams({ page: '1' });
  });

  function reducer({ pages, sortBy, direction }, { type }) {
    switch (type) {
      case 'pageName':
        if (sortBy !== 'pageName') {
          return ascendingSort(pages, 'pageName');
        } else if (sortBy === 'pageName' && direction === 'asc') {
          return descendingSort(pages, 'pageName');
        } else return initialState;

      case 'created':
        if (sortBy !== 'created') {
          return ascendingSort(pages, 'created');
        } else if (sortBy === 'created' && direction === 'asc') {
          return descendingSort(pages, 'created');
        } else return initialState;

      case 'published':
        if (sortBy !== 'published') {
          return ascendingSort(pages, 'published');
        } else if (sortBy === 'published' && direction === 'asc') {
          return descendingSort(pages, 'published');
        } else return initialState;

      case 'authorName':
        if (sortBy !== 'authorName') {
          return ascendingSort(pages, 'authorName');
        } else if (sortBy === 'authorName' && direction === 'asc') {
          return descendingSort(pages, 'authorName');
        } else return initialState;

      default:
        return initialState;
    }
  }

  const handleFilterClick = filterBy => {
    dispatch({ type: filterBy });
  };

  const toggleFilterMenu = () => setIsFilterMenuOpen(!isFilterMenuOpen);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      setIsFilterMenuOpen(false);
    }
  };

  return (
    <UserLayout>
      <div
        style={isFilterMenuOpen ? { width: '100%', height: '100vh' } : null}
        className={styles.page}
      >
        <div
          className={isFilterMenuOpen ? styles.backdrop : styles.backdropClosed}
          onClick={handleBackdropClick}
        >
          <div className={isFilterMenuOpen ? styles.sortBarOpened : styles.sortBar}>
            {isMobile || isMobilePlus ? (
              <div className={styles.sortBar__icon} onClick={toggleFilterMenu}>
                {!isFilterMenuOpen && <SortsIcon size={36} />}
              </div>
            ) : null}

            <FilterBar state={state} handleFilterClick={handleFilterClick} />

            <Link className={styles.addBtn} to="/create">
              <AddFileIcon size={20} />
              Add new
            </Link>
          </div>
        </div>

        {pages.length === 0 && <h1 className="emptyTable">No files added yet!</h1>}

        {state.pages && <Pagination pages={state.pages} view />}
      </div>
    </UserLayout>
  );
};
