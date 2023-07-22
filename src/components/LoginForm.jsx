import InputText from "./InputText";
import Button from "./Button";
import Cookies from "js-cookie";
import {Link, useNavigate} from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
      remember: e.target.remember.checked,
      role: "Admin",
    };
    const expire = userData.remember && {expires: 30};
    Cookies.set("username", userData.username, expire);
    Cookies.set("password", userData.password, expire);
    Cookies.set("role", userData.role, expire);
    navigate("/dashboard");
  };
  return (
    <form className="flex flex-col gap-10 justify-center min-h-screen  px-20" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <InputText name="username" label="Username" type="text" />
        <InputText name="password" label="Password" type="password" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center text-sm gap-2">
          <input className="rounded" type="checkbox" name="remember" /> <span>Remember me</span>
        </div>
        <Button type="submit">Sign In</Button>
        <p className="text-sm">
          Don't have an account ?{" "}
          <Link className="text-secondary" to="/register">
            Register Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
