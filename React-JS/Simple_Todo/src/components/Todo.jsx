import React, { useRef, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import datalist from '../assets/data/todo';
import '../assets/css/todo.css';

const Todo = () => {
   const [todoData, setTodoData] = useState(datalist || []);
   const no = useRef(datalist.length + 1 || 1);
   const createTodo = text => {
      setTodoData([...todoData, { id: no.current++, text, isChk: false }]);
   };
   const deleteTodo = id => {
      setTodoData(todoData.filter(item => item.id !== id));
   };
   const toggleTodo = id => {
      setTodoData(todoData.map(item => (item.id === id ? { ...item, isChk: !item.isChk } : item)));
   };
   return (
      <div className="todo">
         <h2>Todo</h2>
         <TodoForm createTodo={createTodo} />
         <TodoList todoData={todoData} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
   );
};

export default Todo;
