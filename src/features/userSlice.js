import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
  },
  reducers: {
<<<<<<< HEAD
    login: (state, action) => {
      state.value = action.payload;
=======
    login: (state, action) =>{
      state.user = action.payload;
    },
    logout: (state) =>{
      state.user = null;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
>>>>>>> 667a45cf96269c57f2e3937ac7aa337dbddc09c3
    },
  
    logout: (state) => {
      state.user = null;
    },
  },

});

<<<<<<< HEAD
export const { login, logout,  } = userSlice.actions;

=======
export const { increment, decrement, incrementByAmount, login, logout } = userSlice.actions;
>>>>>>> 667a45cf96269c57f2e3937ac7aa337dbddc09c3

//selector
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
