import {configureStore} from "@reduxjs/toolkit";
import AttendanceSlice from "../reducers/AttendanceSlice";
import ReportSlice from "../reducers/ReportSlice";

const store = configureStore({
  reducer: {
    attendance: AttendanceSlice,
    report: ReportSlice,
  },
});

export default store;
