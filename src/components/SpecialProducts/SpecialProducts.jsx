import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./SpecialProducts.css";
import { request } from "../utils/Request";

function SpecialProducts() {
  const [categories, setcategories] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getcategories = async () => {
      try {
        const { data } = await request({
          url: "/api/website/categories",
        });
        setcategories(data.data);
      } catch (error) {
        setErr(err.response.data.message);
      }
    };
    getcategories();
  }, []);

  if (err) {
    return <span className="error">{err}</span>;
  }

  return (
    <section className="special-products">
      <div className="header">
        <h2>
          تسوق حسب الفئات
          <br />
          منتجات مميزة
        </h2>
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
        spaceBetween={0}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
      >
        {categories.map((catigory) => (
          <SwiperSlide className="flex" key={catigory.id}>
            <div className="img-wrapper">
              <img src="categ-five.e66ce738bffa6aaf958c.png" alt="" />
            </div>
            <h3> {catigory.name}</h3>
            <p>{catigory.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SpecialProducts;
