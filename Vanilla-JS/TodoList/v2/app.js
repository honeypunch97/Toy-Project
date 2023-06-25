'use strict';
(() => {
   const get = target => {
      if (document.querySelector(target)) {
         return document.querySelector(target);
      } else {
         throw 'ERROR - get';
      }
   };
   const getAll = target => {
      if (documentAll.querySelector(target)) {
         return documentAll.querySelector(target);
      } else {
         throw 'ERROR - getAll';
      }
   };

   class Todo {
      idNum = localStorage.getItem('id') || 0;
      constructor(form, txtBox, listBox) {
         this.form = form;
         this.txtBox = txtBox;
         this.listBox = listBox;
      }
      init() {
         this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.add();
            this.show();
         });
         this.show();
      }
      add() {
         this.idNum++;
         localStorage.setItem('id', this.idNum);
         const data = JSON.parse(localStorage.getItem('list')) || [];

         localStorage.setItem(
            'list',
            JSON.stringify([...data, { id: this.idNum, text: this.txtBox.value, isChk: false }]),
         );

         this.txtBox.value = '';
         this.txtBox.focus();
      }
      show() {
         this.listBox.innerHTML = '';
         const data = JSON.parse(localStorage.getItem('list')) || [];
         data.map(item => {
            const { id, text, isChk } = item;
            const li = document.createElement('li');
            const icon = document.createElement('i');
            const content = document.createElement('p');
            const delBtn = document.createElement('button');

            li.setAttribute('data-id', id);
            if (isChk) {
               icon.className = 'xi-check-square-o';
               icon.style.color = 'tomato';
               delBtn.style.backgroundColor = 'tomato';
               content.style.color = 'tomato';
               content.style.textDecorationLine = 'line-through';
            } else {
               icon.className = 'xi-checkbox-blank';
            }
            icon.addEventListener('click', e => {
               this.chkEvent(e);
            });
            content.textContent = text;
            delBtn.classList.add('del-btn');
            delBtn.textContent = '삭제';
            delBtn.addEventListener('click', e => {
               this.del(e);
            });

            li.append(icon, content, delBtn);
            this.listBox.append(li);
         });
      }
      del(e) {
         const id = Number(e.currentTarget.parentElement.dataset.id);
         const data = JSON.parse(localStorage.getItem('list'));
         const currentData = data.filter(item => item.id !== id);
         localStorage.setItem('list', JSON.stringify(currentData));
         this.show();
      }
      chkEvent(e) {
         const id = Number(e.currentTarget.parentElement.dataset.id);
         const data = JSON.parse(localStorage.getItem('list'));
         const currentData = data.map(item => {
            if (id === item.id) item.isChk = !item.isChk;
            return item;
         });
         localStorage.setItem('list', JSON.stringify(currentData));
         this.show();
      }
   }

   ////////////////////////////
   const form = get('#text-form');
   const txtBox = get('#text-form input');
   const listBox = get('.list');
   const todo = new Todo(form, txtBox, listBox);
   todo.init();
})();
