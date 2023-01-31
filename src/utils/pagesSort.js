export const ascendingSort = (pages, sortBy) => {
  return {
    pages: pages.sort((prev, next) => (prev[sortBy] > next[sortBy] ? 1 : -1)),
    sortBy,
    direction: 'asc',
  };
};

export const descendingSort = (pages, sortBy) => {
  return {
    pages: pages.sort((prev, next) => (prev[sortBy] > next[sortBy] ? -1 : 1)),
    sortBy,
    direction: 'desc',
  };
};
