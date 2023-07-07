import InputButton from "./reuseable/InputButton";
import InputText from "./reuseable/InputText";
import Button from "./reuseable/Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const userData = Object.entries(formData);
		Cookies.set("token", btoa(userData.password));
		navigate("/dashboard");
	};
  return (
    <form className="flex flex-col gap-10 justify-center min-h-screen px-20" onSubmit={handleSubmit}>
      <div className="flex gap-10">
        <InputButton
          name="Teacher"
          textcolor="text-secondary"
          background="bg-transparent"
          border="border-[1px] border-secondary"
        />
        <InputButton
          name="Admin"
          textcolor="text-secondary"
          background="bg-transparent"
          border="border-[1px] border-secondary"
        />
      </div>
      <div className="flex flex-col gap-6">
        <InputText name="username" label="Username" type="text" />
        <InputText name="password" label="Password" type="password" />
      </div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center text-sm gap-2">
          <input className="rounded" type="checkbox" /> <span>Remember me</span>
        </div>
        <Button type="submit">Sign In</Button>
        <a className="text-slate-500 text-xs font-normal" href="/">
          Forgot Password ?
        </a>
        <p className="text-sm">
          Dont have an account?
          <a className="text-blue-400" href="/">
            Register Here
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
