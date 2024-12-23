import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: state => {
      state.isLogin = true;
    },
    logOut: state => {
      state.isLogin = false;
    },
  },
});

export const {login, logOut} = authSlice.actions;

export default authSlice.reducer;
