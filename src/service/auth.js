import Cookies from "js-cookie";
import userData from "../assets/json/user.json";

export const login = (e) => {
  const username = e.target.username.value;
  const password = e.target.password.value;

  const user = userData.find((user) => user.username === username);

  if (user) {
    if (user.password !== password) {
      return {status: 400, message: "password salah"};
    }

    const expire = userData.remember && {expires: 30};

    Cookies.set("username", user.username, expire);
    Cookies.set("password", user.password, expire);
    Cookies.set("role", user.role, expire);

    return {status: 200, message: "berhasil"};
  } else {
    return {status: 404, message: "user tidak ditemukan"};
  }
};
