import React, { memo, useEffect, useState } from 'react';
import { FormContainer } from './styled/BookStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/modules/authSlice';
const Login = memo(() => {
   const dispatch = useDispatch();
   const { user } = useSelector(state => state.auth);
   const [loginUser, setLoginUser] = useState({ email: '', pw: '' });
   const { email, pw } = loginUser;
   const navigate = useNavigate();
   const changeInput = e => {
      const { name, value } = e.target;
      setLoginUser({ ...loginUser, [name]: value });
   };
   const onSubmit = e => {
      e.preventDefault();
      dispatch(login(loginUser));
   };
   useEffect(() => {
      if (user) navigate('/');
   }, [user]);
   return (
      <>
         <h2>Login</h2>
         <FormContainer onSubmit={onSubmit}>
            <label>Email</label>
            <input type="email" placeholder="이메일 입력" required name="email" value={email} onChange={changeInput} />
            <label>PassWord</label>
            <input type="text" placeholder="비밀번호 입력(1234)" required name="pw" value={pw} onChange={changeInput} />
            <button>로그인</button>
         </FormContainer>
      </>
   );
});

export default Login;
