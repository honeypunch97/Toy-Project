'use strict';
import { data } from './module/data.js';

const delBtn = document.querySelector('.btn-wrap .del-btn');
const viewBtn = document.querySelector('.btn-wrap .view-btn');
const listBox = document.querySelector('.list-box');
let isListOn = true;

const makeList = data => {
   const dataHtml = data
      .map(item => {
         let { name, job, tel, imgName } = item;
         return `<li>
    <div class="img-box"><img src="./images/${imgName}.jpg" alt="" /></div>
    <div class="text-box">
       <p>${name}</p>
       <p>${job}</p>
       <p>${tel}</p>
    </div>
    <div class="icon-box">
       <i class="xi-heart-o"></i>
    </div>
 </li>`;
      })
      .join('');
   return dataHtml;
};
const iconEvent = icons => {
   icons.forEach(item => {
      item.addEventListener('click', e => {
         if (e.currentTarget.children[0].className === 'xi-heart-o') {
            e.currentTarget.children[0].style.color = 'red';
            e.currentTarget.children[0].className = 'xi-heart';
         } else {
            e.currentTarget.children[0].style.color = '#333';
            e.currentTarget.children[0].className = 'xi-heart-o';
         }
      });
   });
};
const printList = () => {
   listBox.innerHTML = makeList(data);
   const icons = document.querySelectorAll('.list-box li .icon-box');
   iconEvent(icons);
};
viewBtn.addEventListener('click', e => {
   if (!isListOn) {
      printList();
      isListOn = true;
   }
});
delBtn.addEventListener('click', e => {
   if (isListOn) {
      listBox.innerHTML = '';
      isListOn = false;
   }
});
printList();
