import React from 'react';
import ContentProfile from './ContentProfile';
import ContentWorks from './ContentWorks';
import ContentRecommendedVideo from './ContentRecommendedVideo';
import ContentNews from './ContentNews';

const MainContent = ({ data, onSelect, select }) => {
   const { memberSel, contentSel } = select;
   const item = data.find(item => item.id === memberSel);
   const { profile, profileImg, works, recommendedVideo, news } = item;
   return (
      <div className="content-box">
         <ul className="content-list">
            <li data-category="contentSel" data-id="1" className={contentSel === 1 ? 'on' : ''} onClick={onSelect}>
               프로필
            </li>
            <li data-category="contentSel" data-id="2" className={contentSel === 2 ? 'on' : ''} onClick={onSelect}>
               작품활동
            </li>
            <li data-category="contentSel" data-id="3" className={contentSel === 3 ? 'on' : ''} onClick={onSelect}>
               추천영상
            </li>
            <li data-category="contentSel" data-id="4" className={contentSel === 4 ? 'on' : ''} onClick={onSelect}>
               뉴스
            </li>
         </ul>
         {contentSel === 1 && (
            <ContentProfile profile={profile} profileImg={profileImg} select={select} onSelect={onSelect} />
         )}
         {contentSel === 2 && <ContentWorks works={works} select={select} onSelect={onSelect} />}
         {contentSel === 3 && (
            <ContentRecommendedVideo recommendedVideo={recommendedVideo} select={select} onSelect={onSelect} />
         )}
         {contentSel === 4 && <ContentNews news={news} />}
      </div>
   );
};

export default MainContent;
