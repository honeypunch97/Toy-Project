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
export default makeList;
