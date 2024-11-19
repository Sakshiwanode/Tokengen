
import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    authToken: null, 
    userID:undefined
   
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },  
    setCrediencialId: (state, action) => {
      state. userID = action.payload;
    }, 
  },
});

export const { setAuthToken,setCrediencialId } = appStateSlice.actions;

export default appStateSlice.reducer;
