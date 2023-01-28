import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 665px)',
  '(min-width: 666px) and (max-width: 767px)',
  '(min-width: 768px) and (max-width: 1023px)',
  '(min-width: 1024px)',
];

export const useMatchMedia = () => {
  const mediaQueryList = queries.map(query => matchMedia(query));

  const getValues = mediaQueryList.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handleChange = () => setValues(getValues);

    mediaQueryList.forEach(list => list.addEventListener('change', handleChange));

    return () => mediaQueryList.forEach(list => list.removeEventListener('change', handleChange));
  });

  return ['isMobile', 'isMobilePlus', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, idx) => ({ ...acc, [screen]: values[idx] }),
    {}
  );
};
