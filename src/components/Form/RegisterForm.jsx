import React from 'react';
import { Form, Formik } from 'formik';
import styles from './Form.module.css';
import { LockIcon, MailIcon, PersonIcon } from '../../assets/icons/SvgIcons';
import { RegisterSchema } from './Validation';
import { Input } from './FormInput';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  return (
    <>
      <p className={styles.title}>
        Rival<span>CMS</span>
      </p>
      <div className={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, actions) => {
            console.log('LoginForm : actions', actions);
            console.log('LoginForm : values', values);
            actions.resetForm();
          }}
        >
          <Form>
            <Input name="name" label="Full name" icon={PersonIcon} iconSize="24" type="text" />

            <Input name="email" label="Email address" icon={MailIcon} iconSize="24" type="email" />

            <Input name="password" label="Password" icon={LockIcon} iconSize="24" type="password" />

            <div className={styles.form__actions}>
              <button style={{ marginLeft: 'auto' }} type="submit">
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
