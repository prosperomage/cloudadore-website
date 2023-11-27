import React from "react";

const MeetUps = () => {
  return (
    <div>
      <div className="flex flex-col space-y-[40px]">
        <div className="flex space-x-[25rem] bg-gradient-to-br from-[#141217] to-[#141217] p-6 rounded-[12px] shadow-md">
          <div>image</div>
          <div>
            <div>
              <h1>
                Explore meetups and <br /> workshops near you
              </h1>
              <h3 className="mt-4">
                Join Cloudadore and attend inside-man meet-ups, workshops,{" "}
                <br /> and more with other Web enthusiasts in your area.
              </h3>
            </div>
            <div>
              <button className="bg-gradient-to-br from-[#8a46ff] to-[#6e38cc] py-[.5rem] px-[1rem] text-[0.75rem] cursor-pointer rounded-[40px] ">
              <span> Join us today img</span>
               
              </button>

              <button className="ml-5">Host</button>
            </div>
          </div>
        </div>

        {/* second column */}
        <div className="flex space-x-[25rem] bg-gradient-to-br from-[#141217] to-[#141217] p-6 rounded-[12px] shadow-md">
          <div>
            <div>
              <h1>
                Ready to become a cloudadore <br /> advocate
              </h1>
              <h3 className="mt-4">
                Learn more about the program and become a Cloudadore <br />{" "}
                Advocate.
              </h3>
            </div>
            <div>
              <button className="bg-gradient-to-br from-[#8a46ff] to-[#6e38cc]  py-[.5rem] px-[1rem] text-[0.75rem] rounded-[40px] cursor-pointer  ">
                Explore Here img
              </button>
            </div>
          </div>
          <div>image</div>
        </div>
      </div>
    </div>
  );
};

export default MeetUps;
