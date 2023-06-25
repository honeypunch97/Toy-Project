import React, { useRef, useState } from 'react';
import { GallerySearchForm } from '../styled/GalleryStyle';

const GallerySearch = ({ onSubmit }) => {
   const [searchText, setSearchText] = useState('');
   const [searchLog, setSearchLog] = useState([]);
   const [onSearch, setOnSearch] = useState(false);
   const searchLogNo = useRef(1);
   const textRef = useRef(null);
   const onChange = e => {
      const { value } = e.target;
      setSearchText(value);
   };
   const search = e => {
      e.preventDefault();
      onSubmit(searchText);
      setSearchLog([{ id: searchLogNo.current++, text: searchText }, ...searchLog]);
      setSearchText('');
      textRef.current.focus();
   };
   const reSearch = reText => {
      onSubmit(reText);
   };
   const onDelSearchLog = id => {
      setSearchLog(searchLog.filter(item => item.id !== id));
   };
   const handleFocus = () => {
      setOnSearch(true);
   };

   const handleBlur = () => {
      setTimeout(() => {
         setOnSearch(false);
      }, 100);
   };
   return (
      <>
         <GallerySearchForm onSubmit={search}>
            <input
               type="text"
               onChange={onChange}
               value={searchText}
               ref={textRef}
               onFocus={handleFocus}
               onBlur={handleBlur}
            />
            <button>검색</button>
            {onSearch && (
               <div>
                  {searchLog.map(item => (
                     <p key={item.id} onClick={() => reSearch(item.text)}>
                        {item.text}
                        <button type="button" onClick={() => onDelSearchLog(item.id)}>
                           X
                        </button>
                     </p>
                  ))}
               </div>
            )}
         </GallerySearchForm>
      </>
   );
};

export default GallerySearch;
