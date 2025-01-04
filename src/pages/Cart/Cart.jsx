import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItemQuantity, removeItemFromCart } from "../Redux/CartSlice";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import NavBar from "../../components/nav/Nav";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../components/context/Auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

function Cart() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);

  const totalAmount = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const productSummary = products
    .map(
      (product) =>
        `${product.product_name_ar}: ${product.quantity} x ${product.price} ر.س`
    )
    .join(", ");

  const handleIncreaseQuantity = (id) => {
    const product = products.find((product) => product.product_id === id);
    dispatch(
      updateItemQuantity({
        ...product,
        quantity: product.quantity + 1,
      })
    );
  };

  const handleDecreaseQuantity = (id) => {
    const product = products.find((product) => product.product_id === id);
    dispatch(
      updateItemQuantity({
        ...product,
        quantity: product.quantity > 1 ? product.quantity - 1 : 1,
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItemFromCart({ id }));
  };
  return (
    <>
      <Info />
      <NavBar />
      <div className="cart-page">
        <div className="container">
          <div className="row">
            <div
              className="border-1 col-md-4 col-sm-12 border-1 bg-white rounded rounded-2 mt-4 card h-75"
              dir="rtl"
            >
              <p className="mx-1 py-4 fw-medium ms-auto">ملخص الطلب </p>
              <div className="mb-5">
                <div className="text d-flex justify-content-between">
                  <span className="mx-1 gray-text">مجموع المنتجات </span>
                  <span className="mx-2">{totalAmount} ر.س</span>
                </div>
              </div>
              <p className="ms-auto p-2">هل لديك كود خصم </p>
              <div className="mx-0 ">
                <div className="d-flex items-center gap-2">
                  <input
                    type="text"
                    className="mt-1 w-100 mx-0 col-md rounded-3 p-2"
                    style={{ color: "black" }}
                    placeholder="ادخل كود الخصم "
                  />
                  <button className="btn btn-sm mt-0 mt-1 add">اضافه</button>
                </div>
                <hr />
              </div>
              <div className="text d-flex justify-content-between">
                <span className="mx-1 mt-2 fw-medium">الاجمالي </span>
                <span className="mx-1 mt-2 fw-medium">{totalAmount} ر.س</span>
              </div>
              <p className="ms-auto mt-3 mb-2">الاسعار شامله الضريبه </p>
              <button className="rounded-3 mb-3 p-2 confirm">
                اتمام الطلب
              </button>
            </div>

            <div
              className="product col-md-8 col-sm-12 border-1 bg-white rounded rounded-2"
              dir="rtl"
            >
              {products.map((product) => (
                <div key={product.product_id}>
                  <div className="d-flex justify-content-start mt-2">
                    <div className="py-3">
                      <img
                        src={`http://salla1-001-site1.anytempurl.com/${product?.photoes[0]}`}
                        height={100}
                        width={100}
                        alt={product.product_name_ar}
                      />
                    </div>

                    <div className="mx-3 mt-3">
                      <p className="fw-medium mt-3">
                        {product.product_name_ar}
                      </p>
                      <span className="text-secondary">
                        {product.price} ر.س
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="mx-3 text-secondary mt-3">
                      المجموع {product.price * product.quantity} ر.س
                    </p>
                    <div className="count p-2 text-center mb-3 d-flex justify-content-between">
                      <button
                        className="btn-click"
                        style={{ color: "black" }}
                        onClick={() =>
                          handleIncreaseQuantity(product.product_id)
                        }
                      >
                        <IoAdd />
                      </button>
                      <span style={{ marginInline: "8px" }}>
                        {product.quantity}
                      </span>
                      <button
                        className="btn-click"
                        style={{ color: "black" }}
                        onClick={() =>
                          handleDecreaseQuantity(product.product_id)
                        }
                      >
                        <FiMinus />
                      </button>
                      <MdCancel
                        className="fs-3"
                        style={{ marginRight: "8px", cursor: "pointer" }}
                        onClick={() => handleRemove(product.product_id)}
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Cart;
