/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const initialSliceState = {
  clientList: [],
  clientProfile: [],
  isLoading: false,
};

export const acmeSlice = createSlice({
  name: 'acmeSliceType',
  initialState: initialSliceState,
  reducers: {
    setClientList: (state, action) => {
      state.clientList = action.payload;
    },
    setClientProfile: (state, action) => {
      state.clientProfile = action.payload;
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setClientList, setIsloading, setClientProfile } =
  acmeSlice.actions;
export default acmeSlice.reducer;
