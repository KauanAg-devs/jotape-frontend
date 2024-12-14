import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  password: null,
  email: null,
  image: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.image = action.payload.image

    },
    clearUser: (state) => {
      state.name = null;
      state.password = null;
      state.email = null;
      state.image = null
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
