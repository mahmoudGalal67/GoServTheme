import React from "react";

import "./ThemeCustomize.css";

function ThemeCustomize() {
  return (
    <ul className="menu-sub theme-coustomize">
      <li className="menu-sub-title">
        <label className="submenu-label back" htmlFor="sub-four">
          تخصيص التصميم
        </label>
        <div className="arrow left">&#8250;</div>
      </li>
      <li className="code">
        {" "}
        <textarea placeholder="Enter css code" cols={14}></textarea>
      </li>
      <li className="code">
        {" "}
        <textarea placeholder="Enter js code" cols={14}></textarea>
      </li>
    </ul>
  );
}

export default ThemeCustomize;
