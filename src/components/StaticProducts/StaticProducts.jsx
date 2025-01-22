import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../pages/Redux/CartSlice";
import { addFavorite, removeFavorite } from "../../pages/Redux/FavoriteSlice";
import { Link } from "react-router-dom";
import "./StaticProducts.css";
import FavButton from "../FavButton/FavButton";
import CartButton from "../CartButton/CartButton";

import { useSearchParams } from "react-router-dom";

import { request } from "../utils/Request";

import { products } from "./dummyProducts";

const truncateTitle = (title, numWords) => {
  const words = title.split(" ");
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "...";
  }
  return title;
};

function StaticProducts({ searchInput }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const [StaticProducts, setStaticProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  const handleAddToCart = (product) => {
    if (isProductInCart(product.product_id)) {
      dispatch(removeItemFromCart(product));
    } else {
      dispatch(addItemToCart(product));
    }
  };

  const handleFavoriteClick = (product) => {
    if (isProductFavorite(product.product_id)) {
      dispatch(removeFavorite(product.product_id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.product_id === productId);
  };

  const isProductFavorite = (productId) => {
    return favoriteItems.some((item) => item.product_id === productId);
  };

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
        <Link to="/products">
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
                        <div
                          key={product.product_id}
                          className="product"
                          style={{
                            width: "200px",
                            height: "550px",
                            padding: "12px",
                          }}
                        >
                          <img
                            src={`https://salla111-001-site1.ptempurl.com/${product.photoes[0]}`}
                            alt=""
                            style={{
                              width: "100%",
                              height: "50%",
                              margin: "0",
                            }}
                          />
                          <div className="title">{brand.brand_name}</div>
                          <Link to={`/productDetails/${product.product_id}`}>
                            <p className="desc">
                              {truncateTitle(product.product_name_ar, 2)}
                            </p>
                          </Link>
                          <p className="info">{category.category_name_ar}</p>
                          <div className="price-wrapper">
                            <div className="old">{product.price * 1.4} ر.س</div>
                            <div className="new">{product.price} رس</div>
                          </div>
                          <div className="links-container">
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                                handleFavoriteClick(product);
                              }}
                            >
                              <FavButton
                                active={isProductFavorite(product.product_id)}
                              />
                            </div>
                            <div onClick={() => handleAddToCart(product)}>
                              <CartButton
                                active={isProductInCart(product.product_id)}
                              />
                            </div>
                          </div>
                          <div className="offer">خصم 25%</div>
                          <div className="special">جديد</div>
                        </div>
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
