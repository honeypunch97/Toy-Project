import React from 'react';
import BookItem from './BookItem';

const BookList = ({ data, onDel, onEdit }) => {
   return (
      <div className="book-list">
         <table className="book-table">
            <caption>도서 관리 시스템</caption>
            <colgroup>
               <col className="title" />
               <col className="author" />
               <col className="bookcode" />
               <col className="del" />
            </colgroup>
            <thead>
               <tr>
                  <th>제목</th>
                  <th>저자</th>
                  <th>코드</th>
                  <th>관리</th>
               </tr>
            </thead>
            <tbody className="book-tbody">
               {data.map(item => (
                  <BookItem key={item.id} item={item} onDel={onDel} onEdit={onEdit} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default BookList;
