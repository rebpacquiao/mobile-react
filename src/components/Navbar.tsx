import { useState } from "react";
import { Link } from "react-router-dom";
import sevronLogo from "../assets/img/Sevron_Full.png";
import navItems from "../data/navItems";

interface NavbarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ show, setShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(show, setShow);
  const handleClick = () => {
    setIsOpen(false);
    setShow(false);
  };

  return (
    <nav className="flex flex-wrap navigation items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div className="main-nav">
        <Link className="nav-title" to="/">
          <strong>
            <img src={sevronLogo} alt="Sevron Logo" className="img-logo" />
          </strong>
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setIsOpen(!isOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`${
                index === navItems.length - 1 ? "" : "border-b border-gray-300"
              } md:border-b-0`}
            >
              <Link
                className="md:p-4 py-3 block hover:text-purple-400"
                to={item.href}
                onClick={handleClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
