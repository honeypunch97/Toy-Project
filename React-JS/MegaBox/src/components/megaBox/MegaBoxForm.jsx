import React, { memo, useRef, useState } from 'react';
import { MegaBoxFormContainer } from '../styled/megaBoxStyle';

const MegaBoxForm = memo(({ onSearch, text, setText, data, filterForScreening }) => {
   const inputRef = useRef(null);
   const logId = useRef('1');
   const [log, setLog] = useState([]);
   const [isShowLog, seIsShowLog] = useState(false);
   const onSubmit = e => {
      e.preventDefault();
      onSearch(text);
      text !== '' && setLog([{ id: logId.current++, text }, ...log].slice(0, 5));
      inputRef.current.focus();
      setText('');
   };
   const searchOnLog = logText => {
      onSearch(logText);
   };
   const onDelLog = id => {
      setLog(log.filter(item => item.id !== id));
   };
   const onShowLog = () => {
      seIsShowLog(true);
   };
   const offShowLog = () => {
      setTimeout(() => {
         seIsShowLog(false);
      }, 200);
   };
   return (
      <div>
         <MegaBoxFormContainer>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  placeholder="영화 제목을 입력하세요"
                  ref={inputRef}
                  value={text}
                  onChange={e => setText(e.target.value)}
                  onFocus={onShowLog}
                  onBlur={offShowLog}
               />
               <button>검색</button>
            </form>
            <div className="filter-box">
               <p>
                  <button onClick={() => filterForScreening('ALL')}>전체</button>
                  <button onClick={() => filterForScreening('현재상영작')}>상영중</button>
                  <button onClick={() => filterForScreening('상영예정작')}>상영예정</button>
                  <button onClick={() => filterForScreening('특별상영')}>특별상영</button>
               </p>
               <p>{data.length}개의 영화가 검색되었습니다.</p>
            </div>
            {isShowLog && (
               <ul className="log-box">
                  {log.map(item => (
                     <li key={item.id}>
                        <span
                           onClick={() => {
                              searchOnLog(item.text);
                           }}>
                           {item.text}
                        </span>
                        <button onClick={() => onDelLog(item.id)}>x</button>
                     </li>
                  ))}
               </ul>
            )}
         </MegaBoxFormContainer>
      </div>
   );
});
export default MegaBoxForm;
