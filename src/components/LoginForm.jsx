import InputText from "./InputText";
import Button from "./Button";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/auth";
import {useState} from "react";

const LoginForm = () => {
  const [errorData, setErrorData] = useState({
    status: null,
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorData((data) => ({...data, status: null, message: ""}));

    const auth = login(e);

    if (auth.status === 200) {
      navigate("/dashboard");
    } else {
      setErrorData((data) => ({...data, status: auth.status, message: auth.message}));
    }
  };

  return (
    <form className="flex flex-col gap-10 justify-center min-h-screen  px-20" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <InputText name="username" label="Username" type="text" />
        <InputText name="password" label="Password" type="password" />
      </div>
      <div>{errorData.status !== 200 && <p className="text-red-500">{errorData.message}</p>}</div>
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
