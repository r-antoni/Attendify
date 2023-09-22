import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import {useState} from "react";
import BellIcon from "../assets/icons/notif.svg";
import Cookies from "js-cookie";
import Logo from "../assets/img/attendify.svg";
import Profile from "../assets/icons/pic.svg";
import Button from "./Button";

const Navbar = ({visibility, homemenu}) => {
  const username = Cookies.get("username");
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="flex justify-between items-center h-20 px-20 py-4 shadow-md">
        <div className=" flex ga text-3xl text-title font-semibold">
          <Link to="/">
          <img className="w-10 h-10 items-center" src={Logo} alt="attendify logo" />
          </Link>
          ttendify
        </div>
        <div className={`flex gap-10 items-center ${visibility}`}>
          <button onClick={handleClick}>
            <img src={BellIcon} />
          </button>
          <div className="flex gap-2 items-center">
            <img src={Profile} />
            <div className="font-medium">{username}</div>
          </div>
        </div>
        <div className={`${homemenu} text-sm uppercase font-medium text-title`}>
          <ul className="flex items-center gap-10">
            <li className="hover:text-secondary">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="#contact">Contact</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className={`${homemenu} uppercase text-sm`}>
          <Button>
            <Link to="/login">Launch App</Link>
          </Button>
        </div>
      </div>
      <Card
        className={`${
          active ? "flex" : "hidden"
        } absolute top-12 right-56 bg-white border w-1/3 min-h-[120px] transition-all`}
      >
        <div className="flex items-center justify-center">Notification Box</div>
      </Card>
    </div>
  );
};

export default Navbar;
