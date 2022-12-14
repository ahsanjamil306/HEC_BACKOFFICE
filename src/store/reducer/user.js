import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

const userDummy = {
  name: 'Ali Kalhoro',
  location: 'Karachi-Pakistan',
  image: {
    uri: 'https://i.pinimg.com/736x/ed/62/d1/ed62d1454afa54e1b50b770778ae21d6.jpg',
  },
  email: 'alikalhoro@gmail.com',
};

const userSlice = createSlice({
  name: 'user',
  initialState: {data: userDummy},
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: state => {
      state.data = {};
    },
    updateUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const userLogin = userSlice.actions.login;
export const userLogout = userSlice.actions.logout;
export const updateUser = userSlice.actions.updateUser;
export default userSlice.reducer;
