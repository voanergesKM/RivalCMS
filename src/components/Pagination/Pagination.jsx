import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePagination from '../../hooks/usePagination';
import { FileItem } from '../FileItem/FileItem';
import { ViewPageListItem } from '../ViewPageListItem/ViewPageListItem';

import styles from './Pagination.module.css';

function Pagination({ pages, view = false, files = false }) {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  useEffect(() => {
    const page = searchParams?.get('page');

    setSearchParams({ page: '1' } && { page: page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentPage = Number(searchParams.get('page'));
    const desiredPages = Math.ceil(pages.length / 5);

    if (desiredPages < currentPage) {
      setSearchParams({ page: desiredPages });
    }

    if (currentPage === 0 && pages.length) {
      setSearchParams({ page: '1' });
    }
  }, [pages, searchParams, setSearchParams]);

  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, gaps, totalPages } =
    usePagination({
      contentPerPage: 5,
      count: pages.length,
    });

  return (
    <>
      {files && (
        <ul className={styles.fileList}>
          {pages &&
            pages
              .slice(firstContentIndex, lastContentIndex)
              .map(file => <FileItem key={file.id} file={file} />)}
        </ul>
      )}

      {view && (
        <ul className={styles.pagesList}>
          {pages &&
            pages
              .slice(firstContentIndex, lastContentIndex)
              .map(item => <ViewPageListItem key={item.id} item={item} />)}
        </ul>
      )}

      {pages.length > 5 && (
        <div className={styles.paginationContainer}>
          <button onClick={prevPage} className={page === 1 ? 'hidden' : styles.paginationItem}>
            &larr;
          </button>
          <button
            onClick={() => {
              setSearchParams({ page: 1 });
            }}
            className={page === 1 ? styles.paginationItemActive : styles.paginationItem}
          >
            1
          </button>
          {gaps.before ? '...' : null}
          {gaps.paginationGroup.map(el => (
            <button
              onClick={() => {
                setSearchParams({ page: el });
              }}
              key={el}
              className={page === el ? styles.paginationItemActive : styles.paginationItem}
            >
              {el}
            </button>
          ))}
          {gaps.after ? '...' : null}
          <button
            onClick={() => {
              setSearchParams({ page: totalPages });
            }}
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
