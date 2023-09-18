import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";
import Button from "../components/Button";
import Cookies from "js-cookie";
import InputText from "../components/InputText";
import LoginText from "../components/LoginText";
import userData from "../assets/json/user.json";

const Login = () => {
  const [errorData, setErrorData] = useState({
    status: null,
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;
    const user = userData.find((user) => user.username === username);
    if (user) {
      if (user.password !== password) {
        return setErrorData({status: 400, message: "The password that you've entered is incorrect."});
      }
      const expire = remember && {expires: 30};
      Cookies.set("username", user.username, expire);
      Cookies.set("password", user.password, expire);
      Cookies.set("role", user.role, expire);
      return setErrorData({status: 200, message: "Success"});
    } else {
      return setErrorData({status: 404, message: "Cannot find user"});
    }
  };
  errorData.status === 200 && navigate("/dashboard");

  return (
    <div className="flex justify-between">
      <LoginText />
      <form className="flex flex-col gap-10 justify-center min-h-screen  px-20" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col pb-2">
            <InputText name="username" label="Username" type="text" />
            {errorData.status === 404 && <p className="text-xs text-red-500">{errorData.message}</p>}
          </div>
          <div className="flex flex-col pb-2">
            <InputText name="password" label="Password" type="password" />
            {errorData.status === 400 && <p className="text-xs text-red-500">{errorData.message}</p>}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center text-sm gap-2">
            <input className="rounded" type="checkbox" name="remember" /> <span>Remember me</span>
          </div>
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
