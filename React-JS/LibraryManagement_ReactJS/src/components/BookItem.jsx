import React from 'react';

const BookItem = ({ item, onDel, onEdit }) => {
   const { id, title, author, bookCode } = item;
   return (
      <tr>
         <td>{title}</td>
         <td>{author}</td>
         <td>{bookCode}</td>
         <td>
            <button onClick={() => onEdit(item)}>
               <i className="xi-pen"></i>
            </button>
            <button onClick={() => onDel(id)}>
               <i className="xi-trash-o"></i>
            </button>
         </td>
      </tr>
   );
};

export default BookItem;
