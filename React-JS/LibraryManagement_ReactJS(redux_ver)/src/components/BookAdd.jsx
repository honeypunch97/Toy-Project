import React, { memo } from 'react';
import BookAddForm from './BookAddForm';

const BookAdd = memo(() => {
   return (
      <>
         <h2>Add</h2>
         <BookAddForm />
      </>
   );
});

export default BookAdd;
