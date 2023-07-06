import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delBook } from '../store/modules/bookSlice';

const BookTableItem = memo(({ item }) => {
   const { id, genre, author, code } = item;
   const { user } = useSelector(state => state.auth);
   const dispatch = useDispatch();
   return (
      <tr>
         <td>{genre}</td>
         <td>{author}</td>
         <td>{code}</td>

         {user && (
            <td>
               <div className="btn-wrap">
                  <button>
                     <Link to={`/edit/${id}`}>
                        <i className="xi-pen"></i>
                     </Link>
                  </button>
                  <button onClick={() => dispatch(delBook(id))}>
                     <i className="xi-close"></i>
                  </button>
               </div>
            </td>
         )}
      </tr>
   );
});

export default BookTableItem;
