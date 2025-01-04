import { Swiper, SwiperSlide } from "swiper/react";

import "./DynamicLInks.css";

import "swiper/css";
import { Link } from "react-router-dom";

function DynamicLinks() {
  return (
    <div className="d-links">
      <Swiper
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 8,
          },
        }}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <Link to="/">Links 1</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 2</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 3</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 4</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 5</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 6</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 7</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 8</Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">Links 9</Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default DynamicLinks;
