import React from "react";
import HeadElemnts from "../headElemnts/HeadElemnts";
import BottomElemnts from "../bottomElemnts/BottomElemnts";

function StoreList() {
  return (
    <ul className="menu-sub">
      <li className="menu-sub-title">
        <label className="submenu-label back" htmlFor="sub-three">
          قوائم المتجر
        </label>
        <div className="arrow left">&#8250;</div>
      </li>
      <li>
        <input type="checkbox" id="head" className="submenu-toggle" />
        <label className="submenu-label" htmlFor="head">
          عناصر رأس الصفحة
        </label>
        <div className="arrow right">&#8249;</div>
        <ul className="menu-sub">
          <li className="menu-sub-title">
            <label className="submenu-label back" htmlFor="head">
              عناصر رأس الصفحة
            </label>
            <div className="arrow left">&#8250;</div>
          </li>
          <HeadElemnts />
        </ul>
      </li>
      <li>
        <input type="checkbox" id="bottom" className="submenu-toggle" />
        <label className="submenu-label" htmlFor="bottom">
          عناصر ذيل الصفحة
        </label>
        <div className="arrow right">&#8249;</div>
        <ul className="menu-sub">
          <li className="menu-sub-title">
            <label className="submenu-label back" htmlFor="bottom">
              عناصر ذيل الصفحة
            </label>
            <div className="arrow left">&#8250;</div>
          </li>
          <BottomElemnts />
        </ul>
      </li>
    </ul>
  );
}

export default StoreList;
