import React, { useEffect, useState } from 'react';
import usePagination from '../../hooks/usePagination';
import { FileItem } from '../FileItem/FileItem';

import styles from './Pagination.module.css';

//add input for specific page

function Pagination({ pages }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(pages);
  }, [pages]);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: items.length,
  });
  console.log('Pagination : totalPages', totalPages);

  return (
    <>
      <ul style={{ flexGrow: 1 }}>
        {items.slice(firstContentIndex, lastContentIndex).map(file => (
          <FileItem key={file.id} file={file} />
        ))}
      </ul>

      {totalPages > 0 && (
        <div className={styles.paginationContainer}>
          <button
            onClick={prevPage}
            className={page === 1 ? 'hidden' : styles.paginationItem}
            // className={styles.paginationItem}
          >
            &larr;
          </button>
          <button
            onClick={() => setPage(1)}
            // className={`page ${page === 1 && 'disabled'}`}
            className={page === 1 ? styles.paginationItemActive : styles.paginationItem}
          >
            1
          </button>
          {gaps.before ? '...' : null}
          {/* @ts-ignore */}
          {gaps.paginationGroup.map(el => (
            <button
              onClick={() => setPage(el)}
              key={el}
              // className={`page ${page === el ? 'active' : ''}`}
              className={page === el ? styles.paginationItemActive : styles.paginationItem}
            >
              {el}
            </button>
          ))}
          {gaps.after ? '...' : null}
          <button
            onClick={() => setPage(totalPages)}
            className={page === totalPages ? styles.paginationItemActive : styles.paginationItem}
          >
            {totalPages}
          </button>
          <button
            onClick={nextPage}
            className={page === totalPages ? 'hidden' : styles.paginationItem}
          >
            &rarr;
          </button>
        </div>
      )}
    </>
  );
}

export default Pagination;
