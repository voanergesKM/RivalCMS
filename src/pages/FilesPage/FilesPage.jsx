import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchIcon } from '../../assets/icons/SvgIcons';
import Pagination from '../../components/Pagination/Pagination';
import { UserLayout } from '../../components/UserLayout/UserLayout';
import { addSiteFiles } from '../../redux/filesSlice';
import styles from './FilesPage.module.css';

const types = [
  { title: 'Images', type: 'image' },
  { title: 'Files', type: 'application' },
  { title: 'Audio', type: 'audio' },
  { title: 'Video', type: 'video' },
];

export const FilesPage = () => {
  const siteFiles = useSelector(state => state.siteFiles);
  const [search, setSearch] = useState('');

  const [activeFilterBtn, setActiveFilterBtn] = useState(null);
  const [searchedFiles, setSearchedFiles] = useState(siteFiles);
  const [filteredFile, setFilteredFile] = useState(searchedFiles);

  useEffect(() => {
    setSearchedFiles(
      siteFiles.filter(file => file.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, siteFiles]);

  useEffect(() => {
    setActiveFilterBtn(null);
    setFilteredFile(searchedFiles);
  }, [searchedFiles]);

  const dispatch = useDispatch();

  const fileInput = useRef();

  const handleFileChange = evt => {
    const filesData = [...evt.target.files];

    filesData.forEach(({ name, type }) => dispatch(addSiteFiles({ name, type })));
  };

  const handleDrop = evt => {
    evt.preventDefault();

    const filesData = [...evt.dataTransfer.files];

    filesData.forEach(({ name, type }) => dispatch(addSiteFiles({ name, type })));
  };

  const handleDrag = evt => {
    evt.preventDefault();
  };

  const handleFilterBtnClick = filterBy => {
    setActiveFilterBtn(filterBy);

    setFilteredFile(searchedFiles.filter(file => file.type.includes(filterBy)));
  };

  const changeFilterBtnClassName = filterBy =>
    activeFilterBtn === filterBy ? styles.filter__list__btnActive : styles.filter__list__btn;

  return (
    <UserLayout>
      <div className={styles.container}>
        <div
          onClick={() => fileInput.current.click()}
          onDragStart={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={styles.fileContainer}
        >
          <div className={styles.fileContainer__actions}>
            <button className={styles.fileContainer__actions__btn} type="button">
              click to upload
            </button>
            <p className={styles.fileContainer__actions__text}>
              Drag & drop multiple files to upload
            </p>
          </div>

          <input
            ref={fileInput}
            onChange={handleFileChange}
            className="hidden"
            type="file"
            multiple
            accept=".png, .jpb, .jpeg, .webp, .mp4, .mp3, .pdf"
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.actions__search}>
            <label htmlFor="search">
              <SearchIcon size={24} />
            </label>
            <input
              className={styles.actions__search__input}
              type="search"
              name="search"
              id="search"
              placeholder="Search for file"
              value={search}
              onChange={evt => setSearch(evt.target.value)}
              autoComplete="off"
            />
          </div>
          <div className={styles.filter}>
            <span className={styles.filter__title}>Filter</span>
            <ul className={styles.filter__list}>
              {types.map(({ title, type }) => (
                <Button
                  key={title}
                  type={type}
                  className={changeFilterBtnClassName}
                  onClick={handleFilterBtnClick}
                >
                  {title}
                </Button>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: '1',
          }}
        >
          <Pagination pages={filteredFile} files />
        </div>
      </div>
    </UserLayout>
  );
};

function Button({ type, className, onClick, children }) {
  return (
    <li>
      <button className={className(type)} onClick={() => onClick(type)}>
        {children}
      </button>
    </li>
  );
}
