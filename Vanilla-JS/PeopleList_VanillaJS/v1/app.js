'use strict';
const data = [
   { id: '1', name: '일애옹', job: '웹퍼블리셔', tel: '010-1111-1111', imgName: 'img1' },
   { id: '2', name: '이멍멍', job: '프론트엔드', tel: '010-2222-2222', imgName: 'img2' },
   { id: '3', name: '삼야옹', job: '백엔드', tel: '010-3333-3333', imgName: 'img3' },
   { id: '4', name: '사월월', job: '기획자', tel: '010-4444-4444', imgName: 'img4' },
   { id: '5', name: '오으르렁', job: '웹디자이너', tel: '010-5555-5555', imgName: 'img5' },
   { id: '6', name: '육꼬끼오', job: 'DB관리자', tel: '010-6666-6666', imgName: 'img6' },
];

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
