import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { request } from "../utils/Request";

import "swiper/css";
import "swiper/css/navigation";

import "./DynamicProducts.css";
import CartButton from "../CartButton/CartButton";
import FavButton from "../FavButton/FavButton";

function DynamicProducts() {
  const [DynamicProducts, setDynamicProducts] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getDynamicProducts = async () => {
      try {
        const { data } = await request({
          url: "/api/dashboard/products",
        });
        setDynamicProducts(data);
        console.log(data);
      } catch (error) {
        setErr(error.response?.data?.message);
        console.log(error);
      }
    };
    getDynamicProducts();
  }, []);

  if (err || !DynamicProducts) {
    return <span className="error">{err}</span>;
  }
  return (
    <section className="dynamic-products">
      <div className="header">
        <h2>وصل حديثا</h2>
        <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
      </div>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1080: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 5,
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
        {DynamicProducts.map((product) => (
          <SwiperSlide className="flex" key={product.id}>
            <div className="product">
              <img
                src={`https://goservback.alyoumsa.com/public/storage/${product.photos[0]}`}
                alt=""
              />
              <div className="title">{product.name.en}</div>
              <p className="desc">{product.description.en}</p>
              <p className="info">{product?.details.en} </p>
              <div className="price-wrapper">
                <div className="old">{product.price}</div>
                <div className="new">{product?.price_after_discount}</div>
              </div>
              <div className="links-wrapper">
                <FavButton />
                <CartButton />
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default DynamicProducts;
