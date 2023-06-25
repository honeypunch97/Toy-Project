import { get, getAll } from './module/getEle.js';
import Todo from './module/todo.js';
(() => {
   'use strict';
   const form = get('#text-form');
   const txtBox = get('#text-form input');
   const listBox = get('.list');
   const todo = new Todo(form, txtBox, listBox);
   todo.init();
})();
