import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MegaBoxContainer } from '../styled/megaBoxStyle';
import MegaBoxForm from './MegaBoxForm';
import MegaBoxList from './MegaBoxList';
import MegaBoxModal from './MegaBoxModal';

const MegaBox = () => {
   const [dataList, setDataList] = useState([]);
   const [data, setData] = useState([]);
   const [text, setText] = useState('');
   const [modalItem, setModalItem] = useState({});
   const [isModalShow, setIsModalShow] = useState(false);
   const onModal = item => {
      setModalItem(item);
      setIsModalShow(true);
   };
   const offModal = () => {
      setIsModalShow(false);
   };
   const onSearch = searchText => {
      setData(dataList.filter(item => item.movieNm.toUpperCase().includes(searchText.toUpperCase())));
   };
   const filterForScreening = isScreening => {
      if (isScreening === 'ALL') {
         setData(dataList);
      } else {
         setData(dataList.filter(item => item.isScreening === isScreening));
      }
   };
   const toggleLike = id => {
      setData(
         data.map(item =>
            item.movieCd === id
               ? item.islike
                  ? { ...item, islike: false, likeCnt: item.likeCnt - 1 }
                  : { ...item, islike: true, likeCnt: item.likeCnt + 1 }
               : item,
         ),
      );
      setDataList(
         dataList.map(item =>
            item.movieCd === id
               ? item.islike
                  ? { ...item, islike: false, likeCnt: item.likeCnt - 1 }
                  : { ...item, islike: true, likeCnt: item.likeCnt + 1 }
               : item,
         ),
      );
   };
   useEffect(() => {
      const url = `https://gist.githubusercontent.com/habi-er/ab331c60d55c02deb91175ad08c77296/raw/b3cf85feff299733c284d6a20336b69d48c3eb2f/movieList.json`;
      axios.get(url).then(res => {
         setDataList(res.data);
         setData(res.data);
      });
   }, []);
   return (
      <MegaBoxContainer>
         <h1>
            <a href="#">
               <img src="./images/logo_new2.png" alt="Mega Box" />
            </a>
         </h1>
         <MegaBoxForm
            onSearch={onSearch}
            text={text}
            setText={setText}
            data={data}
            filterForScreening={filterForScreening}
         />
         <MegaBoxList data={data} onModal={onModal} toggleLike={toggleLike} />
         {isModalShow && <MegaBoxModal modalItem={modalItem} offModal={offModal} />}
      </MegaBoxContainer>
   );
};

export default MegaBox;
