import { useEffect, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./DesignOptions.css";

function DesignOptions() {
  return (
    <ul className="menu-sub">
      <li className="menu-sub-title">
        <label className="submenu-label back" htmlFor="sub-one">
          خيارات التصميم
        </label>
        <div className="arrow left">&#8250;</div>
      </li>
      <li>
        لون المتجر
        <Form.Control
          type="color"
          id="exampleColorInput"
          title="Choose your color"
        />
      </li>
      <li>
        ميزة مسار التنقل
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label=""
        />
      </li>
      <li>
        توحيد ارتفاع المنتجات في الرئيسية والتصنيفات
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label=""
        />
      </li>
      <li>
        توحيد ارتفاع المنتجات في الرئيسية والتصنيفات
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label=""
        />
      </li>

      <li style={{ padding: "12px 16px", height: "auto" }}>
        <Button className="submit-button" variant="info">
          حفظ التغييرات
        </Button>
      </li>
    </ul>
  );
}

export default DesignOptions;
