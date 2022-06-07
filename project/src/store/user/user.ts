import { TUserData } from './../../types/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TUserState } from '../../types/store';
import { AuthorizationStatus, NameSpace } from '../../utils/const';

const initialState: TUserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined,
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUser: (state, action: PayloadAction<TUserData>) => {
      state.user = action.payload;
    },
  },
});

export const {setAuthStatus, setUser} = user.actions;
export default user.reducer;
