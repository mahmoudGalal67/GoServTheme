import React from "react";

import "./CountdownProduct.css";

import Countdown from "react-countdown";

const Finished = () => <span>You are good to go!</span>;
const renderer = ({ total, days, hours, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <div className="count-down-wrapper">
        <span className="count-down">
          <span>
            {days} <span>يوم</span>
          </span>
          <span>
            {hours} <span>ساعة</span>
          </span>
          <span>
            {minutes} <span>دقيقة</span>
          </span>
          <span>
            {seconds} <span>ُثانية</span>
          </span>
        </span>
      </div>
    );
  } else {
    // Render a finished state
    return <Finished />;
  }
};

function CountdownProduct() {
  return (
    <div className="countdown-product">
      <div className="headers flex">
        <button className="custom-link-ouline">
          <img src="arrow.svg" alt="" />
          عرض الكل
        </button>
        <div>
          <h3>عروض تنتهى قريبا </h3>
          <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>
      <div className="wrapper flex">
        <div className="product">
          <div className="info">
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <Countdown
              date={Date.now() + 500000000}
              intervalDelay={0}
              precision={3}
              renderer={renderer}
            ></Countdown>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                Add to cart
                <img style={{ width: "20px" }} src="basket.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="image">
            <img src="watch.4b38c9b0b5b078289df4.png" alt="" />
          </div>
        </div>
        <div className="product">
          <div className="info">
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="rating flex">
              <span>(4.5)</span>
              <img src="outlineStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
              <img src="filledStar.svg" alt="" />
            </div>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <Countdown
              date={Date.now() + 500000000}
              intervalDelay={0}
              precision={3}
              renderer={renderer}
            ></Countdown>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                Add to cart
                <img style={{ width: "20px" }} src="basket.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="image flex">
            <img src="watch.4b38c9b0b5b078289df4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownProduct;
