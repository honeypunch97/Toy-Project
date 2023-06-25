'use strict';
import { data } from './module/data.js';
import { get, getAll } from './module/getEle.js';
import makeList from './module/makeList.js';
import iconEvent from './module/iconEvent.js';

const delBtn = get('.btn-wrap .del-btn');
const viewBtn = get('.btn-wrap .view-btn');
const listBox = get('.list-box');
let isListOn = true;

const printList = () => {
   listBox.innerHTML = makeList(data);
   const icons = getAll('.list-box li .icon-box');
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
