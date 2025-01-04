import React, { useEffect, useState } from "react";

import "./Features.css";
import { request } from "../utils/Request";

function Features() {
  const [brands, setbrands] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getbrands = async () => {
      try {
        const { data } = await request({
          url: "/api/dashboard/brands",
        });
        setbrands(data);
      } catch (error) {
        setErr(error);
      }
    };
    getbrands();
  }, []);

  if (err) {
    return <span className="error">{err}</span>;
  }
  return (
    <section className="features">
      <div className="wrapper flex">
        {brands.map((brand) => (
          <div className="item flex" key={brand.id}>
            <div>
              <h3> {brand.name.en}</h3>
              <p> {brand.description.en} </p>
            </div>
            <img
              src={`https://goservback.alyoumsa.com/public/storage/${brand.logo}`}
              style={{ width: "120px", height: "120px" }}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
