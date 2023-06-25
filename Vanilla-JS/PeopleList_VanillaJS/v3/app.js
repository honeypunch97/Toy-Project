'use strict';
import { data } from './module/data.js';
import makeList from './module/makeList.js';
import iconEvent from './module/iconEvent.js';

const delBtn = document.querySelector('.btn-wrap .del-btn');
const viewBtn = document.querySelector('.btn-wrap .view-btn');
const listBox = document.querySelector('.list-box');
let isListOn = true;

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
