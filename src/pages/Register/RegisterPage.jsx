import React from "react";
import LoginText from "../../components/LoginText";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div className="flex justify-between">
      <LoginText />
      <RegisterForm />
    </div>
  );
};

export default Register;
