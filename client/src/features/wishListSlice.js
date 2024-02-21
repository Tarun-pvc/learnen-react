// roomSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishList:[],
  user:[]
};

const reducer = createSlice({
  name: 'room',
  initialState,
  reducers: {
    addToList:(state,action) => {
        state.wishList.push(action.payload);
    },
    removeFromList: (state, action) => {
      console.log(action.payload);
      state.wishList = state.wishList.filter(item => item.name !== action.payload);
    },
    addUser:(state,action) => {
        state.user = (action.payload);
    },
    removeUser:(state,action) => {
        state.user = [];
    }
  },
});

export const { addToList, removeFromList , addUser , removeUser } = reducer.actions;
export default reducer.reducer;
