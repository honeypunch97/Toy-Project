import React, { memo } from 'react';
import BookTableItem from '../components/BookTableItem';
import { TableContainer } from './styled/BookStyle';
import { useSelector } from 'react-redux';

const BookTable = memo(() => {
   const { bookData } = useSelector(state => state.book);
   const { user } = useSelector(state => state.auth);
   return (
      <TableContainer>
         <colgroup>
            <col className="w1" />
            <col className="w2" />
            <col className="w3" />
            {user && <col className="w4" />}
         </colgroup>
         <thead>
            <tr>
               <th>장르</th>
               <th>저자</th>
               <th>코드</th>
               {user && <th>관리</th>}
            </tr>
         </thead>
         <tbody>
            {bookData.map(item => (
               <BookTableItem key={item.id} item={item} />
            ))}
         </tbody>
      </TableContainer>
   );
});

export default BookTable;
