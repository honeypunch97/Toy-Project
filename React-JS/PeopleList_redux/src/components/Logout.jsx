import React, { memo, useEffect } from 'react';
import { LogoutContainer } from './styled.jsx/PeopleStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/modules/authSlice';
import Swal from 'sweetalert2';

const Logout = memo(() => {
   const { user } = useSelector(state => state.auth);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   useEffect(() => {
      if (!user) {
         navigate('/');
         Swal.fire({
            icon: 'success',
            title: '로그아웃 성공',
         });
      }
   }, [user]);
   return (
      <LogoutContainer>
         <h2>Logout</h2>
         <p>
            <span>{user}</span>님 안녕하세요
         </p>
         <div className="info-box">
            <strong>로그아웃 하시겠습니까?</strong>
            <div className="btn-wrap">
               <button onClick={() => dispatch(logout())}>예</button>
               <button>
                  <Link to={'/'}>아니오</Link>
               </button>
            </div>
         </div>
      </LogoutContainer>
   );
});

export default Logout;
