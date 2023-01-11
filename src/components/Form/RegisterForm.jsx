import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import { LockIcon, MailIcon, PersonIcon } from '../../assets/icons/SvgIcons';
import { RegisterSchema } from './Validation';
import { Input } from './FormInput';
import { registerUser } from '../../redux/usersSlice';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(state => state.users);

  const handleSubmit = (values, actions) => {
    const findedUser = users.some(user => user.email.includes(values.email));

    if (findedUser) {
      alert('User already exists');
      return;
    }

    dispatch(registerUser(values));
    navigate('/login');
    actions.resetForm();
  };

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
          onSubmit={handleSubmit}
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
