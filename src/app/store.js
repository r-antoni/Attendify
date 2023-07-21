import {configureStore} from "@reduxjs/toolkit";
import AttendanceSlice from "../reducers/AttendanceSlice";

const store = configureStore({
  reducer: {
    attendance: AttendanceSlice,
  },
});

export default store;
