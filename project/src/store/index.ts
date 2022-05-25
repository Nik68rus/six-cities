import { configureStore } from '@reduxjs/toolkit';
import { cityReducer } from './reducer';

export const store = configureStore({reducer: cityReducer});
