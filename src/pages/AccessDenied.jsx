import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../assets/animation/403forbidden.json"

const AccessDenied = () => {
  return (
    <div>

      <div className="text-sm">
        <Lottie animationData={forbiddenAnimation} />
      </div>
    </div>
  )
};

export default AccessDenied;
