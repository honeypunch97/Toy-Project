import React, { memo } from 'react';
import { MegaBoxListContainer } from '../styled/megaBoxStyle';
import MegaBoxItem from './MegaBoxItem';

const MegaBoxList = memo(({ data, onModal, toggleLike }) => {
   return (
      <MegaBoxListContainer>
         {data.map(item => (
            <MegaBoxItem key={item.movieCd} item={item} onModal={onModal} toggleLike={toggleLike} />
         ))}
      </MegaBoxListContainer>
   );
});

export default MegaBoxList;
