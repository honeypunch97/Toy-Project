export default icons => {
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
