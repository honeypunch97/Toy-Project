import React, { memo } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const MegaBoxItem = memo(({ item, onModal, toggleLike }) => {
   const { movieCd, rank, movieNm, imageURL, agelimit, salesShare, openDt, likeCnt, isImax, islike, story } = item;
   return (
      <li data-rank={rank}>
         <div className="img-box" onClick={() => onModal(item)}>
            <img src={imageURL} alt={movieNm} />
            <div className="desc-box">{story}</div>
         </div>
         <div className="title-box">
            <img src={agelimit} alt="연령제한" />
            <strong>{movieNm}</strong>
         </div>
         <div className="info-box">
            <span>예매율 {salesShare}%</span>
            <span>개봉일 {openDt}</span>
         </div>
         <div className="btn-box">
            <button onClick={() => toggleLike(movieCd)}>
               {islike ? (
                  <AiFillHeart style={{ fontSize: 20, marginRight: 3 }} />
               ) : (
                  <AiOutlineHeart style={{ fontSize: 20, marginRight: 3 }} />
               )}
               {likeCnt > 1000 ? `${Math.floor(likeCnt / 100) / 10}k` : likeCnt}
            </button>
            <button style={{ width: isImax ? 74 : 150 }}>예매</button>
            {isImax && (
               <button>
                  <img src="./images/dolby 버튼.png" alt="" />
               </button>
            )}
         </div>
      </li>
   );
});

export default MegaBoxItem;
