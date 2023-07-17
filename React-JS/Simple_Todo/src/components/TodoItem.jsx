import React from 'react';

const TodoItem = ({ item, deleteTodo, toggleTodo }) => {
   const { id, text, isChk } = item;
   return (
      <li className={isChk ? 'chk' : ''}>
         <input type="checkbox" checked={isChk} onChange={() => toggleTodo(id)} />
         <span>{text}</span>
         <button onClick={() => deleteTodo(id)}>삭제</button>
      </li>
   );
};

export default TodoItem;
