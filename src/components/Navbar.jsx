import React from "react";
import BellIcon from "../assets/notif.svg";
import MessageIcon from "../assets/messagenotif.svg";
import Profile from "../assets/pic.svg";

const Navbar = ({ username, visibility }) => {
  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="flex justify-between items-center h-16 px-20 py-4 shadow-md">
        <div className="text-3xl text-title font-semibold">Attendify</div>
        <div className={`flex gap-10 items-center ${visibility}`}>
          <img src={BellIcon} />
          <img src={MessageIcon} />
          <div className="flex gap-2 items-center">
            <img src={Profile} />
            <div className="font-medium">{username}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
