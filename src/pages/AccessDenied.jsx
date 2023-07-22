import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../assets/animation/forbiddenError.json"
import { Link } from "react-router-dom";

const AccessDenied = () => {
  return (
    <div className="absolute left-[30%] top-80 flex flex-col object-cover w-[40%] items-center">
      <div className="flex items-center justify-center font-bold text-4xl uppercase">
        <p>403 Forbidden</p>
      </div>
      <div className="w-96">
        <Lottie animationData={forbiddenAnimation} />
      </div>
      <div className="flex flex-col justify-center items-center font-medium">
        <p className="py-2">We are sorry but the page you are looking for doesn't exist.</p>
        <p className="pb-10">You could return to the homepage by clicking teh button below</p>
        <Link className="bg-secondary text-white px-10 py-5 rounded-xl" to="/">
          Go Back To Home
        </Link>
      </div>
    </div>
  )
};

export default AccessDenied;
