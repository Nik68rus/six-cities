import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import appReducer from './app/app';
import userReducer from './user/user';
import dataReducer from './data/data';

export const rootReducer = combineReducers({
  [NameSpace.App]: appReducer,
  [NameSpace.Data]: dataReducer,
  [NameSpace.User]: userReducer,
});
