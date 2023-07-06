import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Nav = memo(() => {
   return (
      <nav>
         <ul>
            <li>
               <Link to={'/'}>Home</Link>
            </li>
            <li>
               <Link to={'/add'}>Add</Link>
            </li>
            <li>
               <Link to={'/login'}>Login</Link>
            </li>
            <li>
               <Link to={'/logout'}>Logout</Link>
            </li>
         </ul>
      </nav>
   );
});

export default Nav;
