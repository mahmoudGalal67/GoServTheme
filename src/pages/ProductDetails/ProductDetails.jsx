import Info from "../../components/Info/Info";
import Nav from "../../components/nav/Nav";
import TabsReact from "../../components/Tabs/TabsReact";
import DynamicPrducts from "../../components/DynamicProducts/DynamicProducts";
import Footer from "../../components/Footer/Footer";

import { useContext, useEffect, useRef, useState } from "react";
import { request } from "../../components/utils/Request";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ModalImage from "react-modal-image";

import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "../../pages/Redux/CartSlice";
import { addFavorite, removeFavorite } from "../../pages/Redux/FavoriteSlice";

import Accordion from "react-bootstrap/Accordion";

import "./ProductDetails.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../components/context/Auth";
import { useCookies } from "react-cookie";

function ProductDetails() {
  let [searchParams, setSearchParams] = useSearchParams();
  const { user } = useContext(AuthContext);
  const [cookies, setCookie] = useCookies(["user"]);

  // ZoomingEffect
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    const targetRect = targetRef.current.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: left * -xRatio,
      top: top * -yRatio,
    });
  };

  // ZoomingEffect

  const [ProductDetails, setProductDetails] = useState(null);
  const [ProductColorID, setProductColorID] = useState(0);
  const [SizeId, setSizeId] = useState(0);
  const [randint, setrandint] = useState(null);
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const [count, setcount] = useState(ProductDetails?.quantity || 1);

  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);
  const { id } = useParams();

  const setFirstPhoto = (i) => {
    setProductDetails((prev) => ({
      ...prev,
      firstPhoto: ProductDetails.photoes[i],
    }));
  };

  const handleSizeChange = (e) => {
    setSizeId(Number(e.target.value));
  };
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const { data } = await request({
          url: `/api/Product_details/Getbyid?id=${id}`,
        });
        setProductDetails(data[0]);
      } catch (error) {
        setErr(error);
      }
    };
    getProductDetails();
  }, []);

  useEffect(() => {
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    setrandint(randomIntFromInterval(100, 300));
  }, []);

  const handleFavoriteClick = (product) => {
    if (isProductFavorite(product.product_id)) {
      dispatch(removeFavorite(product.product_id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  console.log(cartItems);

  const isProductInCart = (product) => {
    return cartItems.some((item) => item.product_id === product.product_id);
  };

  const isProductFavorite = (productId) => {
    return favoriteItems.some((item) => item.product_id === productId);
  };

  // const handleUpdateQuantity = (ProductDetails) => {
  //   dispatch(
  //     updateItemQuantity({
  //       ...ProductDetails,
  //       quantity: count,
  //       price: ProductDetails.product_colors[0].color_name
  //         ? ProductDetails.product_colors[ProductColorID].size_price[SizeId]
  //         : ProductDetails.price,
  //     })
  //   );
  // };

  const handleAddToCart = async (product) => {
    try {
      const { data } = await request({
        url: `/api/Clients/add_orders?uid=${
          user.userId
        }&admin_id=${searchParams.get("id")}`,
        method: "POST",
        data: {
          product_id: product.product_id,
          product_name: product.product_name_ar,
          price:
            product.product_colors?.size_price?.length > 0
              ? product.product_colors.size_price[SizeId]
              : product.price,
          admin_id: searchParams.get("id"),
          quantity: count,
        },
        headers: { Authorization: `Bearer ${cookies?.usertoken}` },
      });
      dispatch(addItemToCart({ ...product, ...data[0] }));
    } catch (err) {
      console.log(err);
    }
  };

  if (err) {
    console.error(err);
    return <span className="error">error</span>;
  }

  if (!ProductDetails) {
    return (
      <div style={{ textAlign: "center", width: "100%" }}> loading ...</div>
    );
  }
  return (
    <div className="product-details">
      <Info />
      <Nav />
      <div className="container">
        <div className="left">
          <h2>{ProductDetails.product_name_ar}</h2>
          <div className="extra-info">
            مرة <span style={{ color: "#60f4d4" }}>250</span> تم شرائها
            <img src="/fire.svg" alt="" />
            وحدة
            <span style={{ color: "#60f4d4" }}>16</span>
            المتبقي
            <img src="/bag.svg" alt="" />
          </div>
          <div className="options">
            مشاركة المنتج
            <img src="/share.svg" style={{ width: "15px" }} alt="" />
            أضف للمفضلة
            <img src="/heart1.svg" style={{ width: "15px" }} alt="" />
            <div className="rating flex">
              <span>( 10 ) تقييمات</span>
              <img src="/outlineStar.svg" alt="" />
              <img src="/filledStar.svg" alt="" />
              <img src="/filledStar.svg" alt="" />
              <img src="/filledStar.svg" alt="" />
              <img src="/filledStar.svg" alt="" />
            </div>
          </div>
          <div className="views">
            يشاهد المنتج الان{" "}
            <span style={{ color: "#60f4d4" }}>{randint}</span> شخص
          </div>
          <p>{ProductDetails.description_ar}</p>
          <Accordion defaultActiveKey="0">
            {ProductDetails.product_colors.length > 0 ? (
              <Accordion.Item>
                <Accordion.Header>
                  {" "}
                  <img
                    style={{ width: "30px", margin: "0 48px" }}
                    src="/edit.svg"
                    alt=""
                  />
                  تخصيص المنتج{" "}
                </Accordion.Header>
                <Accordion.Body className="details">
                  <div className="images">
                    <h3>صور المنتج</h3>
                    <div className="wrapper flex justify-content-end">
                      {ProductDetails.product_colors &&
                        ProductDetails.product_colors[
                          ProductColorID
                        ].photoes.map((img, i) => (
                          <ModalImage
                            small={`https://salla111-001-site1.ptempurl.com/${img}`}
                            large={`https://salla111-001-site1.ptempurl.com/${img}`}
                            alt={i}
                            key={i}
                          />
                        ))}
                    </div>
                  </div>
                  <div className="colors">
                    <h3>الألوان المتاحة</h3>
                    <div className="wrapper flex">
                      {ProductDetails.product_colors.map((item, i) => (
                        <div
                          key={i}
                          className={i == ProductColorID ? "active" : ""}
                          onClick={() => setProductColorID(Number(i))}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: item.hex_code,
                            cursor: "pointer",
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ) : (
              ""
            )}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
                <img
                  style={{ width: "30px", margin: "0 48px" }}
                  src="/home.svg"
                  alt=""
                />{" "}
                التوفر في المعارض
              </Accordion.Header>
              <Accordion.Body>
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة
                قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {" "}
                <img
                  style={{ width: "30px", margin: "0 48px" }}
                  src="/weight.svg"
                  alt=""
                />{" "}
                وزن المنتج
              </Accordion.Header>
              <Accordion.Body>
                لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
                الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة
                قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                وبشكله الأصلي في الطباعة والتنضيد الإلكتروني.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {ProductDetails.product_colors[0].color_name &&
          ProductDetails.product_colors ? (
            <div className="choose-size flex w-100 justify-content-between gap-3 p-4">
              <select
                onChange={(e) => handleSizeChange(e)}
                className="w-75 p-2 bg-light rounded-2 border-1 border-black-50 text-black-50"
              >
                {ProductDetails.product_colors &&
                  ProductDetails.product_colors[ProductColorID].size.map(
                    (size, i) => (
                      <option key={i} value={i}>
                        {size}
                      </option>
                    )
                  )}
              </select>
              <div className="fs-6 fw-bold">اختر المقاس</div>
            </div>
          ) : (
            ""
          )}
          <div className="count">
            <div className="price">
              {ProductDetails.product_colors?.size_price?.length > 0
                ? ProductDetails.product_colors.size_price[SizeId]
                : ProductDetails.price}
            </div>
            <div className="counter">
              <div onClick={() => setcount((prev) => prev + 1)}>+</div>
              <div>{count}</div>
              <div
                onClick={() => setcount((prev) => (prev > 1 ? prev - 1 : prev))}
              >
                -
              </div>
            </div>
            <span>حدد الكمية</span>
          </div>
          <div className="links flex">
            <button
              className="custom-link-ouline"
              onClick={() => handleAddToCart(ProductDetails)}
            >
              <img src="/cartcolored.svg" alt="" />
              {isProductInCart(ProductDetails)
                ? " Update "
                : "Add to cart"}{" "}
            </button>
            <button
              className="custom-link-filled"
              onClick={() => {
                handleFavoriteClick(ProductDetails);
              }}
              style={{
                backgroundColor: isProductFavorite(ProductDetails.product_id)
                  ? "yellow"
                  : "",
              }}
            >
              <img src="/heart.svg" alt="Favorite icon" />
              اضافة الي المفضلة
            </button>
          </div>
        </div>
        <div className="right">
          <div className="wrapper flex flex-column">
            <div
              className="main-img"
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                ref={sourceRef}
                style={{ width: "100%" }}
                src={
                  `https://salla111-001-site1.ptempurl.com/${
                    ProductDetails.firstPhoto != undefined
                      ? ProductDetails?.firstPhoto
                      : ProductDetails?.photoes[0]
                  }` || "image-two.dd7d3cfc16bf56c43f01.png"
                }
                alt=""
              />
              <img
                ref={targetRef}
                alt="target"
                style={{
                  left: `${offset.left}px`,
                  top: `${offset.top}px`,
                  opacity: opacity,
                  position: "absolute",
                }}
                src={
                  `https://salla111-001-site1.ptempurl.com/${
                    ProductDetails.firstPhoto != undefined
                      ? ProductDetails?.firstPhoto
                      : ProductDetails?.photoes[0]
                  }` || "image-two.dd7d3cfc16bf56c43f01.png"
                }
              />
            </div>
            <div className="side-images">
              <Swiper
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 4,
                  },

                  1200: {
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={2}
                className="mySwiper"
              >
                {ProductDetails?.photoes &&
                  ProductDetails?.photoes.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className={
                          img == ProductDetails.firstPhoto
                            ? "side-img active"
                            : "side-img"
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => setFirstPhoto(i)}
                      >
                        <img
                          src={`https://salla111-001-site1.ptempurl.com/${img}`}
                          alt=""
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="tabs">
        <TabsReact ProductDetails={ProductDetails} />
      </div>
      {/* <DynamicPrducts /> */}

      <Footer />
    </div>
  );
}

export default ProductDetails;
