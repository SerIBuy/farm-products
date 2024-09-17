import { useState } from "react";
import { StyledProductTabs } from "./styled";
import ProductTab from "../product-tab/ProductTab";

const productTabs = [
  {
    id: 0,
    title: "Описание",
  },
  {
    id: 1,
    title: "Характеристики",
  },
  {
    id: 2,
    title: "Свойства",
  },
];

const activeTabStyle = {
  backgroundColor: "#88aa4d",
  color: "#ffffff",
};

const buttonStyle = {
  cursor: "pointer",
  padding: "8px 12px",
  fontFamily: "inherit",
  fontSize: "inherit",
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <StyledProductTabs>
      {productTabs &&
        productTabs.length &&
        productTabs.map((tab, index) => {
          if (index === activeTab) {
            return (
              <ProductTab activeTabStyle={activeTabStyle}>
                {tab.title}
              </ProductTab>
            );
          }
          return (
            <ProductTab
              as="button"
              style={buttonStyle}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </ProductTab>
          );
        })}
    </StyledProductTabs>
  );
}
