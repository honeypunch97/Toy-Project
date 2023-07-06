import { configureStore } from '@reduxjs/toolkit';
import people from './modules/peopleSlice';
import auth from './modules/authSlice';

export const store = configureStore({
   reducer: { people, auth },
});
