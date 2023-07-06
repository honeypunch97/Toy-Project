import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { PeoPleList } from './styled.jsx/PeopleStyle';
import PeopleListItem from './PeopleListItem';

const PeopleList = memo(() => {
   const { peopleData } = useSelector(state => state.people);
   return (
      <PeoPleList>
         {peopleData.map(item => (
            <PeopleListItem key={item.id} item={item} />
         ))}
      </PeoPleList>
   );
});

export default PeopleList;
