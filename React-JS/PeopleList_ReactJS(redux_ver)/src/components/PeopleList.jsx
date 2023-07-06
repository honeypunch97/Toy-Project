import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ListContainer } from './styled.jsx/PeopleStyle';
import PeopleListItem from './PeopleListItem';

const PeopleList = memo(() => {
   const { peopleData } = useSelector(state => state.people);
   return (
      <ListContainer>
         {peopleData.map(item => (
            <PeopleListItem key={item.id} item={item} />
         ))}
      </ListContainer>
   );
});

export default PeopleList;
