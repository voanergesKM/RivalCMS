import React from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css';
import { LockIcon, MailIcon } from '../../assets/icons/SvgIcons';
import { Input } from './FormInput';
import { LoginSchema } from './Validation';
import { signInUser } from '../../redux/usersSlice';

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const navigate = useNavigate();
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const confirmedUser = users.find(
      ({ email, password }) => email.includes(values.email) && password.includes(values.password)
    );
    console.log('handleSubmit : confirmedUser', confirmedUser);

    if (!confirmedUser) {
      alert("User doesn't exists");
      return;
    }

    dispatch(signInUser(confirmedUser));
    navigate('/user');
    actions.resetForm();
  };

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
          onSubmit={handleSubmit}
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
