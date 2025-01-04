import React from "react";

import "./StaticSlider.css";

function StaticSlider({ number }) {
  return (
    <div className="static-slider">
      <div
        className="info"
        style={
          number && {
            background:
              "url(../../../public/var-banner.fd0d0a27af6e6b09a094.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "top",
            margin: "45px 0",
          }
        }
      >
        <h2>أفضل التخفيضات 2024</h2>
        <p>
          متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
          أفضل <br /> التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات
          على المنتجات
        </p>
        <button className="custom-link-filled">اكتشف المزيد</button>
      </div>
    </div>
  );
}

export default StaticSlider;
