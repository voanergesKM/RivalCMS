import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePagination = ({ contentPerPage, count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(0);

  useEffect(() => {
    const page = searchParams.get('page');

    setPage(page && Number(page));
  }, [searchParams]);

  const [gaps, setGaps] = useState({
    before: false,
    paginationGroup: [],
    after: true,
  });

  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;
  const [pagesInBetween, setPagesInBetween] = useState([]);

  useEffect(() => {
    if (pageCount > 2) {
      const temp = new Array(pageCount - 2).fill(1).map((_, i) => i + 2);
      setPagesInBetween(temp);
    }
  }, [pageCount]);

  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup = [];
    let before = false;
    let after = false;
    if (page === 1) {
      paginationGroup = pagesInBetween.slice(0, 3);
    } else if (page === pageCount || page === pageCount - 1 || page === pageCount - 2) {
      paginationGroup = pagesInBetween.slice(-3, pageCount);
    } else if (page === 2) {
      paginationGroup = pagesInBetween.slice(currentLocation, currentLocation + 3);
    } else {
      paginationGroup = [page - 1, page, page + 1];
    }
    if (pageCount <= 5) {
      before = false;
      after = false;
    } else {
      before = false;
      after = false;
      if (paginationGroup[0] > 2) {
        before = true;
      }
      if (paginationGroup[2] < pageCount - 1) {
        after = true;
      }
    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);

  const changePage = direction => {
    if (direction) {
      if (page === pageCount) {
        return;
      }

      setSearchParams({ page: page + 1 });
    } else {
      if (page === 1) {
        return;
      }
      setSearchParams({ page: page - 1 });
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default usePagination;
