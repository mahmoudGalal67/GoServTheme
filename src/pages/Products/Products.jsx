import Info from "../../components/Info/Info";
import NavBar from "../../components/nav/Nav";
import Footer from "../../components/Footer/Footer";

import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import { Fragment, useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

import { addItemToCart, removeItemFromCart } from "../../pages/Redux/CartSlice";
import { addFavorite, removeFavorite } from "../../pages/Redux/FavoriteSlice";

import FavButton from "../../components/FavButton/FavButton";
import CartButton from "../../components/CartButton/CartButton";

import "./Products.css";
import StaticSlider from "../../components/StaticSlider/StaticSlider";
import { Link, useSearchParams } from "react-router-dom";
import { request } from "../../components/utils/Request";
import { useDispatch, useSelector } from "react-redux";

import { products } from "../../components/StaticProducts/dummyProducts";

const colors = [
  { hex_code: "gray", name: "white" },
  { hex_code: "black", name: "black" },
  { hex_code: "red", name: "red" },
  { hex_code: "blue", name: "blue" },
  { hex_code: "brown", name: "brown" },
];

function Products() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [Products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [brands, setbrands] = useState([]);
  // Extract all brands from all categories
  const extractAllBrands = (products) => {
    const brandsArray = [];

    products.forEach((category) => {
      category.brandsDto.forEach((brand) => {
        brandsArray.push(brand);
      });
    });
    setbrands(brandsArray);
  };
  //  Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //  Offcanvas

  // Layout
  const [layout, setLayout] = useState("row");
  // Layout

  const truncateTitle = (title, numWords) => {
    const words = title.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    }
    return title;
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorites.items);

  const handleAddToCart = (product) => {
    if (isProductInCart(product.product_id)) {
      dispatch(removeItemFromCart({ id: product.product_id }));
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
        // const { data } = await request({
        //   url: `/api/Product_details/Getall?userid=${searchParams.get("id")}`,
        // });
        setProducts(products.slice(0, 8));
        setcategories([
          ...new Set(
            products.map((product) => ({
              id: product.category_id,
              name: product.category_name_ar,
            }))
          ),
        ]);
        extractAllBrands(products);
        // setProducts(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Fillteration
  // State to store filters
  const [filters, setFilters] = useState({
    category_id: [], // For multiple selected categories
    brand_id: [], // For multiple selected brands
    color_name: [], // For multiple selected colors
    price_range: { min: 0, max: 1000 }, // Price range with min and max
    search_text: searchParams.get("search") ? searchParams.get("search") : "", // For text search in product name/description
    sort_order: "newest", // Default sort order
  });

  // Function to handle checkbox changes (for category_id, brand_id, and color_name)
  const handleCheckboxChange = (filterKey, value) => (e) => {
    const { checked } = e.target;
    setFilters((prev) => {
      const updatedValues = checked
        ? [...prev[filterKey], value] // Add value if checked
        : prev[filterKey].filter((item) => item !== value); // Remove value if unchecked
      return {
        ...prev,
        [filterKey]: updatedValues,
      };
    });
  };

  // Function to handle price range changes
  const handlePriceRangeChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      price_range: {
        min: Number(e.minValue), // Update  min
        max: Number(e.maxValue), // Update  max
      },
    }));
  };

  // Function to handle text input changes (e.g., search_text)
  const handleTextChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter function
  const filterProducts = () => {
    let filtered = JSON.parse(JSON.stringify(Products));
    const {
      category_id,
      brand_id,
      color_name,
      price_range,
      search_text,
      sort_order,
    } = filters;

    // First, globally filter products by the selected criteria
    filtered = filtered.map((category) => {
      // Apply category filter if category_id is selected
      if (
        category_id.length > 0 &&
        !category_id.includes(category.category_id.toString())
      ) {
        return null; // Skip this category
      }

      // Filter brands
      const filteredBrands = category.brandsDto.filter((brand) => {
        const isBrandMatch =
          brand_id.length === 0 ||
          brand_id.some((id) => id === brand.brand_id.toString());
        return isBrandMatch;
      });

      // Skip categories with no matching brands
      if (filteredBrands.length === 0) return null;

      // Filter products within each brand
      filteredBrands.forEach((brand) => {
        brand.productDto = brand.productDto.filter((product) => {
          // Check price range
          if (
            product.price < price_range.min ||
            product.price > price_range.max
          ) {
            return false;
          }

          // Check color filter
          if (color_name.length > 0) {
            const colorMatch = product.product_colors.some((color) =>
              color_name.includes(color.color_name)
            );
            if (!colorMatch) return false;
          }

          // Check search text
          if (search_text) {
            const lowerSearchText = search_text.toLowerCase();
            const nameMatch =
              product.product_name_ar
                ?.toLowerCase()
                .includes(lowerSearchText) ||
              product.product_name_en?.toLowerCase().includes(lowerSearchText);
            const descriptionMatch =
              product.description_ar?.toLowerCase().includes(lowerSearchText) ||
              product.description_en?.toLowerCase().includes(lowerSearchText);

            if (!nameMatch && !descriptionMatch) return false;
          }

          return true;
        });

        // Sort products by date
        if (sort_order) {
          brand.productDto.sort((a, b) => {
            const dateA = new Date(a.created_at);
            const dateB = new Date(b.created_at);
            return sort_order === "newest" ? dateB - dateA : dateA - dateB;
          });
        }
      });

      // Return category with filtered and sorted brands
      category.brandsDto = filteredBrands;
      return category;
    });

    // Remove null categories
    filtered = filtered.filter((category) => category !== null);

    return filtered;
  };

  // Get the filtered products
  let filteredProducts = filterProducts();
  // Fillteration
  // Reset Filters
  const resetFilters = () => {
    setFilters({
      category_id: [],
      brand_id: [],
      color_name: [],
      price_range: { min: 0, max: 1000 },
      search_text: "",
      sort_order: "newest",
    });
  };
  // Reset Filters
  if (Products.length == 0) {
    return (
      <div style={{ padding: "45px", fontSize: "22px", textAlign: "center" }}>
        {" "}
        <span>No Products Found</span>
      </div>
    );
  }
  return (
    <div className="products">
      <Info />
      <NavBar handleSearch={handleTextChange} />
      <main>
        <div className="container">
          <div className="options">
            <div className="select">
              <Form.Select
                size="lg"
                onChange={(e) => handleTextChange("sort_order", e.target.value)}
                value={filters.sort_order}
              >
                <option disabled>Sort by date</option>
                <option value="newest">Newst Products</option>
                <option value="oldest">Oldest products</option>
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
            {filteredProducts.map((category) => (
              <Fragment key={category.category_id}>
                <Fragment>
                  {category.brandsDto.map((brand) => {
                    return (
                      <Fragment key={brand.brand_id}>
                        {brand.productDto.map((product) => {
                          return (
                            <div
                              key={product.product_id}
                              className={
                                layout === "column"
                                  ? "product column"
                                  : "product"
                              }
                            >
                              <img
                                src={`http://salla1-001-site1.anytempurl.com/${product.photoes[0]}`}
                                alt=""
                                style={{
                                  width: "280px",
                                  height: "180px",
                                  margin: "0",
                                }}
                              />
                              <div className="column-layout w-100">
                                {" "}
                                <div className="title">{brand.brand_name}</div>
                                <Link
                                  to={`/productDetails/${product.product_id}`}
                                >
                                  <p className="desc">
                                    {truncateTitle(product.product_name_ar, 2)}
                                  </p>
                                </Link>
                                <p className="info">
                                  {category.category_name_ar}
                                </p>
                                <div className="price-wrapper">
                                  <div className="old">
                                    {product.price * 1.4} ر.س
                                  </div>
                                  <div className="new">{product.price} رس</div>
                                </div>
                                <div className="links-container d-flex w-100 gap-3 my-3 justify-content-center">
                                  <div
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleFavoriteClick(product);
                                    }}
                                  >
                                    <FavButton
                                      active={isProductFavorite(
                                        product.product_id
                                      )}
                                    />
                                  </div>
                                  <div onClick={() => handleAddToCart(product)}>
                                    <CartButton
                                      active={isProductInCart(
                                        product.product_id
                                      )}
                                    />
                                  </div>
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
                </Fragment>
              </Fragment>
            ))}
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
              <Accordion.Header>الماركة</Accordion.Header>
              <Accordion.Body>
                {categories.map((category) => (
                  <div className="item">
                    <span></span>
                    <div>
                      {" "}
                      <label htmlFor="">{category.name}</label>
                      <Form.Check
                        type={"checkbox"}
                        id={category.id}
                        value={category.id}
                        onChange={handleCheckboxChange(
                          "category_id",
                          category.id.toString()
                        )}
                        checked={filters.category_id.includes(
                          category.id.toString()
                        )}
                      />
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> الفئة </Accordion.Header>
              <Accordion.Body>
                {brands.map((brand) => (
                  <div className="item">
                    <span>{`(${brand.productDto.length})`}</span>
                    <div>
                      {" "}
                      <label htmlFor="">{brand.brand_name}</label>
                      <Form.Check
                        type={"checkbox"}
                        id={brand.brand_id}
                        value={brand.brand_id}
                        onChange={handleCheckboxChange(
                          "brand_id",
                          brand.brand_id.toString()
                        )}
                        checked={filters.brand_id.includes(
                          brand.brand_id.toString()
                        )}
                      />
                    </div>
                  </div>
                ))}
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
                  minValue={filters.price_range.min}
                  maxValue={filters.price_range.max}
                  onChange={handlePriceRangeChange}
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> اللون</Accordion.Header>
              <Accordion.Body>
                {colors.map((color, i) => (
                  <div className="item my-1">
                    <span></span>
                    <div>
                      {" "}
                      <label
                        htmlFor=""
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: color.hex_code,
                        }}
                      ></label>
                      <Form.Check
                        type={"checkbox"}
                        id={i}
                        value={color.name}
                        onChange={handleCheckboxChange(
                          "color_name",
                          color.name
                        )}
                        checked={filters.color_name.includes(color.name)}
                      />
                    </div>
                  </div>
                ))}
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
              </Accordion.Body>
            </Accordion.Item>
            <button onClick={resetFilters} className="reset">
              إعادة ضبط
            </button>
          </Accordion>
          <StaticSlider />
        </div>
        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton style={{ backgroundColor: "#60F4D4" }}>
            <Offcanvas.Title>Filters</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <div className="filters">
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
            </div> */}
          </Offcanvas.Body>
        </Offcanvas>
        {/* Offcanvas */}
      </main>
      <Footer />
    </div>
  );
}

export default Products;
