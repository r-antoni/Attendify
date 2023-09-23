import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-primary bg-opacity-10 min-h-screen w-full">
      <Navbar homemenu="hidden" />
      <div>
        <Sidebar />
        <div className="fixed h-full right-0 w-[calc(100vw-18rem)]">
          <div className="px-20 py-28 h-full max-h-full overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
