import { NavLink } from "react-router-dom";
import AttendanceIcon from "../assets/attendance.svg";
import DashboardIcon from "../assets/dashboard.svg";
import ReportIcon from "../assets/report.svg";
import StudentIcon from "../assets/student.svg";
import LogoutIcon from "../assets/logout.svg";

const Sidebar = ({username}) => {
    return (
        <div className="fixed h-full top-16 shadow-lg">
            <div className="flex flex-col justify-between bg-white min-h-screen pl-6 pr-10 pt-6">
                <div className="flex flex-col gap-2">
                    <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Track</h3> 
                    <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/attendance">
                        <img src={AttendanceIcon} />
                        Attendance Sheet
                    </NavLink>

                    <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Analyze</h3>
                    <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/dashboard">
                        <img src={DashboardIcon} />
                        Dashboard
                    </NavLink>
                    <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/report">
                        <img src={ReportIcon} />
                        Report
                    </NavLink>

                    <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Manage</h3>
                    <NavLink className="flex gap-2 px-4 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/students">
                        <img src={StudentIcon} />
                        Students
                    </NavLink>
                </div>

                <div className="fixed bottom-10 ">
                    <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">{username}</h3>
                    <NavLink className="flex gap-2 pl-6 pr-10 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/">
                        <img src={LogoutIcon} />
                        Logout
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
