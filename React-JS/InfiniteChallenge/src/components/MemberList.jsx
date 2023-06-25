import React from 'react';
import MemberItem from './MemberItem';

const MemberList = ({ data, onSelect, select }) => {
   return (
      <ul className="member-list">
         {data.map(item => (
            <MemberItem key={item.id} item={item} select={select} onSelect={onSelect} />
         ))}
      </ul>
   );
};

export default MemberList;
