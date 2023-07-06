import React, { memo } from 'react';

const AddForm = memo(() => {
   return (
      <form>
         <label>이름</label>
         <input type="text" name="name" required placeholder="이름을 입력하세요" />
         <label>직업</label>
         <input type="text" name="job" required placeholder="직업을 입력하세요" />
         <label>연락처</label>
         <input type="text" name="tel" required placeholder="연락처를 입력하세요" />
         <label>대표 이미지</label>
         <input type="text" name="img" required placeholder="대표이미지 주소를 입력하세요" />
         <button type="submit">등록</button>
      </form>
   );
});

export default AddForm;
