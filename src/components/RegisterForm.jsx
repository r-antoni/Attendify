import InputText from "./reuseable/InputText";
import Button from "./reuseable/Button";

const RegisterForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-10 justify-center min-h-screen px-20">
        <div className="flex flex-col gap-6">
          <InputText
            name="username"
            label="Username"
            type="text"
            width="w-80"
          />
          <InputText 
          name="email" 
          label="Email" 
          type="email" 
          width="w-80" 
          />
          <InputText
            name="password"
            label="Password"
            type="password"
            width="w-80"
          />
          <InputText
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            width="w-80"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <Button type="submit">Sign up</Button>
          <p className="text-sm">Have an account? <a className="text-blue-400" href="/login">Login Here</a></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
