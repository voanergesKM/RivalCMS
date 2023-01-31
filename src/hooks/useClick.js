import { useRef } from 'react';

export const useClick = () => {
  const ref = useRef();

  const handleClick = () => ref.current.click();
  return [ref, handleClick];
};
