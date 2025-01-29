import React, { useState, useEffect, Fragment } from "react";

import { Link } from "react-router-dom";
import "./StaticProducts.css";

import { useSearchParams } from "react-router-dom";

import { request } from "../utils/Request";

import { products } from "./dummyProducts";
import Product from "../Product/Product";

function StaticProducts({ searchInput }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const [StaticProducts, setStaticProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await request({
          url: `/api/Product_details/Getall?userid=${searchParams.get("id")}`,
        });
        setStaticProducts(data.slice(0, 8));
        // setStaticProducts(products.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchInput]);

  if (StaticProducts.length == 0) {
    return (
      <div style={{ padding: "45px", fontSize: "22px", textAlign: "center" }}>
        {" "}
        <span>No Products Found</span>
      </div>
    );
  }
  return (
    <div className="StaticProducts">
      <div className="headers flex">
        <Link to={`/products?id=${searchParams.get("id")}`}>
          <button className="custom-link-ouline  btn btn-3 hover-border-3">
            <img src="arrow.svg" alt="" />
            <span> عرض الكل</span>
          </button>
        </Link>
        <div>
          <h3>منتجات مميزة</h3>
          <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>
      <div className="wrapper">
        {StaticProducts.map((category) => (
          <div className="category" id={category.category_id}>
            {category.brandsDto.some(
              (brand) => brand.productDto && brand.productDto.length > 0
            ) && <h2>{category.category_name_ar}</h2>}
            <div className="brand wrapper">
              {category.brandsDto.map((brand) => {
                return (
                  <Fragment key={brand.brand_id}>
                    {brand.productDto.map((product) => {
                      return (
                        <Product
                          product={product}
                          brand={brand}
                          category={category}
                        />
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StaticProducts;
