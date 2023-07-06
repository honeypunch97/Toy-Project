import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoutContainer } from './styled/BookStyle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/modules/authSlice';

const Logout = memo(() => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector(state => state.auth);
   useEffect(() => {
      if (user === null) {
         navigate('/');
      }
   }, [user]);
   return (
      <>
         <h2>Logout</h2>
         <LogoutContainer>
            <p>이메일 : {user}</p>
            <div className="info-box">
               <strong>로그아웃 하시겠습니까?</strong>
               <p className="btn-wrap">
                  <button onClick={() => dispatch(logout())}>예</button>
                  <button onClick={() => navigate('/')}>아니요</button>
               </p>
            </div>
         </LogoutContainer>
      </>
   );
});

export default Logout;
