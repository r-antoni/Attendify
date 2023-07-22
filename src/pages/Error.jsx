import Lottie from "lottie-react";
import Animation from "../assets/animation/animation.json";
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center bg-[#EDF1F7]">
      <p className="font-bold text-4xl uppercase">Page Not Found</p>
      <div>
        <Lottie animationData={Animation} />
      </div>
      <div className="flex flex-col justify-center items-center font-medium">
        <p className="py-2">We are sorry but the page you are looking for doesn't exist.</p>
        <p className="pb-10">You could return to the homepage by clicking teh button below</p>
        <Link className="bg-secondary text-white px-10 py-5 rounded-xl" to="/">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
