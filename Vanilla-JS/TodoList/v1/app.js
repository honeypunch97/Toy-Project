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

   const form = get('#text-form');
   const txtBox = get('#text-form input');
   const listBox = get('.list');
   let idNum = 0;

   //  localStorage.clear();

   const add = () => {
      idNum++;
      localStorage.setItem('id', idNum);
      const data = JSON.parse(localStorage.getItem('list')) || [];

      localStorage.setItem('list', JSON.stringify([...data, { id: idNum, text: txtBox.value, isChk: false }]));

      txtBox.value = '';
      txtBox.focus();
   };
   const show = () => {
      listBox.innerHTML = '';
      idNum = localStorage.getItem('id') || 0;
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
         icon.addEventListener('click', chkEvent);
         content.textContent = text;
         delBtn.classList.add('del-btn');
         delBtn.textContent = '삭제';
         delBtn.addEventListener('click', del);

         li.append(icon, content, delBtn);
         listBox.append(li);
      });
   };
   const del = e => {
      const id = Number(e.currentTarget.parentElement.dataset.id);
      const data = JSON.parse(localStorage.getItem('list'));
      const currentData = data.filter(item => item.id !== id);
      localStorage.setItem('list', JSON.stringify(currentData));
      show();
   };
   const chkEvent = e => {
      const id = Number(e.currentTarget.parentElement.dataset.id);
      const data = JSON.parse(localStorage.getItem('list'));
      const currentData = data.map(item => {
         if (id === item.id) item.isChk = !item.isChk;
         return item;
      });
      localStorage.setItem('list', JSON.stringify(currentData));
      show();
   };

   ////////////////////////////

   show();
   form.addEventListener('submit', e => {
      e.preventDefault();
      add();
      show();
   });
})();
