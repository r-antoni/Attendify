import InputText from "./reuseable/InputText";
import Button from "./reuseable/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
      <form className="flex flex-col gap-10 justify-center min-h-screen px-20">
        <div className="flex flex-col gap-6">
          <InputText
            name="username"
            label="Username"
            type="text"
            width="w-88"
          />
          <InputText
            name="email"
            label="Email"
            type="email"
            width="w-88"
          />
          <InputText
            name="password"
            label="Password"
            type="password"
            width="w-88"
          />
          <InputText
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            width="w-88"
          />
        </div>
        
        <div className="flex flex-col items-start gap-4">
        <div className="flex items-center text-sm gap-2">
          <input className="rounded" type="checkbox" /> <p>I agree with the <span className="text-secondary"><Link>terms and conditions</Link></span></p>
        </div>
          <Button type="submit">Sign up</Button>
          <p className="text-sm">
            Have an account ? <Link className="text-secondary" to="/">Login Here</Link>
          </p>
        </div>
      </form>
  );
};

export default RegisterForm;
