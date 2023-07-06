import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('book')
   ? JSON.parse(localStorage.getItem('book'))
   : {
        no: 6,
        bookData: [
           { id: 1, genre: '소설', author: '저자1', code: '000001' },
           { id: 2, genre: '수필', author: '저자2', code: '000002' },
           { id: 3, genre: '시', author: '저자3', code: '000003' },
           { id: 4, genre: '에세이', author: '저자4', code: '000004' },
           { id: 5, genre: '고전문학', author: '저자5', code: '000005' },
        ],
     };
const bookSlice = createSlice({
   name: 'book',
   initialState,
   reducers: {
      addBook: (state, action) => {
         state.bookData = [...state.bookData, { ...action.payload, id: state.no++ }];
         localStorage.setItem('book', JSON.stringify(state));
      },
      delBook: (state, action) => {
         state.bookData = state.bookData.filter(item => item.id !== action.payload);
         localStorage.setItem('book', JSON.stringify(state));
      },
      editBook: (state, action) => {
         state.bookData = state.bookData.map(item => (item.id === action.payload.id ? action.payload : item));
         localStorage.setItem('book', JSON.stringify(state));
      },
   },
});
export const { addBook, delBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
