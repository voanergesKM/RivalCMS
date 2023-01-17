import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useState } from 'react';
import styles from './CreatePage.module.css';
import { EditIcon, EyeIcon, PlusIcon } from '../../assets/icons/SvgIcons';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { User } from '../../components/User/User';
import { addSitePage } from '../../redux/addFilesSlice';
import { useFormik } from 'formik';
import { pageNameSchema } from '../../components/Form/Validation';
import { ValidationErrorMessage } from '../../components/ValidationErrorMessage';

export const CreatePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isPageNameInputDisabled, setIsPageNameInputDisabled] = useState(true);

  const user = useSelector(state => state.loggedUser);

  const dispatch = useDispatch();

  const fileInput = useRef();

  const handleSubmit = (values, actions) => {
    if (!selectedFile) {
      return alert('Please, select an html file');
    }

    const { pageName } = values;

    const { lastModified } = selectedFile;
    const { name, isAdmin } = user;

    dispatch(addSitePage({ pageName, lastModified, name, isAdmin }));

    setSelectedFile(null);

    setIsBtnDisabled(true);
    alert(`File ${pageName} was succesfully added`);

    actions.resetForm();
  };

  const handleFileChange = evt => {
    evt.preventDefault();

    if (!evt.target.files[0]) {
      return;
    }

    setSelectedFile(evt.target.files[0]);

    const { name } = evt.target.files[0];
    const fileName = name.slice(0, name.indexOf('.'));

    formik.setFieldValue('pageName', fileName);

    setIsBtnDisabled(false);
  };

  const handleDrop = evt => {
    evt.preventDefault();

    const { name } = evt.dataTransfer.files[0];

    const restricdedFile = name.slice(name.indexOf('.'));

    if (restricdedFile !== '.html') {
      console.log(selectedFile);
      return alert('Please, select an html file');
    }

    const fileName = name.slice(0, name.indexOf('.'));

    formik.setFieldValue('pageName', fileName);

    setSelectedFile(evt.dataTransfer.files[0]);
    setIsBtnDisabled(false);
  };

  const handleDrag = evt => {
    evt.preventDefault();
  };

  const toggleEditFileName = () => {
    if (!selectedFile) {
      return alert('Please, select file');
    }

    if (formik.errors.pageName) {
      return alert('Please, enter valid name');
    }

    setIsPageNameInputDisabled(prevState => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      pageName: '',
    },

    validationSchema: pageNameSchema,

    onSubmit: handleSubmit,

    validateOnBlur: true,

    validateOnChange: true,
  });

  return (
    <UserLayout>
      <div className={styles.createPage}>
        <div className={styles.createPage__header}>
          <form className={styles.createPage__form} onSubmit={formik.handleSubmit}>
            <label
              onClick={toggleEditFileName}
              className={styles.createPage__form__label}
              htmlFor="pageName"
            >
              <EditIcon size={24} />
            </label>
            <input
              className={styles.createPage__form__input}
              id="pageName"
              name="pageName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.pageName.trim()}
              disabled={isPageNameInputDisabled}
            />
          </form>
          {formik.errors.pageName && (
            <ValidationErrorMessage>{formik.errors.pageName}</ValidationErrorMessage>
          )}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <User authorName={user.name} isAdmin={user.isAdmin} style={{ marginRight: '2.5rem' }} />
            <button
              type="button"
              onClick={formik.handleSubmit}
              className={styles.createPage__form__btn}
              disabled={isBtnDisabled}
            >
              <EyeIcon size={24} />
              Add page
            </button>
          </div>
        </div>
        <div
          onClick={() => fileInput.current.click()}
          className={styles.upload}
          onDragStart={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <button type="button" className={styles.upload__actions} disabled>
            <PlusIcon size={24} /> Add new section
          </button>
          <input
            accept=".html"
            ref={fileInput}
            className="hidden"
            onChange={handleFileChange}
            type="file"
          />
        </div>
      </div>
    </UserLayout>
  );
};

