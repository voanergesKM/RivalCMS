import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { renameFile } from '../../redux/filesSlice';
import { msToTime } from '../../utils/convertMs';
import { ActionsMoreBtn } from '../Buttons/ActionsMoreBtn/ActionsMoreBtn';
import { DropMenu } from '../DropMenu/DropMenu';
import { fileNameSchema } from '../Form/Validation';
import { ValidationErrorMessage } from '../ValidationErrorMessage';
import styles from './FileItem.module.css';
import ImageIcon from '../../assets/icons/ImageIcon.svg';
import MusicIcon from '../../assets/icons/MusicIcon.svg';
import DocumentIcon from '../../assets/icons/DocumentIcon.svg';
import VideoIcon from '../../assets/icons/VideoIcon.svg';

export const FileItem = ({ file: { id, name: fileName, type, uploaded } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [disableInput, setDisableInput] = useState(true);

  const dispatch = useDispatch();

  const currentDate = Date.now();

  const fileType = type.slice(0, type.indexOf('/'));
  let FileIcon = null;
  switch (fileType) {
    case 'image':
      FileIcon = ImageIcon;
      break;

    case 'audio':
      FileIcon = MusicIcon;
      break;

    case 'video':
      FileIcon = VideoIcon;
      break;

    default:
      FileIcon = DocumentIcon;
      break;
  }

  const formik = useFormik({
    initialValues: {
      fileName,
    },

    validationSchema: fileNameSchema,

    onSubmit: values => {
      setDisableInput(true);
      dispatch(renameFile({ id, values }));
    },
  });

  return (
    <li className={styles.file}>
      <img src={FileIcon} alt="" width="50px" />
      <form onSubmit={formik.handleSubmit}>
        <input
          onBlur={formik.handleSubmit}
          disabled={disableInput}
          className={styles.file__name}
          id="fileName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fileName.trim()}
        />
        {formik.errors.fileName && (
          <ValidationErrorMessage>{formik.errors.fileName}</ValidationErrorMessage>
        )}
      </form>

      <p className={styles.file__uploaded}>{msToTime(uploaded, currentDate, uploaded)}</p>

      <div style={{ position: 'relative' }}>
        <ActionsMoreBtn toggle={setIsMenuOpen} />
        {isMenuOpen && (
          <DropMenu
            toggleMenu={setIsMenuOpen}
            pageId={id}
            toggleInput={setDisableInput}
            action={'files'}
          />
        )}
      </div>
    </li>
  );
};
