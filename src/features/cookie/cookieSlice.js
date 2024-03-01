import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfCookies: 20,
};

const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCookies--;
    },
    restocked: (state, action) => {
      state.numOfCookies += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfCookies--;
    });
  },
});

export default cookieSlice.reducer;
export const { ordered, restocked } = cookieSlice.actions;
