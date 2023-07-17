import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("attedance/getAttedance", async () => {
    const { data } = await axios.get("https://64b2a55b38e74e386d555faa.mockapi.io/attedance");

    return data;
});

const initialState = {
    items: [],
    pending: false,
};

const attendenceSlice = createSlice({
    name: "attedance",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getItems.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(getItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.pending = false;
        });
    },
});

export default attendenceSlice.reducer;