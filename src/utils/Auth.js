import Cookies from "js-cookie";

const Auth = {
  authenticated: () => {
    return Cookies.get("username");
  },
  logout: (navigate) => {
    Cookies.remove("username");
    Cookies.remove("password");
    Cookies.remove("role");
    navigate("/");
  },
  adminRole: () => {
    const role = Cookies.get("role");
    return role === "Admin";
  },
  studentRole: () => {
    const role = Cookies.get("role");
    return role === "Student";
  },
  teacherRole: () => {
    const role = Cookies.get("role");
    return role === "Teacher";
  },
};

export default Auth;
