import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { del, toggleLike } from '../store/modules/peopleSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PeopleListItem = memo(({ item }) => {
   const { id, name, job, tel, img, isLike } = item;
   const { user } = useSelector(state => state.auth);
   const dispatch = useDispatch(state => state.people);
   const onDel = () => {
      dispatch(del(id));
      Swal.fire({
         icon: 'success',
         title: '삭제 완료',
      });
   };
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
         {user && (
            <div className="btn-box">
               <button onClick={() => dispatch(toggleLike(id))}>
                  <i className={isLike ? 'xi-heart' : 'xi-heart-o'}></i>
               </button>
               <button>
                  <Link to={`/edit/${id}`}>
                     <i className="xi-pen"></i>
                  </Link>
               </button>
               <button onClick={onDel}>
                  <i className="xi-run"></i>
               </button>
            </div>
         )}
      </li>
   );
});

export default PeopleListItem;
