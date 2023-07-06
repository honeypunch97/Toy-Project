import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   user: localStorage.getItem('user') || null,
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login(state, action) {
         const { email, pw } = action.payload;
         if (pw === '1234') {
            state.user = email;
            localStorage.setItem('user', email);
         }
      },
      logout(state) {
         state.user = null;
         localStorage.removeItem('user');
      },
   },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
