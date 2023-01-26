import { useEffect } from 'react';
import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddFileIcon } from '../../assets/icons/SvgIcons';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import Pagination from '../../components/Pagination/Pagination';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { ascendingSort, descendingSort } from '../../utils/pagesSort';
import styles from './ViewPage.module.css';

export const ViewPage = () => {
  const pages = useSelector(state => state.sitePages);

  const initialState = { pages: [...pages], sortBy: '', direction: 'default' };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'default' });
  }, [pages]);

  function reducer({ pages, sortBy, direction }, { type }) {
    switch (type) {
      case 'pageName':
        if (sortBy !== 'pageName') {
          return ascendingSort(pages, 'pageName', 'pageName');
        } else if (sortBy === 'pageName' && direction === 'asc') {
          return descendingSort(pages, 'pageName', 'pageName');
        } else return initialState;

      case 'created':
        if (sortBy !== 'created') {
          return ascendingSort(pages, 'created', 'created');
        } else if (sortBy === 'created' && direction === 'asc') {
          return descendingSort(pages, 'created', 'created');
        } else return initialState;

      case 'published':
        if (sortBy !== 'published') {
          return ascendingSort(pages, 'published', 'published');
        } else if (sortBy === 'published' && direction === 'asc') {
          return descendingSort(pages, 'published', 'published');
        } else return initialState;

      case 'authorName':
        if (sortBy !== 'authorName') {
          return ascendingSort(pages, 'authorName', 'authorName');
        } else if (sortBy === 'authorName' && direction === 'asc') {
          return descendingSort(pages, 'authorName', 'authorName');
        } else return initialState;

      default:
        return initialState;
    }
  }

  const handleFilterClick = filterBy => {
    dispatch({ type: filterBy });
  };

  return (
    <UserLayout>
      <div className={styles.page}>
        <div className={styles.sortBar}>
          <FilterBar state={state} handleFilterClick={handleFilterClick} />

          <Link className={styles.addBtn} to="/create">
            <AddFileIcon size={20} />
            Add new
          </Link>
        </div>

        {state.pages && <Pagination pages={state.pages} view />}
      </div>
    </UserLayout>
  );
};
