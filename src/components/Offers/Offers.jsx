import React, { useEffect, useState } from "react";

import "./Offers.css";
import { Link } from "react-router-dom";

function offers() {
  const [preferProduct, setpreferProduct] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getpreferProduct = async () => {
      try {
        const { data } = await Request({
          url: "/api/website/prefer-product",
        });
        setpreferProduct(data.data);
      } catch (error) {
        setErr(error.response?.data?.message);
      }
    };
    getpreferProduct();
  }, []);

  if (err) {
    return <span className="error">{err}</span>;
  }
  return (
    <div className="offers">
      <div className="wrapper">
        {preferProduct.map((product) => (
          <div className="item" key={product.item}>
            <img src="airpods.7cc1bad5d4d3977c258a.png" alt="" />
            <h3>{product.title}</h3>
            <p>{product.product_desc}</p>
            <Link className="custom-link-filled" to={product.product_link}>
              تسوق الآن
            </Link>
          </div>
        ))}
        <div className="item">
          <img src="airpods.7cc1bad5d4d3977c258a.png" alt="" />
          <h3>معالجة أسرع وأكثر ثراءً</h3>
          <p>
            أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
            لتقليل التشويش
          </p>
          <a className="custom-link-filled" href="#">
            تسوق الآن
          </a>
        </div>
        <div className="item">
          <img src="phone.dfce5cb4f77af5fe35ec.png" alt="" />
          <h3>معالجة أسرع وأكثر ثراءً</h3>
          <p>
            أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
            لتقليل التشويش
          </p>
          <a className="custom-link-filled" href="#">
            تسوق الآن
          </a>
        </div>
        <div className="item">
          <img src="smart-watch.e570c6232d973ee092ee.png" alt="" />
          <h3>معالجة أسرع وأكثر ثراءً</h3>
          <p>
            أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
            لتقليل التشويش
          </p>
          <a className="custom-link-filled" href="#">
            تسوق الآن
          </a>
        </div>
      </div>
    </div>
  );
}

export default offers;
