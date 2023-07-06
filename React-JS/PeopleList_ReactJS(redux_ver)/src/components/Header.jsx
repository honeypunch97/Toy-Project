import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { HeaderContainer } from './styled.jsx/PeopleStyle';

const Header = memo(() => {
   return (
      <HeaderContainer>
         <h1>
            <Link to={'/'}>직원명단</Link>
         </h1>
         <Nav />
      </HeaderContainer>
   );
});

export default Header;
