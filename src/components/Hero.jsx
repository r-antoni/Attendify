import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-center gap-10 mt-40 px-20">
      <div className="flex flex-col gap-5">
        <h1 class="text-3xl font-bold py-2">
          <span class="text-title">Attendify</span> - The Best Solution For Absence Management.
        </h1>
        <p class="text-lg py-3 font-medium">
          <span class="text-secondary">Reliable</span> & <span class="text-secondary">Efficient</span> web based
          student attendance app with tons of features for all kinds of needs.
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
        <h3 class="text-xl py-5">Trusted by more than 1000 companies</h3>
        <div class="flex flex-col items-center lg:flex-row">
          <img class="w-36 h-16" src="https://www.hadirr.com/static/images/clients/kpp-pratama.png" alt="" />
          <img class="w-36 h-16" src="https://www.hadirr.com/static/images/clients/antam.png" alt="" />
          <img class="w-36 h-16" src="https://www.hadirr.com/static/images/clients/jasaraharja.png" alt="" />
          <img class="w-36 h-16" src="https://www.hadirr.com/static/images/clients/pelindo.png" alt="" />
        </div>
      </div>
      <div className="w-[1100px] h-[900px]">
        <img src="https://freeimghost.net/images/2023/09/18/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
