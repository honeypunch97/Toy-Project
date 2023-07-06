import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './styled/BookStyle';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/modules/bookSlice';

const BookAddForm = memo(() => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [text, setText] = useState({ genre: '', author: '', code: '' });
   const changeInput = e => {
      const { name, value } = e.target;
      setText({ ...text, [name]: value });
   };
   const onSubmit = e => {
      e.preventDefault();
      dispatch(addBook(text));
      navigate('/');
      setText({ genre: '', author: '', code: '' });
   };

   return (
      <FormContainer onSubmit={onSubmit}>
         <label>장르</label>
         <input
            type="text"
            name="genre"
            placeholder="책 장르 입력(소설)"
            value={text.genre}
            required
            onChange={changeInput}
         />
         <label>저자</label>
         <input
            type="text"
            name="author"
            placeholder="저자 입력(임수정)"
            value={text.author}
            required
            onChange={changeInput}
         />
         <label>책 코드</label>
         <input
            type="text"
            name="code"
            placeholder="책 코드 입력(000001)"
            value={text.code}
            required
            onChange={changeInput}
         />
         <button type="submit">추가</button>
      </FormContainer>
   );
});

export default BookAddForm;
