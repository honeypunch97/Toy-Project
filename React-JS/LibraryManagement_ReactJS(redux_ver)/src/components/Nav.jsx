import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Nav = memo(() => {
   const { user } = useSelector(state => state.auth);
   const location = useLocation();
   return (
      <nav>
         <ul>
            <li className={location.pathname === '/' ? 'on' : ''}>
               <Link to={'/'}>Home</Link>
            </li>
            {user && (
               <li className={location.pathname === '/add' ? 'on' : ''}>
                  <Link to={'/add'}>Add</Link>
               </li>
            )}
            {user ? (
               <li className={location.pathname === '/logout' ? 'on' : ''}>
                  <Link to={'/logout'}>Logout</Link>
               </li>
            ) : (
               <li className={location.pathname === '/login' ? 'on' : ''}>
                  <Link to={'/login'}>Login</Link>
               </li>
            )}
         </ul>
      </nav>
   );
});

export default Nav;
