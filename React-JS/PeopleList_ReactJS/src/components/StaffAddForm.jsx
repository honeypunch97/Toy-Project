import React, { useState } from 'react';
import { useRef } from 'react';

const StaffAddForm = ({ onAdd }) => {
   const [staff, setStaff] = useState({ name: '', job: '', tel: '', isHeart: false, imgUrl: '' });
   const { name, job, tel, isHeart, imgUrl } = staff;
   const nameRef = useRef(null);
   const changeInput = e => {
      const { name, value } = e.target;
      setStaff({ ...staff, [name]: value });
   };
   const addStaff = e => {
      e.preventDefault();
      onAdd(staff);
      setStaff({ name: '', job: '', tel: '', isHeart: false, imgUrl: '' });
      nameRef.current.focus();
   };
   const copyImgUrl = e => {
      const { src } = e.target;
      setStaff({ ...staff, imgUrl: src });
   };
   return (
      <div className="add-form">
         <h2>직원 명단 추가</h2>
         <form onSubmit={addStaff}>
            <p>
               <label>이름 : </label>
               <input type="text" name="name" value={name} onChange={changeInput} ref={nameRef} required />
            </p>
            <p>
               <label>직업 : </label>
               <input type="text" name="job" value={job} onChange={changeInput} required />
            </p>
            <p>
               <label>연락처 : </label>
               <input type="text" name="tel" value={tel} onChange={changeInput} required />
            </p>
            <p>
               <label>사진 : </label>
               <input type="text" name="imgUrl" value={imgUrl} onChange={changeInput} required />
            </p>
            <button>추가</button>
         </form>
         <div className="sample-img-box">
            <strong>샘플 이미지</strong>
            <em>클릭시 url이 복사됩니다</em>
            <ul>
               <li>
                  <img src="./images/10점이요.jpg" alt="10점이요" onClick={copyImgUrl} />
               </li>
               <li>
                  <img src="./images/굿모닝에브리원.jpg" alt="굿모닝에브리원" onClick={copyImgUrl} />
               </li>
               <li>
                  <img src="./images/아유하기싫어.jpg" alt="아유하기싫어" onClick={copyImgUrl} />
               </li>
               <li>
                  <img src="./images/제가뭐잘못했습니까.jpg" alt="제가뭐잘못했습니까" onClick={copyImgUrl} />
               </li>
            </ul>
         </div>
      </div>
   );
};

export default StaffAddForm;
