import React, { memo } from 'react';
import { EditContainer } from './styled.jsx/PeopleStyle';
import EditForm from './EditForm';
import AddImgList from './AddImgList';

const Edit = memo(() => {
   return (
      <EditContainer>
         <h2>Edit</h2>
         <div className="edit-box">
            <EditForm />
            <AddImgList />
         </div>
      </EditContainer>
   );
});

export default Edit;
