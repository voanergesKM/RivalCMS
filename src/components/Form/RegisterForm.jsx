import React from 'react';
import { useFormik } from 'formik';
import styles from './Form.module.css';
import { LockIcon, MailIcon, PersonIcon } from '../../assets/icons/SvgIcons';

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <p className={styles.title}>
        Rival<span>CMS</span>
      </p>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form__wrapper}>
            <label className={styles.form__label} htmlFor="name">
              <PersonIcon size={24} />
              Full name
            </label>
            <input
              className={styles.form__input}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

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
            <button style={{ marginLeft: 'auto' }} type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
