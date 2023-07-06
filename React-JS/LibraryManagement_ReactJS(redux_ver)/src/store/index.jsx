import { configureStore } from '@reduxjs/toolkit';
import book from './modules/bookSlice';
import auth from './modules/authSlice';

export const store = configureStore({ reducer: { book, auth } });
