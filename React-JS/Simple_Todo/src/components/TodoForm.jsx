import React, { useRef, useState } from 'react';

const TodoForm = ({ createTodo }) => {
   const [text, setText] = useState('');
   const inputRef = useRef(null);
   const handleSubmit = e => {
      e.preventDefault();
      createTodo(text);
      setText('');
      inputRef.current.focus();
   };
   return (
      <form onSubmit={handleSubmit}>
         <input type="text" value={text} onChange={e => setText(e.target.value)} ref={inputRef} />
         <button>add</button>
      </form>
   );
};

export default TodoForm;
