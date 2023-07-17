import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoData, deleteTodo, toggleTodo }) => {
   return (
      <ul>
         {todoData.map(item => (
            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
         ))}
      </ul>
   );
};

export default TodoList;
