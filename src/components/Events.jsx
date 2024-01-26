import React from "react";

const Events = () => {
  return (
    <div className="flex flex-col outline outline-red-700">
      {/* div with the text */}
      <div className="outline outline-red-400 mx-[6rem]">
        <div className="outline flex justify-between">
          <span className="text-[3rem]">we cant wait to see you</span>
          <button>Go to events img</button>
        </div>
      </div>
      {/* div with the two slider conponents */}
      <div className="mt-6">
        <span>sliders go here</span>
      </div>
    </div>
  );
};

export default Events;
