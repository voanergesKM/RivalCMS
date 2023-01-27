import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 666px)',
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 1199px)',
  '(min-width: 1200px)',
];

export const useMatchMedia = () => {
  const mediaQueryList = queries.map(query => matchMedia(query));

  const getValues = mediaQueryList.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handleChange = () => setValues(getValues);

    mediaQueryList.forEach(list => list.addEventListener('change', handleChange));

    return () => mediaQueryList.forEach(list => list.removeEventListener('change', handleChange));
  }, [getValues, mediaQueryList]);

  return ['isMobilePlus', 'isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, idx) => ({ ...acc, [screen]: values[idx] }),
    {}
  );
};
