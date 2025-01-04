import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Brands.css";

function Brands() {
  return (
    <section className="brands">
      <div className="header">
        <h2>عملائنا</h2>
        <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
      </div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={40}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
      >
        <SwiperSlide className="flex">
          <img src="brand.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand2.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="flex">
          <img src="brand.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand2.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="flex">
          <img src="brand.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand2.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="flex">
          <img src="brand.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img src="brand2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Brands;
