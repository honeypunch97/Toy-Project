import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import BookInput from './BookInput';
import BookList from './BookList';
import Message from './Message';

const MainBook = () => {
   const [data, setDate] = useState(JSON.parse(localStorage.getItem('data')) || []);
   const [book, setBook] = useState({ id: '', title: '', author: '', bookCode: '' });
   const [isEdit, setIsEdit] = useState(false);
   const [msg, setMsg] = useState('');
   const no = useRef(JSON.parse(localStorage.getItem('no')) || 1);
   const titleRef = useRef(null);

   const changeBook = e => {
      const { name, value } = e.target;
      setBook({ ...book, [name]: value });
   };
   const onDel = id => {
      setDate(data.filter(item => item.id !== id));
      setMsg('삭제 되었습니다');
   };
   const onUpdate = e => {
      e.preventDefault();
      if (isEdit) {
         setDate(data.map(item => (item.id === book.id ? book : item)));
         setIsEdit(false);
         setMsg('수정 되었습니다');
      } else {
         setDate([...data, { ...book, id: no.current++ }]);
         titleRef.current.focus();
         setMsg('추가 되었습니다');
      }
      setBook({ id: '', title: '', author: '', bookCode: '' });
   };
   const onEdit = item => {
      setIsEdit(true);
      setBook(item);
      titleRef.current.focus();
   };
   useEffect(() => {
      titleRef.current.focus();
   }, []);
   useEffect(() => {
      const timeout = setTimeout(() => {
         setMsg(() => {
            '';
         });
      }, 2000);
      return () => clearTimeout(timeout);
   }, [msg]);
   useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
   }, [data]);
   useEffect(() => {
      localStorage.setItem('no', JSON.stringify(no.current));
   }, [no.current]);
   return (
      <section id="content" className="main-book">
         <h2>북카페 도서 관리 시스템</h2>
         <div className="inner">
            <BookInput book={book} onUpdate={onUpdate} changeBook={changeBook} titleRef={titleRef} isEdit={isEdit} />
            <BookList data={data} onDel={onDel} onEdit={onEdit} />
         </div>
         <Message msg={msg} />
      </section>
   );
};

export default MainBook;
