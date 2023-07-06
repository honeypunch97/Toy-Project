import React, { memo, useState } from 'react';
import { FormContainer } from './styled.jsx/PeopleStyle';
import { useDispatch } from 'react-redux';
import { add } from '../store/modules/peopleSlice';
import { useNavigate } from 'react-router-dom';

const AddForm = memo(() => {
   const dispatch = useDispatch();
   const [addItem, setAddItem] = useState({ name: '', job: '', tel: '', img: '' });
   const { name, job, tel, img } = addItem;
   const navigate = useNavigate();
   const changeInput = e => {
      const { name, value } = e.target;
      setAddItem({ ...addItem, [name]: value });
   };
   const onSubmit = e => {
      e.preventDefault();
      dispatch(add(addItem));
      setAddItem({ name: '', job: '', tel: '', img: '' });
      Swal.fire({
         icon: 'success',
         title: '추가 완료',
         showConfirmButton: false,
         timer: 1500,
      });
      navigate('/');
   };
   return (
      <FormContainer className="add-form" onSubmit={onSubmit}>
         <label>이름</label>
         <input type="text" name="name" required placeholder="이름을 입력하세요" onChange={changeInput} value={name} />
         <label>직업</label>
         <input type="text" name="job" required placeholder="직업을 입력하세요" onChange={changeInput} value={job} />
         <label>연락처</label>
         <input type="text" name="tel" required placeholder="연락처를 입력하세요" onChange={changeInput} value={tel} />
         <label>대표 이미지</label>
         <input
            type="text"
            name="img"
            required
            placeholder="대표이미지 주소를 입력하세요"
            onChange={changeInput}
            value={img}
         />
         <div className="btn-wrap">
            <button type="submit">등록</button>
         </div>
      </FormContainer>
   );
});

export default AddForm;
