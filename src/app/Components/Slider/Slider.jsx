"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "@/app/Redux/Slider/SliderSlice";

export default function Slider() {
  const dispatch = useDispatch();
  const { Slider } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSlider());
  }, []);
  return (
    <div className="w-full h-[400px]">
      <Swiper
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper flex items-center justify-center"
      >
        {Slider.map((elem) => {
          return (
            <SwiperSlide key={elem.id}>
              <img src={`./images/${elem.image}.jpg`} alt={elem.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
