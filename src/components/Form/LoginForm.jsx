import React from 'react';
import { Formik, Form } from 'formik';
import styles from './Form.module.css';
import { LockIcon, MailIcon } from '../../assets/icons/SvgIcons';
import { Link } from 'react-router-dom';
import { Input } from './FormInput';
import { LoginSchema } from './Validation';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  return (
    <div>
      <p className={styles.title}>
        Rival<span>CMS</span>
      </p>

      <div className={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, actions) => {
            console.log('LoginForm : actions', actions);
            console.log('LoginForm : values', values);
            actions.resetForm();
          }}
        >
          <Form>
            <Input name="email" label="Email address" icon={MailIcon} iconSize="24" type="email" />

            <Input name="password" label="Password" icon={LockIcon} iconSize="24" type="password" />

            <div className={styles.form__actions}>
              <p>Forgot password?</p>
              <button type="submit">Sign in</button>
            </div>
          </Form>
        </Formik>

        <Link className={styles.registerBtn} to="/register">
          Don't have & account?
        </Link>
      </div>
    </div>
  );
};
