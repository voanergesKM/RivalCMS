import { AscendingIcon, DescendingIcon } from '../../assets/icons/SvgIcons';
import styles from './FilterBar.module.css';

export const FilterBar = ({ state, handleFilterClick }) => {
  return (
    <ul className={styles.filter__list}>
      <li className={styles.filter__list__item}>
        <button
          onClick={() => handleFilterClick('pageName')}
          type="button"
          className={styles.filter__list__btn}
        >
          Page title
        </button>
        {state.sortBy === 'pageName' && state.direction === 'asc' && <AscendingIcon size={20} />}
        {state.sortBy === 'pageName' && state.direction === 'desc' && <DescendingIcon size={20} />}
      </li>
      <li className={styles.filter__list__item}>
        <button
          onClick={() => handleFilterClick('created')}
          type="button"
          className={styles.filter__list__btn}
        >
          Created
        </button>
        {state.sortBy === 'created' && state.direction === 'asc' && <AscendingIcon size={20} />}
        {state.sortBy === 'created' && state.direction === 'desc' && <DescendingIcon size={20} />}
      </li>
      <li className={styles.filter__list__item}>
        <button
          onClick={() => handleFilterClick('published')}
          type="button"
          className={styles.filter__list__btn}
        >
          Status
        </button>
        {state.sortBy === 'published' && state.direction === 'asc' && <AscendingIcon size={20} />}
        {state.sortBy === 'published' && state.direction === 'desc' && <DescendingIcon size={20} />}
      </li>
      <li className={styles.filter__list__item}>
        <button
          onClick={() => handleFilterClick('authorName')}
          type="button"
          className={styles.filter__list__btn}
        >
          Author
        </button>
        {state.sortBy === 'authorName' && state.direction === 'asc' && <AscendingIcon size={20} />}
        {state.sortBy === 'authorName' && state.direction === 'desc' && (
          <DescendingIcon size={20} />
        )}
      </li>
    </ul>
  );
};
