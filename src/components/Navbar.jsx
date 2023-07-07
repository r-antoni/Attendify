import BellIcon from "../assets/icons/notif.svg";
import Profile from "../assets/icons/pic.svg";

const Navbar = ({visibility}) => {
  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="flex justify-between items-center h-16 px-20 py-4 shadow-md">
        <div className="text-3xl text-title font-semibold">Attendify</div>
        <div className={`flex gap-10 items-center ${visibility}`}>
          <img src={BellIcon} />
          <div className="flex gap-2 items-center">
            <img src={Profile} />
            <div className="font-medium">Username</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
