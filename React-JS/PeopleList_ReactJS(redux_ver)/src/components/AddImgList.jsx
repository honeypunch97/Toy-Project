import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const AddImgList = memo(() => {
   const { imgList } = useSelector(state => state.people);
   return (
      <ul>
         {imgList.map((item, idx) => (
            <li key={idx}>
               <img src={item}></img>
               <p>{item}</p>
            </li>
         ))}
      </ul>
   );
});

export default AddImgList;
