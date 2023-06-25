import React from 'react';

const MemberItem = ({ item, select, onSelect }) => {
   const { id, name, representativeImg } = item;
   const { memberSel } = select;
   return (
      <li className={memberSel === id ? 'on' : ''} onClick={onSelect} data-id={id} data-category="memberSel">
         <img src={representativeImg} alt={name} loading="lazy" />
         <p>{name}</p>
      </li>
   );
};

export default MemberItem;
