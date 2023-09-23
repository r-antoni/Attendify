import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center gap-10 mt-[200px] px-20">
      <div className="flex flex-col gap-5 mt-20">
        <h1 class="text-3xl font-bold py-2">
          <span class="text-secondary">Attendify</span> - The Best Solution For Absence Management.
        </h1>
        <p class="text-lg py-3 font-medium">
          <span class="text-secondary">Reliable</span> & <span class="text-secondary">Efficient</span> web based
          attendance management app with tons of features for all kinds of needs.
        </p>
        <Button>
          <Link to="#learn" className="flex items-center text-sm">
            Learn More
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </Link>
        </Button>
      </div>
      <div className="w-3/4">
        <img src="https://freeimghost.net/images/2023/09/22/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
