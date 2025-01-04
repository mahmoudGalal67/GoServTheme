import Info from "../../components/Info/Info";
import NavBar from "../../components/nav/Nav";
import Footer from "../../components/Footer/Footer";

import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import "./Products.css";
import StaticSlider from "../../components/StaticSlider/StaticSlider";

function Products() {
  //  Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //  Offcanvas
  // Layout
  const [layout, setLayout] = useState("row");
  // Layout
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(1000);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className="products">
      <Info />
      <NavBar />
      <main>
        <div className="container">
          <div className="options">
            <div className="select">
              <Form.Select size="lg">
                <option>Large select</option>
                <option>Large select</option>
                <option>Large select</option>
              </Form.Select>
            </div>
            <div className="layout">
              <div onClick={handleShow} className="show-filters me-2">
                <img src="filter.svg" alt="" />
              </div>
              <div
                className={layout === "row" ? "active" : ""}
                onClick={() => setLayout("row")}
              >
                <img src="layout2.png" alt="" />
              </div>
              <div
                className={layout === "column" ? "active" : ""}
                onClick={() => setLayout("column")}
              >
                <img src="layout1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-five.d2d5089cdc9dc1398bed.png" alt="" />
              <div className="column-layout">
                {" "}
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
              <div className="column-layout">
                {" "}
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-one.494d8c09bafbb0503f0c.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-three.d81b5546860624a0706d.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-five.d2d5089cdc9dc1398bed.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-one.494d8c09bafbb0503f0c.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-three.d81b5546860624a0706d.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-five.d2d5089cdc9dc1398bed.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-one.494d8c09bafbb0503f0c.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
            <div className={layout === "column" ? "product column" : "product"}>
              <img src="product-three.d81b5546860624a0706d.png" alt="" />
              <div className="column-layout">
                <div className="title">ساعات</div>
                <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
                <p className="info">سوار رياضي اسود - عادي.</p>
                <div className="price-wrapper">
                  <div className="old">350.00 ر.س</div>
                  <div className="new">250.00 رس</div>
                </div>
                <div className="links-wrapper">
                  <a className="fav flex" href="">
                    <img src="heart.svg" alt="" />
                  </a>
                  <button className="cart">
                    <span>+</span>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="offer">خصم 25%</div>
              <div className="special">جديد</div>
            </div>
          </div>
          <button
            className="custom-link-ouline"
            style={{ margin: "38px auto", padding: "12px 38px" }}
          >
            عرض المزيد
          </button>
        </div>
        {/* Filters */}
        <div className="filters">
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>الفئة</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> الماركة </Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الجوالات</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> السعر </Accordion.Header>
              <Accordion.Body>
                <MultiRangeSlider
                  min={0}
                  ruler={false}
                  max={1000}
                  step={5}
                  minValue={minValue}
                  maxValue={maxValue}
                  onInput={(e) => {
                    handleInput(e);
                  }}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> اللون</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <span>(102)</span>
                  <div>
                    <span>الكل</span>

                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#FFAF44",
                      }}
                    ></label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    ></label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#62D0B6",
                      }}
                    ></label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#333333",
                      }}
                    ></label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label
                      htmlFor=""
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#00AF6C",
                      }}
                    ></label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>التقييم</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">الكل</label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    {" "}
                    <label htmlFor="">
                      {" "}
                      <div className="rating flex">
                        <img src="outlineStar.svg" alt="" />
                        <img src="filledStar.svg" alt="" />
                        <img src="filledStar.svg" alt="" />
                        <img src="filledStar.svg" alt="" />
                        <img src="filledStar.svg" alt="" />
                      </div>
                    </label>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    <div className="rating flex">
                      <img src="outlineStar.svg" alt="" />
                      <img src="outlineStar.svg" alt="" />
                      <img src="filledStar.svg" alt="" />
                      <img src="filledStar.svg" alt="" />
                      <img src="filledStar.svg" alt="" />
                    </div>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    <div className="rating flex">
                      <img src="outlineStar.svg" alt="" />
                      <img src="outlineStar.svg" alt="" />
                      <img src="outlineStar.svg" alt="" />
                      <img src="filledStar.svg" alt="" />
                      <img src="filledStar.svg" alt="" />
                    </div>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <div className="item">
                  <span>(12)</span>
                  <div>
                    <div className="rating flex">
                      <img src="outlineStar.svg" alt="" />
                      <img src="outlineStar.svg" alt="" />
                      <img src="outlineStar.svg" alt="" />
                      <img src="outlineStar.svg" alt="" />
                      <img src="filledStar.svg" alt="" />
                    </div>
                    <Form.Check
                      name="currency"
                      type={"radio"}
                      id={`الجوالات`}
                    />
                  </div>
                </div>
                <button className="reset">إعادة ضبط</button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <StaticSlider />
        </div>
        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton style={{ backgroundColor: "#60F4D4" }}>
            <Offcanvas.Title>Filters</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="filters">
              <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>الفئة</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> الماركة </Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الجوالات</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header> السعر </Accordion.Header>
                  <Accordion.Body>
                    <MultiRangeSlider
                      min={0}
                      ruler={false}
                      max={1000}
                      step={5}
                      minValue={minValue}
                      maxValue={maxValue}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> اللون</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <span>(102)</span>
                      <div>
                        <span>الكل</span>

                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label
                          htmlFor=""
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#FFAF44",
                          }}
                        ></label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label
                          htmlFor=""
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "red",
                          }}
                        ></label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label
                          htmlFor=""
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#62D0B6",
                          }}
                        ></label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label
                          htmlFor=""
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#333333",
                          }}
                        ></label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label
                          htmlFor=""
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#00AF6C",
                          }}
                        ></label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>التقييم</Accordion.Header>
                  <Accordion.Body>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">الكل</label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        {" "}
                        <label htmlFor="">
                          {" "}
                          <div className="rating flex">
                            <img src="outlineStar.svg" alt="" />
                            <img src="filledStar.svg" alt="" />
                            <img src="filledStar.svg" alt="" />
                            <img src="filledStar.svg" alt="" />
                            <img src="filledStar.svg" alt="" />
                          </div>
                        </label>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        <div className="rating flex">
                          <img src="outlineStar.svg" alt="" />
                          <img src="outlineStar.svg" alt="" />
                          <img src="filledStar.svg" alt="" />
                          <img src="filledStar.svg" alt="" />
                          <img src="filledStar.svg" alt="" />
                        </div>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        <div className="rating flex">
                          <img src="outlineStar.svg" alt="" />
                          <img src="outlineStar.svg" alt="" />
                          <img src="outlineStar.svg" alt="" />
                          <img src="filledStar.svg" alt="" />
                          <img src="filledStar.svg" alt="" />
                        </div>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <span>(12)</span>
                      <div>
                        <div className="rating flex">
                          <img src="outlineStar.svg" alt="" />
                          <img src="outlineStar.svg" alt="" />
                          <img src="outlineStar.svg" alt="" />
                          <img src="outlineStar.svg" alt="" />
                          <img src="filledStar.svg" alt="" />
                        </div>
                        <Form.Check
                          name="currency"
                          type={"radio"}
                          id={`الجوالات`}
                        />
                      </div>
                    </div>
                    <button className="reset">إعادة ضبط</button>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        {/* Offcanvas */}
      </main>
      <Footer />
    </div>
  );
}

export default Products;
