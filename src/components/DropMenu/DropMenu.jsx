import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { EditIcon, ThemesIcon, TrashIcon } from '../../assets/icons/SvgIcons';
import { changePageStatus, onDeletePage } from '../../redux/addFilesSlice';
import styles from './DropMenu.module.css';

export const DropMenu = ({ toggleMenu, pageId, toggleInput }) => {
  const rootEl = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });

  useEffect(() => {
    const onClick = e => rootEl.current?.contains(e.target) || toggleMenu(false);
    setTimeout(() => {
      window.addEventListener('click', onClick);
    }, 0);
    return () =>
      setTimeout(() => {
        window.removeEventListener('click', onClick);
      }, 0);
  }, [toggleMenu]);

  const handleEscPress = evt => {
    if (evt.code === 'Escape') {
      toggleMenu(false);
    }
  };

  const changeStatus = pageId => {
    dispatch(changePageStatus(pageId));
    toggleMenu(false);
  };

  const deletePage = pageId => dispatch(onDeletePage(pageId));

  return (
    <div ref={rootEl} className={styles.dropMenu}>
      <p className={styles.dropMenu__title}>Manage</p>
      <ul className={styles.dropMenu__actionsList}>
        <li className={styles.dropMenu__actionsItem}>
          <button
            onClick={() => {
              toggleInput(false);
            }}
            type="button"
            className={styles.dropMenu__actionsButton}
          >
            <EditIcon size={24} />
            Edit file name
          </button>
        </li>
        <li className={styles.dropMenu__actionsItem}>
          <button
            onClick={() => changeStatus(pageId)}
            type="button"
            className={styles.dropMenu__actionsButton}
          >
            <ThemesIcon size={24} />
            Change status
          </button>
        </li>
        <li className={styles.dropMenu__actionsItem}>
          <button
            onClick={() => deletePage(pageId)}
            type="button"
            className={styles.dropMenu__actionsButton}
          >
            <TrashIcon size={24} />
            Delete page
          </button>
        </li>
      </ul>
    </div>
  );
};
