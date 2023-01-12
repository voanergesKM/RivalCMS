import { ErrorMessage, useField } from 'formik';
import { ValidationErrorMessage } from '../ValidationErrorMessage';
import styles from './Form.module.css';

export const Input = ({ name, label, icon: Icon, iconSize, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <div className={styles.form__wrapper}>
      <label className={styles.form__label} htmlFor={field.name}>
        <Icon size={iconSize} />
        {label}
      </label>
      <input
        id={field.name}
        name={field.name}
        className={`${meta.error && meta.touched ? styles.error : styles.form__input}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} component={ValidationErrorMessage} />
    </div>
  );
};
