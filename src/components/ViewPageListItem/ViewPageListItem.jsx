import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MoreIcon } from '../../assets/icons/SvgIcons';
import { changePageStatus, onRenamePage } from '../../redux/addFilesSlice';
import { msToTime } from '../../utils/convertMs';
import { DropMenu } from '../DropMenu/DropMenu';
import { renameSchema } from '../Form/Validation';
import { ValidationErrorMessage } from '../ValidationErrorMessage';
import styles from './ViewPageListItem.module.css';

export const ViewPageListItem = ({
  item: { id, pageName, created, published, authorName, isAdmin },
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [disableInput, setDisableInput] = useState(true);

  const currentDate = Date.now();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      pageName,
    },

    validationSchema: renameSchema,

    onSubmit: values => {
      setDisableInput(true);
      dispatch(onRenamePage({ id, ...values }));
    },
  });

  const handleChangeStatus = id => {
    dispatch(changePageStatus(id));
  };

  return (
    <li className={styles.pagesList__item}>
      <form onSubmit={formik.handleSubmit}>
        <input
          onBlur={formik.handleSubmit}
          disabled={disableInput}
          className={styles.pagesList__item__title}
          id="pageName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pageName}
        />
        {formik.touched.pageName && formik.errors.pageName && (
          <ValidationErrorMessage>{formik.errors.pageName}</ValidationErrorMessage>
        )}
      </form>
      <p className={styles.pagesList__item__created}>{msToTime(created, currentDate)}</p>
      <p
        onClick={() => handleChangeStatus(id)}
        className={
          published ? styles.pagesList__item__badge : styles.pagesList__item__badgeUunpublished
        }
      >
        {published ? 'Published' : 'Unpublished'}
      </p>
      <div className={styles.pagesList__item__authorWrapper}>
        <p className={styles.pagesList__item__author}>{authorName}</p>
        {isAdmin && <span className={styles.pagesList__item__bageAdmin}>Admin</span>}
      </div>
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsMenuOpen(true)}
          type="button"
          className={styles.menuBtn}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
          }}
        >
          <MoreIcon size={24} />
        </button>
        {isMenuOpen && (
          <DropMenu
            toggleMenu={setIsMenuOpen}
            pageId={id}
            handleChangeStatus={handleChangeStatus}
            toggleInput={setDisableInput}
          />
        )}
      </div>
    </li>
  );
};
