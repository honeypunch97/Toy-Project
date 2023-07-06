import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Nav = memo(() => {
   const { user } = useSelector(state => state.auth);
   const location = useLocation();
   const { pathname } = location;
   return (
      <nav>
         <ul>
            <li className={pathname === '/' ? 'on' : ''}>
               <Link to={'/'}>Home</Link>
            </li>
            {user && (
               <li className={pathname === '/add' ? 'on' : ''}>
                  <Link to={'/add'}>Add</Link>
               </li>
            )}
            {user ? (
               <li className={pathname === '/logout' ? 'on' : ''}>
                  <Link to={'/logout'}>Logout</Link>
               </li>
            ) : (
               <li className={pathname === '/login' ? 'on' : ''}>
                  <Link to={'/login'}>Login</Link>
               </li>
            )}
         </ul>
      </nav>
   );
});

export default Nav;
