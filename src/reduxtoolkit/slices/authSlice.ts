import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserData {
  [key: string]: any; // Adjust this to the actual structure of your user data
}

interface AuthState {
  isLogin: boolean;
  token: string;
  userData: UserData;
}

const initialState: AuthState = {
  isLogin: false,
  token: '',
  userData: {},
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{data: {token: string; user: UserData}}>,
    ) {
      // const {token, user} = action?.payload?.data;
      // state.token = token;
      // state.userData = user;
      state.isLogin = true;
    },
    logOut(state) {
      state.isLogin = false;
      state.token = '';
      state.userData = {};
    },
  },
});

export const {login, logOut} = authSlice.actions;
export default authSlice.reducer;
