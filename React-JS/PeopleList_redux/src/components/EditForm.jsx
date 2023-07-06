import React, { memo, useEffect, useState } from 'react';
import { FormContainer } from './styled.jsx/PeopleStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { edit } from '../store/modules/peopleSlice';
import Swal from 'sweetalert2';

const EditForm = memo(() => {
   const { editID } = useParams();
   const { peopleData } = useSelector(state => state.people);
   const dispatch = useDispatch();
   const [editItem, setEditItem] = useState({ id: 0, name: '', job: '', tel: '', img: '', isLike: false });
   const { id, name, job, tel, img, isLike } = editItem;
   const navigate = useNavigate();
   const changeInput = e => {
      const { name, value } = e.target;
      setEditItem({ ...editItem, [name]: value });
   };
   const onSubmit = e => {
      e.preventDefault();
      dispatch(edit(editItem));
      Swal.fire({
         icon: 'success',
         title: '수정 완료',
      });
      navigate('/');
   };
   useEffect(() => {
      setEditItem(peopleData.find(item => item.id === Number(editID)));
   }, [editID]);

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
            <button type="submit">변경</button>
         </div>
      </FormContainer>
   );
});

export default EditForm;
