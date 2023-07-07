import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";



const RootLayout = () => {
  return (
    <div className="bg-[#EDF1F7] min-h-screen w-full">
      <Navbar />
      <div>
        <Sidebar />
        <div className="fixed right-0 px-20 pt-28 w-[calc(100vw-18rem)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
