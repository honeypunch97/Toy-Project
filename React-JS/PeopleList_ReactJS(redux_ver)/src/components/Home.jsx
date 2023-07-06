import React, { memo } from 'react';
import PeopleList from './PeopleList';

const Home = memo(() => {
   return (
      <div>
         <h2>Home</h2>
         <PeopleList />
      </div>
   );
});

export default Home;
