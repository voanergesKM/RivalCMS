import React from 'react';

export const LogoIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      //   viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0467 28.9068L13.2374 10.0504L31.0734 16.1724L13.0467 28.9068Z"
        stroke="#EBF8FF"
        strokeWidth="2"
      />
      <path
        d="M10.7388 25.6398L28.5748 31.7618L28.7655 12.9054L10.7388 25.6398Z"
        stroke="#EBF8FF"
        strokeWidth="2"
      />
    </svg>
  );
};

export const LockIcon = ({ size }) => {
  return (
    <svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        stroke="#2A4365"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
        stroke="#2A4365"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MailIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="#2A4365"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="#2A4365"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
