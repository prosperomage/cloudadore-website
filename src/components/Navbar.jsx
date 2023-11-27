import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex space-x-[100px] mx-[7px]   text-[.875rem] ">
        <div>
          <div className="flex">
            <img src="" alt="logo" />
            <span className="ml-[2px]">Polygon</span>
          </div>
        </div>
        <div className="flex space-x-[25rem]">
          <div>
            <ul className=" flex space-x-[2rem]  ">
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
          <div>
            <img  src="" alt="twit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
