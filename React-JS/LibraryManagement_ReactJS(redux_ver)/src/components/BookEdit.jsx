import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FormContainer } from './styled/BookStyle';
import { editBook } from '../store/modules/bookSlice';

const BookEdit = memo(() => {
   const { editID } = useParams();
   const { bookData } = useSelector(state => state.book);
   const dispatch = useDispatch();
   const [current, setCurrent] = useState({ id: 0, genre: '', author: '', code: '' });
   const { genre, author, code } = current;
   const navigate = useNavigate();
   const changeInput = e => {
      const { name, value } = e.target;
      setCurrent({ ...current, [name]: value });
   };
   const onSubmit = e => {
      e.preventDefault();
      dispatch(editBook(current));
      navigate('/');
   };
   useEffect(() => {
      setCurrent(bookData.find(item => item.id === Number(editID)));
   }, [editID, bookData]);
   return (
      <>
         <h2>Edit</h2>
         <FormContainer onSubmit={onSubmit}>
            <label>장르</label>
            <input type="text" name="genre" value={genre} onChange={changeInput} />
            <label>저자</label>
            <input type="text" name="author" value={author} onChange={changeInput} />
            <label>코드</label>
            <input type="text" name="code" value={code} onChange={changeInput} />

            <div className="info-box">
               <strong>현재 내용으로 수정하시겠습니까?</strong>
            </div>
            <div className="btn-wrap">
               <button type="submit">예</button>
               <button type="button" onClick={() => navigate('/')}>
                  아니오
               </button>
            </div>
         </FormContainer>
      </>
   );
});
export default BookEdit;
