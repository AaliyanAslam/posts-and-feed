import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers : {
    addUser:  (state, action) => {
        state.user = action.payload;
      },
  }
});


export const {addUser} = authSlice.actions;
export default  authSlice.reducer;