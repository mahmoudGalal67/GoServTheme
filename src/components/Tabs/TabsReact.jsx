import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Details from "./ProductDetails";
import ProductReviews from "./ProductReviews";
import ProductFeatures from "./ProductFeatures";

import "./Tabs.css";

function TabsReact({ ProductDetails }) {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="تفاصيل المنتج">
          <Details ProductDetails={ProductDetails} />
        </Tab>

        <Tab eventKey="profile" title="مميزات المنتج">
          <ProductFeatures />
        </Tab>

        <Tab eventKey="contact" title="تقييمات المنتج">
          <ProductReviews ProductDetails={ProductDetails} />
        </Tab>
      </Tabs>
    </>
  );
}

export default TabsReact;
