import React, { useRef, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const Search = ({ handleSearch }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const search = (e, name, value) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if ((location.pathname = "/")) {
        navigate(`/products?search=${e.target.value}`);
      }
      handleSearch(name, value);
      window.scrollTo(0, 250);
    }
  };

  return (
    <div style={{ width: "100%", direction: "rtl" }}>
      <input
        type="text"
        name="search_text"
        onKeyDown={(e) => search(e, e.target.name, e.target.value)}
        placeholder="ابحث عما تريد"
      />
    </div>
  );
};
