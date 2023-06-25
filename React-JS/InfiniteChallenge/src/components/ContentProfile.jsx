import React from 'react';

const ContentProfile = ({ profile, profileImg, select, onSelect }) => {
   const { profileImgSel } = select;
   return (
      <div className="profile-container">
         <div className="img-container">
            <img className="big-img" src={profileImg.find(item => item.id === profileImgSel).img} alt="" />
            <ul className="thum-img-list">
               {profileImg.map(item => (
                  <li
                     key={item.id}
                     className={item.id === profileImgSel ? 'on' : ''}
                     data-id={item.id}
                     data-category="profileImgSel"
                     onClick={onSelect}>
                     <img src={item.img} alt="" />
                  </li>
               ))}
            </ul>
         </div>
         <div className="text-container">
            {profile.map(item => (
               <p key={item.id}>
                  <span>{item.category}</span>
                  <span>{item.data}</span>
               </p>
            ))}
         </div>
      </div>
   );
};

export default ContentProfile;
