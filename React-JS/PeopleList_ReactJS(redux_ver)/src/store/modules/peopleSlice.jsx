import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   no: localStorage.getItem('no') || 5,
   peopleData: localStorage.getItem('peopleData')
      ? JSON.parse(localStorage.getItem('peopleData'))
      : [
           // id:0,name:'',job:'',tel:'',img:'',isLike:false
           {
              id: 1,
              name: '유재석',
              job: '웹퍼블리셔',
              tel: '010-0000-0000',
              img: 'https://i.pinimg.com/564x/de/30/41/de3041c089c6a256b93d0bdedea7c744.jpg',
              isLike: false,
           },
           {
              id: 2,
              name: '박명수',
              job: '프론트엔드',
              tel: '010-0000-0000',
              img: 'https://i.pinimg.com/564x/44/13/e3/4413e39fb1642de58bb0f47447bbc8f6.jpg',
              isLike: false,
           },
           {
              id: 3,
              name: '정준하',
              job: '백엔드',
              tel: '010-0000-0000',
              img: 'https://i.pinimg.com/564x/d9/fc/46/d9fc465cbb9158fe8fd76e703a99d9e3.jpg',
              isLike: false,
           },
           {
              id: 4,
              name: '정형돈',
              job: '기획자',
              tel: '010-0000-0000',
              img: 'https://i.pinimg.com/564x/3e/4c/20/3e4c2067bdb0fe681d9578deab02d1b5.jpg',
              isLike: false,
           },
        ],
   imgList: [
      'https://i.pinimg.com/564x/de/30/41/de3041c089c6a256b93d0bdedea7c744.jpg',
      'https://i.pinimg.com/564x/44/13/e3/4413e39fb1642de58bb0f47447bbc8f6.jpg',
      'https://i.pinimg.com/564x/d9/fc/46/d9fc465cbb9158fe8fd76e703a99d9e3.jpg',
      'https://i.pinimg.com/564x/3e/4c/20/3e4c2067bdb0fe681d9578deab02d1b5.jpg',
   ],
};

export const peopleSlice = createSlice({
   name: 'people',
   initialState,
   reducers: {
      add: (state, action) => {
         state.peopleData = [...state.peopleData, { ...action.payload, id: state.no++ }];
         localStorage.setItem('peopleData', JSON.stringify(state.peopleData));
      },
      del: (state, action) => {
         state.peopleData = state.peopleData.filter(item => item.id !== action.payload);
         localStorage.setItem('peopleData', JSON.stringify(state.peopleData));
      },
      edit: (state, action) => {
         state.peopleData = state.peopleData.map(item => (item.id === action.payload.id ? action.payload : item));
         localStorage.setItem('peopleData', JSON.stringify(state.peopleData));
      },
      toggleLike: (state, action) => {
         state.peopleData = state.peopleData.map(item =>
            item.id === action.payload ? { ...item, isLike: !item.isLike } : item,
         );
         localStorage.setItem('peopleData', JSON.stringify(state.peopleData));
      },
   },
});
export const { add, del, edit, toggleLike } = peopleSlice.actions;
export default peopleSlice.reducer;
