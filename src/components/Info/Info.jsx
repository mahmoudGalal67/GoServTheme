import React from "react";
import "./info.css";

function Info() {
  return (
    <div className="info flex">
      <div className="left flex">
        <a href="#">تواصل معنا</a>
        <a href="#">سياسة الإستبدال أو الاسترجاع</a>
        <a href="#">المفضلة </a>
        <a href="#" className="flex">
          العربية - رس
          <img src="/Arabic.png" alt="" />
        </a>
      </div>
      <div className="right flex">
        <div className="email flex">
          <a href="#">Support@salla.sa</a>
          <img src="/email.svg" alt="" />
        </div>
        <div className="phone flex">
          <a href="#">+966556754472</a>
          <img src="/phone.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Info;
