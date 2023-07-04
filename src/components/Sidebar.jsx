import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-start bg-white w-72 min-h-screen gap-3 pt-8">
            <div className="px-5">
                <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Track</h3>
                <NavLink className="flex gap-2 px-2 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/attendance"><img
                        src="https://freeimghost.net/images/2023/06/15/lucide_file-spreadsheet.png"
                        alt="lucide_file-spreadsheet.png" border="0" /> Attendance Sheet</NavLink>
            </div>
            <div className="px-5">
                <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Analyze</h3>
                <NavLink className="flex gap-2 px-2 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/dashboard"><img
                        src="https://freeimghost.net/images/2023/06/15/material-symbols_table-chart-view-outline-rounded.png"
                        alt="material-symbols_table-chart-view-outline-rounded.png" border="0" />Dashboard</NavLink>
                <NavLink className="flex gap-2 px-2 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/report"><img
                        src="https://freeimghost.net/images/2023/06/15/carbon_report.png" alt="carbon_report.png"
                        border="0" /> Report</NavLink>
            </div>
            <div className="px-5">
                <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Manage</h3>
                <NavLink className="flex gap-2 px-2 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/"><img
                        src="https://freeimghost.net/images/2023/06/15/ph_student-bold.png" alt="ph_student-bold.png"
                        border="0" /> Students</NavLink>
            </div>
            <div className="px-5">
                <h3 className="uppercase text-xs px-2 py-2 text-[#989797]">Username</h3>
                <NavLink className="flex gap-2 px-2 py-2 text-title font-medium hover:bg-[#F6F9FF]" to="/"><img
                        src="https://freeimghost.net/images/2023/06/15/icon-park-outline_logout.png"
                        alt="icon-park-outline_logout.png" border="0" /> Logout</NavLink>
            </div>
        </div>
    );
}

export default Sidebar;