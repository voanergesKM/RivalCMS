import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddFileIcon } from '../../assets/icons/SvgIcons';
import Pagination from '../../components/Pagination/Pagination';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { onSortPages } from '../../redux/addPagesSlice';
import styles from './ViewPage.module.css';

export const ViewPage = () => {
  const pages = useSelector(state => state.sitePages);
  const dispatch = useDispatch();

  const handleFilterClick = filterBy => {
    dispatch(onSortPages(filterBy));
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

        {pages && <Pagination pages={pages} view />}
      </div>
    </UserLayout>
  );
};
