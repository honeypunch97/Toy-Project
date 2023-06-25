import React, { memo } from 'react';
import { MegaBoxModalContainer } from '../styled/megaBoxStyle';
import { AiOutlineClose } from 'react-icons/ai';

const MegaBoxModal = memo(({ modalItem, offModal }) => {
   const {
      rank,
      rankInten,
      rankOldAndNew,
      movieNm,
      openDt,
      salesAmt,
      salesShare,
      salesInten,
      salesChange,
      salesAcc,
      audiCnt,
      audiInten,
      audiChange,
      audiAcc,
      scrnCnt,
      showCnt,
      imageURL,
      age,
   } = modalItem;
   return (
      <MegaBoxModalContainer>
         <div className="bg" onClick={offModal}></div>
         <div className="content-box">
            <button onClick={offModal}>
               <AiOutlineClose />
            </button>
            <div className="img-box">
               <img src={imageURL} alt={movieNm} />
            </div>
            <div className="text-box">
               <h2>{movieNm}</h2>
               <span>연령제한 : {age}</span>
               <span>개봉일 : {openDt}</span>
               <span>박스오피스 순위 : {rank}</span>
               <span>전일대비 순위 : {rankInten}</span>
               <span>기존/신규 : {rankOldAndNew === 'OLD' ? '기존' : '신규'}</span>
               <span>해당일 매출액 : {salesAmt}</span>
               <span>해당일 상영작의 매출총액 대비 해당 영화의 매출비율 : {salesShare}</span>
               <span>전일 대비 매출액 증감분 : {salesInten}</span>
               <span>전일 대비 매출액 증감 비율 : {salesChange}</span>
               <span>누적매출액 : {salesAcc}</span>
               <span>해당일의 관객수 : {audiCnt}</span>
               <span>전일 대비 관객수 증감분 : {audiInten}</span>
               <span>전일 대비 관객수 증감 비율 : {audiChange}</span>
               <span>누적관객수 : {audiAcc}</span>
               <span>해당일자에 상영한 스크린수 : {scrnCnt}</span>
               <span>해당일자에 상영된 횟수 : {showCnt}</span>
            </div>
         </div>
      </MegaBoxModalContainer>
   );
});

export default MegaBoxModal;
