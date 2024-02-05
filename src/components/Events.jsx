import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import polyImg from "../assets/polygon img.png";
// Import Swiper styles
import "swiper/css";

const Events = () => {
  return (
    <div className="flex flex-col outline outline-red-700">
      {/* div with the text */}
      <div className="outline outline-red-400 md:mx-[6rem]">
        <div className="outline flex justify-between">
          <span className="min-w-[186px]  md:text-[3rem] ">
            we cant wait to see you
          </span>
          <button className="min-w-[186px] outline">Go to events img</button>
        </div>
      </div>
      {/* div with the two slider conponents */}
      {/* slider one */}
      <div className="mt-6">
        <span>sliders go here</span>
        <>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            ...
          </Swiper>
        </>
        {/* slider two */}
        <>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mt-4"
          >
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={polyImg} alt="polygon img" sizes="" srcset="" />{" "}
            </SwiperSlide>
            ...
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Events;
