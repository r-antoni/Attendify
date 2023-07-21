//React Router
import { NavLink, useNavigate } from "react-router-dom";
//Auth
import Auth from "../utils/Auth";
//Cookies
import Cookies from "js-cookie";
//Icons
import AbsenceIcon from "../assets/icons/absence.svg";
import AbsentIcon from "../assets/icons/absentapp.svg";
import AttendanceIcon from "../assets/icons/attendance.svg";
import DashboardIcon from "../assets/icons/dashboard.svg";
import LogoutIcon from "../assets/icons/logout.svg";
import ReportIcon from "../assets/icons/report.svg";
import StudentIcon from "../assets/icons/student.svg";
import SubjectIcon from "../assets/icons/subject.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Auth.logout(navigate);
  };
  const username = Cookies.get("username");

  return (
    <div className="fixed h-full top-16 shadow-lg w-72">
      <div className="flex flex-col justify-between bg-white min-h-screen pl-6 pr-10 pt-6">
        <div className="flex flex-col gap-2">
          {(Auth.adminRole() || Auth.teacherRole()) && (
            <>
              <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Track</h3>
              <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/attendance">
                <img src={AttendanceIcon} />
                Attendance Sheet
              </NavLink>
            </>
          )}
          <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Analyze</h3>
          <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/dashboard">
            <img src={DashboardIcon} />
            Dashboard
          </NavLink>
          {Auth.adminRole() && (
            <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/absence">
              <img src={AbsenceIcon} />
              Absence
            </NavLink>
          )}
          {(Auth.adminRole() || Auth.teacherRole()) && (
            <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/reports">
              <img src={ReportIcon} />
              Reports
            </NavLink>)}
          {Auth.adminRole() && (
            <>
              <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Manage</h3>
              <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/teachers">
                <img src={AbsentIcon} />
                Teachers
              </NavLink>
            </>
          )}
          {(Auth.adminRole() || Auth.teacherRole()) && (
            <>
              {Auth.teacherRole() && (<h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Manage</h3>)}
              <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/students">
                <img src={StudentIcon} />
                Students
              </NavLink>
            </>)}
          {Auth.adminRole() && (
            <>
              <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/subjects">
                <img src={SubjectIcon} />
                Subjects
              </NavLink>
            </>
          )}
          {Auth.studentRole() && (
            <>
              <h3 className="uppercase text-xs px-2 text-[#989797]">Manage</h3>
              <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/absent-app">
                <img src={AbsentIcon} />
                Absent Application
              </NavLink>
            </>
          )}
        </div>
        <div className="fixed bottom-10 ">
          <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">{username}</h3>
          <button
            className="flex gap-2 pl-6 pr-10 py-2 text-title font-medium hover:bg-[#F6F9FF]"
            onClick={handleLogout} >
            <img src={LogoutIcon} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
