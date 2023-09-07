import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("student/getStudent", async () => {
  const {data} = await axios.get("https://64b2a55b38e74e386d555faa.mockapi.io/attedance");
  return data;
});

const initialState = {
  items: [],
  pending: false,
  active: false,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.pending = false;
      state.active = true;
    });
  },
});

export default studentSlice.reducer;
