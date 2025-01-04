import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="Testimonials">
      <div className="header">
        <h2>آراء العملاء</h2>
        <p>بيتم استعراض بعض آراء وتعليقات المستخدمين</p>
      </div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
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
        <SwiperSlide className="flex">
          <div className="head flex">
            <img src="quote.png" alt="" />
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
          </div>
          <p>
            استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
            ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
            التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
            مميزاً
          </p>
          <div className="user">
            <div className="info">
              <span>محمود ابراهيم</span>
              <p>مهندس برمجيات لدى شركة سلة</p>
            </div>
            <img src="nabowy.a510bdba5cbfc78818dd.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="head flex">
            <img src="quote.png" alt="" />
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
          </div>
          <p>
            استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
            ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
            التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
            مميزاً
          </p>
          <div className="user">
            <div className="info">
              <span>محمود ابراهيم</span>
              <p>مهندس برمجيات لدى شركة سلة</p>
            </div>
            <img src="nabowy.a510bdba5cbfc78818dd.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="head flex">
            <img src="quote.png" alt="" />
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
          </div>
          <p>
            استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
            ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
            التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
            مميزاً
          </p>
          <div className="user">
            <div className="info">
              <span>محمود ابراهيم</span>
              <p>مهندس برمجيات لدى شركة سلة</p>
            </div>
            <img src="nabowy.a510bdba5cbfc78818dd.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="head flex">
            <img src="quote.png" alt="" />
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
          </div>
          <p>
            استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
            ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
            التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
            مميزاً
          </p>
          <div className="user">
            <div className="info">
              <span>محمود ابراهيم</span>
              <p>مهندس برمجيات لدى شركة سلة</p>
            </div>
            <img src="nabowy.a510bdba5cbfc78818dd.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="head flex">
            <img src="quote.png" alt="" />
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
          </div>
          <p>
            استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات
            ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
            التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا
            مميزاً
          </p>
          <div className="user">
            <div className="info">
              <span>محمود ابراهيم</span>
              <p>مهندس برمجيات لدى شركة سلة</p>
            </div>
            <img src="nabowy.a510bdba5cbfc78818dd.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
