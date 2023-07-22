import { Link } from "react-router-dom";
import Animation from "../assets/animation/animation.json";
import Lottie from "lottie-react";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#EDF1F7]">
      <div>
        <Lottie animationData={Animation} />
      </div>
      <div className="flex flex-col justify-center items-center font-medium">
        <p className="py-2">We are sorry but the page you are looking for doesn't exist.</p>
        <p className="pb-10">You could return to the homepage by clicking teh button below</p>
        <Link className="bg-secondary text-white px-5 py-3 rounded-xl" to="/">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
