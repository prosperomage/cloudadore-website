import React from "react";
import poly from '../assets/7200953_30756.svg'

const Hero = () => {
  return (
    <div className="mt-[16rem]">
      <div className="flex-col  md:flex justify-between">
        <div>
          <h2 className=" md:text-[3.75rem] min-w-[400px] font-medium ">
            Collectively, we are  building the future we want to
            see
          </h2>
          <h5 className="text-[#67666e]   min-w[300px]  mt-6">
            Join the Cloudadore community to build faster, smarter, and without
            limits.
          </h5>
        </div>
        <div className="ml-auto">
          
            <img src={poly} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
