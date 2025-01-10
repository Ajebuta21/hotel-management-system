import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Book Room",
      url: "/book-room",
    },
    {
      name: "Manage Reservation",
      url: "/manage-reservation",
    },
  ];
  return (
    <nav className="w-full fixed z-30 h-16 border-b bg-white">
      <div className="w-full h-full px-5 flex justify-between items-center relative">
        <Link to={`/`} className="text-2xl font-semibold text-primary">
          Hotel
        </Link>
        <div className="hidden md:flex gap-5">
          {menu.map((item) => (
            <Link
              key={item.url}
              className="text-primary text-sm font-light"
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className={`w-6 h-6 flex flex-col justify-between md:hidden`}
          onClick={toggleMenu}
        >
          <span
            className={`w-full h-0.5 bg-primary transition-all ease-in-out duration-500 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-primary transition-all ease-in-out duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-primary transition-all ease-in-out duration-500 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
        <div
          className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center transition-all ease-in-out duration-500 md:hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {menu.map((item) => (
            <Link
              key={item.url}
              className="text-primary w-full p-5 border-b"
              to={item.url}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
