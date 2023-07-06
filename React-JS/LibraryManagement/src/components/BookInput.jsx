import React from 'react';

const BookInput = ({ book, changeBook, onUpdate, titleRef, isEdit }) => {
   const { title, author, bookCode } = book;
   return (
      <div className="book-input">
         <form className="book-form" onSubmit={onUpdate}>
            <p>
               <label htmlFor="title">제목</label>
               <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  placeholder="북 제목입력 (총균쇠)"
                  onChange={changeBook}
                  ref={titleRef}
                  required
               />
            </p>
            <p>
               <label htmlFor="author">저자</label>
               <input
                  type="text"
                  id="author"
                  name="author"
                  value={author}
                  placeholder="저자 입력 (임수정)"
                  onChange={changeBook}
                  required
               />
            </p>
            <p>
               <label htmlFor="bookcode">책 코드</label>
               <input
                  type="text"
                  id="bookcode"
                  name="bookCode"
                  value={bookCode}
                  placeholder="책 코드 입력 (00001)"
                  onChange={changeBook}
                  required
               />
            </p>
            <p>
               <button className="btn">{isEdit ? '수정' : '추가'}</button>
            </p>
         </form>
      </div>
   );
};

export default BookInput;
