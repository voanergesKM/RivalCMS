import React from 'react';

export const ValidationErrorMessage = ({ children }) => {
  return <div style={{ color: 'red', marginTop: '.5rem' }}>{children}</div>;
};
