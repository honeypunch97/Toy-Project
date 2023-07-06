import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styled/BookStyle';
import Nav from './Nav';

const Header = memo(() => {
   return (
      <HeaderContainer>
         <h1>
            <Link to={'/'}>북카페 도서 관리 시스템</Link>
         </h1>
         <Nav />
      </HeaderContainer>
   );
});

export default Header;
