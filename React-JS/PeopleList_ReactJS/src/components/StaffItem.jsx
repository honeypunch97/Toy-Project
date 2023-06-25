import React from 'react';

const StaffItem = ({ item, onDel, toggleIsHeart }) => {
   const { id, name, job, tel, imgUrl, isHeart } = item;
   return (
      <li>
         <div className="img-box">
            <img src={imgUrl} alt={name} />
         </div>
         <div className="text-box">
            <p>{name}</p>
            <p>{job}</p>
            <p>{tel}</p>
         </div>
         <div className="resignation-box">
            <i className={isHeart ? 'xi-heart' : 'xi-heart-o'} onClick={() => toggleIsHeart(id)}></i>
            <button onClick={() => onDel(id)}>퇴사</button>
         </div>
      </li>
   );
};

export default StaffItem;
