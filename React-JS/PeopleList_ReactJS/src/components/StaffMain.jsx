import React, { useRef, useState } from 'react';
import StaffList from './StaffList';
import datalist from '../assets/api/StaffData';
import StaffAddForm from './StaffAddForm';
import './style.scss';

const StaffMain = () => {
   const [data, setData] = useState(datalist);
   const [isAddFormShow, setIsAddFormShow] = useState(false);

   const idNum = useRef(data.length + 1);

   const onRemove = () => setData([]);
   const onReset = () => setData(datalist);
   const toggleIsHeart = id => {
      setData(data.map(item => (item.id === id ? { ...item, isHeart: !item.isHeart } : item)));
   };
   const onAdd = staff => setData([...data, { id: idNum.current++, ...staff }]);
   const onDel = id => setData(data.filter(item => item.id !== id));
   const toggleAddForm = () => setIsAddFormShow(!isAddFormShow);

   return (
      <>
         <div className="wrap">
            {!isAddFormShow ? (
               <>
                  <p className="btn-wrap">
                     <button onClick={onRemove}>명단삭제</button>
                     <button onClick={onReset}>명단초기화</button>
                  </p>
                  <StaffList data={data} onDel={onDel} toggleIsHeart={toggleIsHeart} />
               </>
            ) : (
               <StaffAddForm onAdd={onAdd} />
            )}
            <button className={isAddFormShow ? 'toggle-add-form on' : 'toggle-add-form'} onClick={toggleAddForm}>
               <i className={isAddFormShow ? 'xi-minus' : 'xi-plus'}></i>
            </button>
         </div>
      </>
   );
};

export default StaffMain;
