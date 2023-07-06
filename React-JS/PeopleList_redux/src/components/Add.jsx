import React, { memo } from 'react';
import AddForm from './AddForm';
import AddImgList from './AddImgList';
import { AddContainer } from './styled.jsx/PeopleStyle';

const Add = memo(() => {
   return (
      <AddContainer>
         <h2>Add</h2>
         <div className="add-box">
            <AddForm />
            <AddImgList />
         </div>
      </AddContainer>
   );
});

export default Add;
