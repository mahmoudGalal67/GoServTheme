import React, { useEffect } from "react";
import { useRef } from "react";

import "./CartButton.css";

function CartButton({ active }) {
  const cartButton = useRef();

  useEffect(() => {
    if (cartButton.current) {
      cartButton.current.addEventListener("click", (e) => {
        if (!cartButton.current.classList.contains("loading")) {
          cartButton.current.classList.add("loading");

          setTimeout(
            () => cartButton.current.classList.remove("loading"),
            3700
          );
        }
        e.preventDefault();
      });
    }
  }, []);

  return (
    <button ref={cartButton} className="cartButton">
      <span className={active ? "active" : ""}>
        {!active ? "Add to cart" : "Remove from cart"}
      </span>
      <div className="cart">
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
          <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
      </div>
    </button>
  );
}

export default CartButton;
