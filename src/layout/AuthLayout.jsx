import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-primary bg-opacity-10">
      <Navbar visibility="hidden" homemenu="hidden" />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
