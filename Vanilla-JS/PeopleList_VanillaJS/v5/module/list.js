export default class List {
   isShow = true;
   idNum;
   data;
   constructor(listContainer) {
      this.listContainer = listContainer;
      this.listBox = this.listContainer.querySelector('.list-box');
      this.openAddContainerBtn = this.listContainer.querySelector('.open-add-container-btn');
      this.addContainer = this.listContainer.querySelector('.add-container');
      this.addContainerForm = this.listContainer.querySelector('.add-container form');
      this.delListBtn = this.listContainer.querySelector('.btn-wrap .del-btn');
      this.showListBtn = this.listContainer.querySelector('.btn-wrap .view-btn');
   }
   init(tempData = []) {
      if (localStorage.getItem('idNum')) {
         this.idNum = localStorage.getItem('idNum');
         this.data = JSON.parse(localStorage.getItem('data'));
      } else {
         localStorage.setItem('data', JSON.stringify(tempData));
         this.data = JSON.parse(localStorage.getItem('data'));
         localStorage.setItem('idNum', this.data.length);
         this.idNum = this.data.length;
      }
      this.openAddContainerBtn.addEventListener('click', e => {
         const target = e.currentTarget.children[0];
         if (target.className === 'xi-plus') {
            this.addContainer.style.display = 'block';
            target.className = 'xi-minus';
         } else {
            if (this.isShow) this.show();
            target.className = 'xi-plus';
            this.addContainer.style.display = 'none';
         }
      });
      this.addContainerForm.addEventListener('submit', e => {
         e.preventDefault();
         this.add();
      });
      this.delListBtn.addEventListener('click', () => {
         this.delList();
      });
      this.showListBtn.addEventListener('click', () => {
         this.show();
      });
      this.show();
   }
   show() {
      this.isShow = true;
      this.listBox.innerHTML = '';
      this.data = JSON.parse(localStorage.getItem('data'));
      this.data.map(item => {
         const { id, name, job, tel, pic, isLiked } = item;
         const li = document.createElement('li');
         const imgBox = document.createElement('div');
         const img = document.createElement('img');
         const textBox = document.createElement('div');
         const pName = document.createElement('p');
         const pJob = document.createElement('p');
         const pTel = document.createElement('p');
         const iconBox = document.createElement('div');
         const icon = document.createElement('i');
         const resignationBtn = document.createElement('button');

         li.dataset.id = id;
         imgBox.classList.add('img-box');
         img.setAttribute('src', pic);
         img.setAttribute('alt', name);
         img.setAttribute('loading', 'lazy');
         img.addEventListener('error', e => {
            this.picError(e);
            this.show();
         });
         imgBox.append(img);
         textBox.classList.add('text-box');
         pName.textContent = name;
         pJob.textContent = job;
         pTel.textContent = tel;
         textBox.append(pName, pJob, pTel);
         iconBox.classList.add('icon-box');
         icon.addEventListener('click', e => {
            this.iconEvent(e);
            this.show();
         });
         if (isLiked) {
            icon.style.color = 'tomato';
            icon.classList.add('xi-heart');
         } else {
            icon.classList.add('xi-heart-o');
         }
         resignationBtn.addEventListener('click', e => {
            this.resignation(e);
            this.show();
         });
         resignationBtn.classList.add('resignation-btn');
         resignationBtn.textContent = '퇴사';

         iconBox.append(icon, resignationBtn);
         li.append(imgBox, textBox, iconBox);
         this.listBox.append(li);
      });
   }
   add() {
      const msg = this.listContainer.querySelector('.add-container h2');
      const nameText = this.addContainerForm.querySelector('#nameText');
      const jobText = this.addContainerForm.querySelector('#jobText');
      const telText = this.addContainerForm.querySelector('#telText');
      const picText = this.addContainerForm.querySelector('#picText');
      if (!nameText.value) {
         msg.textContent = '이름을 입력하세요';
         msg.style.color = 'tomato';
      } else if (!jobText.value) {
         msg.textContent = '직업을 입력하세요';
         msg.style.color = 'tomato';
      } else if (!telText.value) {
         msg.textContent = '연락처를 입력하세요';
         msg.style.color = 'tomato';
      } else {
         msg.textContent = '명단에 추가되었습니다';
         msg.style.color = 'yellowgreen';
         this.idNum++;
         localStorage.setItem('idNum', this.idNum);
         if (!picText.value) {
            picText.value = 'http://via.placeholder.com/200x200';
         }
         const currentData = {
            id: this.idNum,
            name: nameText.value,
            job: jobText.value,
            tel: telText.value,
            pic: picText.value,
            isLiked: false,
         };
         localStorage.setItem('data', JSON.stringify([...this.data, currentData]));
         this.data = JSON.parse(localStorage.getItem('data'));
         nameText.value = '';
         jobText.value = '';
         telText.value = '';
         picText.value = '';
         nameText.focus();
      }
      setTimeout(() => {
         msg.textContent = '명단 추가';
         msg.style.color = '#333';
      }, 500);
   }
   delList() {
      this.isShow = false;
      this.listBox.innerHTML = '';
   }
   iconEvent(e) {
      const li = e.currentTarget.closest('li');
      const id = parseInt(li.dataset.id);
      let currentData;
      if (e.currentTarget.className === 'xi-heart-o') {
         currentData = this.data.map(item => (id === item.id ? { ...item, isLiked: true } : item));
      } else {
         currentData = this.data.map(item => (id === item.id ? { ...item, isLiked: false } : item));
      }
      localStorage.setItem('data', JSON.stringify(currentData));
   }
   resignation(e) {
      const li = e.currentTarget.closest('li');
      const id = parseInt(li.dataset.id);
      const currentData = this.data.filter(item => id !== item.id);
      localStorage.setItem('data', JSON.stringify(currentData));
   }
   picError(e) {
      const li = e.currentTarget.closest('li');
      const id = parseInt(li.dataset.id);
      const currentData = this.data.map(item =>
         id === item.id ? { ...item, pic: 'http://via.placeholder.com/200x200' } : item,
      );
      localStorage.setItem('data', JSON.stringify(currentData));
   }
}
