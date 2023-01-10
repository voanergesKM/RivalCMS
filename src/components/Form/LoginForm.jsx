import React from 'react';
import { useFormik } from 'formik';
import styles from './Form.module.css';
import { LockIcon, MailIcon } from '../../assets/icons/SvgIcons';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <p className={styles.title}>
        Rival<span>CMS</span>
      </p>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form__wrapper}>
            <label className={styles.form__label} htmlFor="email">
              <MailIcon size={24} />
              Email address
            </label>
            <input
              className={styles.form__input}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className={styles.form__wrapper} style={{ marginBottom: '2.6875rem' }}>
            <label className={styles.form__label} htmlFor="password">
              <LockIcon size={24} />
              Password
            </label>
            <input
              className={styles.form__input}
              id="password"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <div className={styles.form__actions}>
            <p>Forgot password?</p>
            <button type="submit">Sign in</button>
          </div>
        </form>

        <Link className={styles.registerBtn} to="/register">
          Don't have & account?
        </Link>
      </div>
    </div>
  );
};
