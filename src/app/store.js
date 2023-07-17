import { configureStore } from "@reduxjs/toolkit";
import AttendanceSlice from "../reducers/AttendanceSlice";

const store = configureStore({
    reducer: {
        attedance: AttendanceSlice,
    },
});

export default store;