// export const CreatePage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [pageName, setPageName] = useState('');
//   const [isBtnDisabled, setIsBtnDisabled] = useState(true);
//   const [isPageNameInputDisabled, setIsPageNameInputDisabled] = useState(true);

//   const user = useSelector(state => state.loggedUser);

//   const dispatch = useDispatch();

//   const fileInput = useRef();

//   const handleSubmit = evt => {
//     evt.preventDefault();

//     if (!selectedFile) {
//       return alert('Please, select an html file');
//     }

//     const pageName = evt.target[0].value;

//     if (!pageName) {
//       return;
//     }

//     const { lastModified } = selectedFile;
//     const { name, isAdmin } = user;

//     dispatch(addSitePage({ pageName, lastModified, name, isAdmin }));

//     setSelectedFile(null);
//     setPageName('');
//     setIsBtnDisabled(true);
//     alert(`File ${pageName} was succesfully added`);
//   };

//   const handleChangePageName = evt => {
//     if (typeof evt === 'object') {
//       setPageName(evt.target.value);
//       return;
//     }
//     setPageName(evt);
//   };

//   const handleFileChange = evt => {
//     evt.preventDefault();

//     setSelectedFile(evt.target.files[0]);

//     const { name } = evt.target.files[0];
//     const fileName = name.slice(0, name.indexOf('.'));
//     handleChangePageName(fileName);
//     setIsBtnDisabled(false);
//   };

//   const handleDrop = evt => {
//     evt.preventDefault();

//     const { name } = evt.dataTransfer.files[0];

//     const restricdedFile = name.slice(name.indexOf('.'));

//     if (restricdedFile !== '.html') {
//       console.log(selectedFile);
//       return alert('Please, select an html file');
//     }

//     const fileName = name.slice(0, name.indexOf('.'));

//     setSelectedFile(evt.dataTransfer.files[0]);
//     handleChangePageName(fileName);
//     setIsBtnDisabled(false);
//   };

//   const handleDrag = evt => {
//     evt.preventDefault();
//   };

//   const toggleEditFileName = () => {
//     if (!selectedFile) {
//       return alert('Please, select file');
//     }
//     setIsPageNameInputDisabled(prevState => !prevState);
//   };

//   return (
//     <UserLayout>
//       <div className={styles.createPage}>
//         <div className={styles.createPage__header}>
//           <form className={styles.createPage__form} onSubmit={handleSubmit}>
//             <label
//               onClick={toggleEditFileName}
//               className={styles.createPage__form__label}
//               htmlFor="pageName"
//             >
//               <EditIcon size={24} />
//             </label>
//             <input
//               className={styles.createPage__form__input}
//               id="pageName"
//               name="pageName"
//               type="text"
//               onChange={handleChangePageName}
//               value={pageName}
//               minLength={3}
//               maxLength={20}
//               disabled={isPageNameInputDisabled}
//             />
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <User
//                 authorName={user.name}
//                 isAdmin={user.isAdmin}
//                 style={{ marginRight: '2.5rem' }}
//               />
//               <button
//                 type="submit"
//                 className={styles.createPage__form__btn}
//                 disabled={isBtnDisabled}
//               >
//                 <EyeIcon size={24} />
//                 Add page
//               </button>
//             </div>
//           </form>
//         </div>
//         <div
//           onClick={() => fileInput.current.click()}
//           className={styles.upload}
//           onDragStart={handleDrag}
//           onDragLeave={handleDrag}
//           onDragOver={handleDrag}
//           onDrop={handleDrop}
//         >
//           <button type="button" className={styles.upload__actions} disabled>
//             <PlusIcon size={24} /> Add new section
//           </button>
//           <input
//             accept=".html"
//             ref={fileInput}
//             className="hidden"
//             onChange={handleFileChange}
//             type="file"
//           />
//         </div>
//       </div>
//     </UserLayout>
//   );
// };
