import React from "react";
import Report from "../assets/img/report.svg";
import Remote from "../assets/img/remote.svg";
import Real from "../assets/img/real.svg";
import Timesheet from "../assets/img/sheet.svg";

const Features = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-title mt-40">
        <h3 className="text-2xl font-bold">Attendify Features</h3>
        <p className="py-2 tracking-widest">Efficiently manage everything on the go.</p>
      </div>
      <div className="grid-cols-2 grid gap-x-80 items-center py-20 mx-auto text-xl text-title font-medium">
        <div className="flex flex-col items-center gap-5 w-60 h-[600px]">
          <h4>Remote Submission</h4>
          <img src={Remote} alt="Remote logo" className="w-48 h-56" />
          <p className="text-sm text-black py-5">
            Students and teacher are able to submit and monitor absence even from the comfort of their home.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 w-60 h-[600px]">
          <h4>Online Timesheet</h4>
          <img src={Timesheet} alt="Timesheet logo" className="w-48 h-60" />
          <p className="text-sm text-black">
            Get a clear timesheet with all the necessary data available
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 w-60 h-[600px]">
          <h4>Absence Report</h4>
          <img src={Report} alt="Report logo" className="w-48 h-60" />
          <p className="text-sm text-black">
            Get all the necessary data for grading students and others.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 w-60 h-[600px]">
          <h4>Real Time Data</h4>
          <img src={Real} alt="Real time logo" className="w-48 h-60" />
          <p className="text-sm text-black">
            All data regarding absence and students are updated as soon as it is verified by the respective administration.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
