import {configureStore} from "@reduxjs/toolkit";
import AttendanceSlice from "../reducers/AttendanceSlice";
import ReportSlice from "../reducers/ReportSlice";
import StudentSlice from "../reducers/StudentSlice";

const store = configureStore({
  reducer: {
    attendance: AttendanceSlice,
    report: ReportSlice,
    student: StudentSlice,
  },
});

export default store;
