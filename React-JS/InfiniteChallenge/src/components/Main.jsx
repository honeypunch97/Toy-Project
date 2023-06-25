import React, { useState } from 'react';
import memberData from '../assets/api/memberData';
import MemberList from './MemberList';
import './style.scss';
import MainContent from './MainContent';

const Main = () => {
   const logoUrl = './images/common/무한도전로고.png';
   const [data, setData] = useState(memberData);
   const [select, setSelect] = useState({
      memberSel: data[0].id,
      contentSel: 1,
      profileImgSel: 1,
      worksSel: 1,
   });
   const onSelect = e => {
      const id = Number(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.category;
      if (category === 'memberSel') {
         setSelect({
            memberSel: id,
            contentSel: 1,
            profileImgSel: 1,
            worksSel: 1,
         });
      } else {
         setSelect({ ...select, [category]: id });
      }
   };
   return (
      <div className="wrap">
         <div className="inner">
            <h1>
               <a href="#">
                  <img src={logoUrl} alt="무한도전" />
               </a>
            </h1>
            <MemberList data={data} onSelect={onSelect} select={select} />
            <MainContent data={data} onSelect={onSelect} select={select} />
         </div>
      </div>
   );
};

export default Main;
