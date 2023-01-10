import React from 'react';
import { Link } from 'react-router-dom';
import style from './SignInHeaderBtn.module.css';

export const SignInHeaderBtn = ({ variant = 'button' }) => {
  return (
    <Link className={style[variant]} to="/login">
      Sign In
    </Link>
  );
};
