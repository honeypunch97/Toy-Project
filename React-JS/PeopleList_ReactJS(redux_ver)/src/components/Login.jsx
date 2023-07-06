import React, { memo, useEffect, useState } from 'react';
import { FormContainer, LoginContainer } from './styled.jsx/PeopleStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/modules/authSlice';
import Swal from 'sweetalert2';

const Login = memo(() => {
   const { user } = useSelector(state => state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [loginUser, setLoginUser] = useState({ email: '', pw: '' });
   const { email, pw } = loginUser;

   const changeInput = e => {
      const { name, value } = e.target;
      setLoginUser({ ...loginUser, [name]: value });
   };
   const onSubmit = e => {
      e.preventDefault();
      dispatch(login(loginUser));
   };
   useEffect(() => {
      if (user) {
         navigate('/');
         Swal.fire({
            icon: 'success',
            title: '로그인 성공',
            showConfirmButton: false,
            timer: 1500,
         });
      }
   }, [user]);
   return (
      <LoginContainer>
         <h2>Login</h2>
         <FormContainer onSubmit={onSubmit}>
            <label>이메일</label>
            <input
               type="email"
               placeholder="이메일을 입력하세요"
               name="email"
               value={email}
               onChange={changeInput}
               required
            />
            <label>비밀번호</label>
            <input
               type="password"
               placeholder="비밀번호를 입력하세요(1234)"
               name="pw"
               value={pw}
               onChange={changeInput}
               required
            />
            <div className="btn-wrap">
               <button type="submit">로그인</button>
            </div>
         </FormContainer>
      </LoginContainer>
   );
});

export default Login;
