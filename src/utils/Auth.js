import Cookies from "js-cookie";
import userData from "../assets/json/user.json";

const Auth = {
  authenticated: () => {
    const user = userData.find(
      (obj) => obj.username === Cookies.get("username") && obj.password === Cookies.get("password"),
    );
    return user;
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
