import { configureStore } from '@reduxjs/toolkit';
import people from './modules/peopleSlice';

export const store = configureStore({
   reducer: { people },
});
