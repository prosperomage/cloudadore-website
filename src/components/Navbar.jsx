import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { MdOutlinePolymer } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!open);

  return (
    <div>
      <div className="flex justify-between mx-[7px] text-[.875rem]  ">
        <div className="flex m-4">
          <div onClick={handleClick} className="flex">
            <MdOutlinePolymer className="w-6 h-6" />
            <span className="ml-[6px] mt-1">Polygon</span>
          </div>
          <div className="flex ml-[7rem]   md:space-x-[25rem]">
            <ul className=" hidden md:flex  space-x-[2rem] font-medium cursor-pointer  ">
              <li>
                <a href="">Developers</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">Company</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FaTwitter className="w-6 h-6 mt-2" />
        </div>
        {isOpen && (
          <div className="hidden absolute top-full left-0 w-full bg-gray-700 text-white px-4 py-2 md:hidden">
            {/* Your menu items (links, buttons) */}
            <ul className=" hidden md:flex  space-x-[2rem] font-medium cursor-pointer  ">
              <li>
                <a href="">Developers</a>
              </li>
              <li>
                <a href="">Community</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">Company</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
