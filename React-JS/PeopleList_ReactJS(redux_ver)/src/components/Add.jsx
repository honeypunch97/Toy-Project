import React, { memo } from 'react';
import AddForm from './AddForm';

const Add = memo(() => {
   return (
      <div>
         <h2>Add</h2>
         <AddForm />
      </div>
   );
});

export default Add;
