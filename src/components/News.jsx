import React from "react";

const News = () => {
  return (
    <div className="mt-24">
      <div>
        <h2 className="text-[3.75rem] ml-[0]">In the news</h2>
      </div>
      {/* carousel */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <div className="space-y-6 rounded-lg outline outline-blue-500 w-[100%] h-[100%] ">
          <div>img</div>
          <div>
            <div className=" flex flex-col space-y-4 m-6">
              <div className=" text-[.75rem] flex justify-between">
                <h5 className="text-[#67666e]">september 18, 2023</h5>
                <h5 className="text-[#7b3fe4]"> community</h5>
              </div>
              <div>
                <p className="text-[1.25rem]">
                  Canto to migrate to a ZK L2 <br />
                  poered by polygon chain <br /> development Kit (CDK)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg outline outline-blue-500 w-[100%] h-[100%] ">
          <div>img</div>
          <div>
            <div className=" flex flex-col space-y-4 m-6">
              <div className=" text-[.75rem] flex justify-between">
                <h5 className="text-[#67666e]">september 18, 2023</h5>
                <h5 className="text-[#7b3fe4]"> community</h5>
              </div>
              <div>
                <p className="text-[1.25rem]">
                  Canto to migrate to a ZK L2 <br />
                  poered by polygon chain <br /> development Kit (CDK)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg outline outline-blue-500 w-[100%] h-[100%] ">
          <div>img</div>
          <div>
            <div className=" flex flex-col space-y-4 m-6">
              <div className=" text-[.75rem] flex justify-between">
                <h5 className="text-[#67666e]">september 18, 2023</h5>
                <h5 className="text-[#7b3fe4]"> community</h5>
              </div>
              <div>
                <p className="text-[1.25rem]">
                  Canto to migrate to a ZK L2 <br />
                  poered by polygon chain <br /> development Kit (CDK)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
