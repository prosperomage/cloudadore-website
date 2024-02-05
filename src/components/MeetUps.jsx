import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const MeetUps = () => {
  return (
    <div className="bg-[--grey--1]">
      <div className="sm:grid grid-cols-1 gap-7 outline outline-blue-500 p-4">
        {/* top column */}
        <div className=" grid grid-cols-1 outline outline-amber-500  bg-gradient-to-br from-[#141217] to-[#141217] p-6 rounded-[12px] shadow-md md:grid-cols-2">
          <div className="outline">image</div>
          <div className="outline outline-green-500">
            <div>
              <h1 className="text-2xl w-[260px]">
                Explore meetups and workshops near you
              </h1>
              <h3 className="mt-4 text-[#67666e]">
                Join Cloudadore and attend inside-man meet-ups, workshops,{" "}
                <br /> and more with other Web enthusiasts in your area.
              </h3>
            </div>
            <div className="mt-4 flex ">
              <button className="flex bg-gradient-to-br from-[#8a46ff] to-[#6e38cc] py-[.5rem] px-[1rem] text-[0.75rem] cursor-pointer rounded-[40px] ">
                <span> Join us today </span>
                <MdOutlineArrowOutward className="w-5 h-5" />
              </button>

              <button className="ml-5 flex">
                Host
                <MdOutlineArrowOutward className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* bottom column */}
        <div className=" grid grid-cols-1 outline outline-amber-500  bg-gradient-to-br from-[#141217] to-[#141217] p-6 rounded-[12px] shadow-md md:grid-cols-2">
          <div className="outline outline-green-500">
            <div>
              <h1 className="text-2xl w-[260px]">
                Explore meetups and workshops near you
              </h1>
              <h3 className="mt-4 text-[#67666e]">
                Join Cloudadore and attend inside-man meet-ups, workshops,{" "}
                <br /> and more with other Web enthusiasts in your area.
              </h3>
            </div>
            <div className="mt-4 flex ">
              <button className="flex bg-gradient-to-br from-[#8a46ff] to-[#6e38cc] py-[.5rem] px-[1rem] text-[0.75rem] cursor-pointer rounded-[40px] ">
                <span> Join us today </span>
                <MdOutlineArrowOutward className="w-5 h-5" />
              </button>

              <button className="ml-5 flex">
                Host
                <MdOutlineArrowOutward className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="outline">image</div>
        </div>
      </div>
    </div>
  );
};

export default MeetUps;
