import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("attendance/getAttendance", async () => {
  const {data} = await axios.get("https://64b9363379b7c9def6c0c250.mockapi.io/report");
  return data;
});

const initialState = {
  items: [],
  pending: false,
  active: false,
};

const reportSlice = createSlice({
  name: "attendance",
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

export default reportSlice.reducer;
