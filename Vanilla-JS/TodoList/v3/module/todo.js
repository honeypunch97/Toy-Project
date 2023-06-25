export default class Todo {
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
         const content = document.createElement('input');
         const modifyBtn = document.createElement('button');
         const delBtn = document.createElement('button');

         li.setAttribute('data-id', id);
         icon.addEventListener('click', e => {
            this.chkEvent(e);
         });
         content.setAttribute('type', 'text');
         content.setAttribute('readonly', '');
         content.value = text;
         delBtn.classList.add('del-btn');
         delBtn.textContent = '삭제';
         delBtn.addEventListener('click', e => {
            this.del(e);
         });
         modifyBtn.classList.add('modify-btn');
         modifyBtn.textContent = '수정';
         modifyBtn.addEventListener('click', e => {
            this.modify(e);
         });
         if (isChk) {
            icon.className = 'xi-check-square-o';
            icon.style.color = 'tomato';
            delBtn.style.backgroundColor = 'tomato';
            content.style.color = 'tomato';
            content.style.textDecorationLine = 'line-through';
            li.append(icon, content, delBtn);
         } else {
            icon.className = 'xi-checkbox-blank';
            li.append(icon, content, modifyBtn, delBtn);
         }

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
   modify(e) {
      const currentBtn = e.currentTarget;
      const targetText = currentBtn.previousElementSibling;
      const command = currentBtn.textContent;

      if (command === '수정') {
         targetText.style.outline = '2px solid tomato';
         targetText.removeAttribute('readonly');
         currentBtn.textContent = '완료';
         currentBtn.style.backgroundColor = 'tomato';
      } else {
         const id = parseInt(currentBtn.parentElement.dataset.id);
         const data = JSON.parse(localStorage.getItem('list'));
         const currentData = data.map(item => (id === item.id ? { ...item, text: targetText.value } : item));
         localStorage.setItem('list', JSON.stringify(currentData));
         this.show();
      }
   }
}
