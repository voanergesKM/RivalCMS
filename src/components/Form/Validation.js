import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email field is required')
    .email('Invalid email address')
    .max(250)
    .matches(/^[a-zA-Z0-9@.]+$/, 'This field cannot contain white space and special character'),

  password: Yup.string()
    .required()
    .min(10)
    .max(30)
    .matches(
      /(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'Must contain 1 capital alphabet, 1 number and 1 special symbol'
    ),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email field is required')
    .email('Invalid email address')
    .max(250)
    .matches(/^[a-zA-Z0-9@.]+$/, 'This field cannot contain white space and special character'),

  password: Yup.string()
    .required()
    .min(10)
    .max(30)
    .matches(
      /(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'Must contain 1 capital alphabet, 1 number and 1 special symbol'
    ),

  name: Yup.string()
    .required()
    .min(1)
    .max(200)
    .matches(/^[A-Za-z]{1}[a-z]{1,200}( [A-Za-z]{1})?([a-z]{1,200})?$/, 'Required max 2 words'),
});
