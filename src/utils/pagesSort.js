export const ascendingSort = (pages, sortBy, type) => {
  return {
    pages: pages.sort((prev, next) => (prev[type] > next[type] ? 1 : -1)),
    sortBy,
    direction: 'asc',
  };
};

export const descendingSort = (pages, sortBy, type) => {
  return {
    pages: pages.sort((prev, next) => (prev[type] > next[type] ? -1 : 1)),
    sortBy,
    direction: 'desc',
  };
};
