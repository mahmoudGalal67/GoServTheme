import React from "react";
import { Table } from "react-bootstrap";

function ProductFeatures() {
  return (
    <>
      <Table striped className="mt-4">
        <tbody className="mx-3">
          <tr>
            <td>العلامة التجارية</td>
            <td className="fw-semibold " colSpan={1}>
              آبل
            </td>
          </tr>
          <tr>
            <td> اللون</td>
            <td className="fw-semibold"> رصاصي </td>
          </tr>
          <tr>
            <td>تقنية الاتصال</td>
            <td className="fw-semibold"> Wireless </td>
          </tr>
          <tr>
            <td>اسم الطراز</td>
            <td className="fw-semibold"> MWP22ZP/A </td>
          </tr>
          <tr>
            <td> الابعاد</td>
            <td className="fw-semibold"> 160.8×78.1×7.7ملم جرام </td>
          </tr>
          <tr>
            <td> الشريحة </td>
            <td className="fw-semibold"> يدعم الهاتف شريحتين </td>
          </tr>
          <tr>
            <td> المادة </td>
            <td className="fw-semibold"> الزجاج </td>
          </tr>
          <tr>
            <td> الوزن </td>
            <td className="fw-semibold"> 0.45 أوقية </td>
          </tr>
          <tr>
            <td> المادة </td>
            <td className="fw-semibold"> الزجاج </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ProductFeatures;
