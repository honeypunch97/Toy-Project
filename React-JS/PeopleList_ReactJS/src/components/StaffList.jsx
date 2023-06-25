import React from 'react';
import StaffItem from './StaffItem';

const StaffList = ({ data, onDel, toggleIsHeart }) => {
   return (
      <ul className="list">
         {data.map(item => (
            <StaffItem key={item.id} item={item} onDel={onDel} toggleIsHeart={toggleIsHeart} />
         ))}
      </ul>
   );
};

export default StaffList;
