import React, { useRef, useState } from "react";
import axios from "axios";

export const Search = ({ setSearchInput }) => {
  const searchValue = useRef(null);

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      setSearchInput(searchValue.current.value);
      window.scrollTo(0, 250);
    }
  };

  return (
    <div style={{ width: "100%", direction: "rtl" }}>
      <input
        type="search"
        onKeyDown={(e) => handleSearch(e)}
        ref={searchValue}
        placeholder="ابحث عما تريد"
      />
    </div>
  );
};
