import React, { memo } from 'react';
import BookTable from '../components/BookTable';

const BookHome = memo(() => {
   return (
      <>
         <h2>Home</h2>
         <BookTable />
      </>
   );
});

export default BookHome;
