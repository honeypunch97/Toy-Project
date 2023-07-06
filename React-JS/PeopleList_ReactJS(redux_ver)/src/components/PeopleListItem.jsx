import React, { memo } from 'react';

const PeopleListItem = memo(({ item }) => {
   const { id, name, job, tel, img, isLike } = item;
   return (
      <li>
         <div className="img-box">
            <img src={img} alt={name} />
         </div>
         <div className="text-box">
            <p>{name}</p>
            <p>{job}</p>
            <p>{tel}</p>
         </div>
         <div className="btn-box">
            <button>
               <i className={isLike ? 'xi-heart' : 'xi-heart-o'}></i>
            </button>
            <button>
               <i className="xi-run"></i>
            </button>
         </div>
      </li>
   );
});

export default PeopleListItem;
