import React from "react";

const Socials = () => {
  return (
    <div>
      <h1 className="text-[3.75rem] mr-auto">Follow us on social</h1>
      {/* main container */}
      <div className="grid gap-x-4 gap-y-4  grid-cols-2 md:grid-cols-4">
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Discord</h2>
              <h5 className="mt-1">39.2k Members</h5>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Telgram</h2>
              <h5 className="mt-1">67.9k Members</h5>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Twitter</h2>
              <h5 className="mt-1">1.8M Members</h5>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Linkedln</h2>
              <h5 className="mt-1">123.5k Members</h5>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Instagram</h2>
              <h5 className="mt-1">42.6k Members</h5>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Reddit</h2>
              <h5 className="mt-1">54.1k Members</h5>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-br from-[#141217] to-[#0e0c12] border-white max-w-[100%] rounded-[20px] min-h-[20rem]">
          <div className=" flex flex-col justify-between m-5 rounded-[20px] min-h-[17rem] ">
            <div className="mr-auto">Logo</div>
            <div className=" flex flex-col mr-auto">
              <h2 className="mr-auto"> Youtube</h2>
              <h5 className="mt-1">12.1k Members</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Socials;
