import { useState } from "react";
import { StyledProductTabs } from "./styled";
import { ProductTab, ProductTabItem } from "../product-tab/ProductTab";
import ProductInfo from "../product-info/ProductInfo";

const productTabs = [
  {
    id: 0,
    title: "Описание",
    type: "description",
  },
  {
    id: 1,
    title: "Характеристики",
    type: "characteristics",
  },
  {
    id: 2,
    title: "Свойства",
    type: "properties",
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

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <StyledProductTabs>
        {productTabs &&
          productTabs.length &&
          productTabs.map((tab, index) => {
            if (index === activeTab) {
              return (
                <ProductTabItem key={index}>
                  <ProductTab activetabstyle={activeTabStyle}>
                    {tab.title}
                  </ProductTab>
                </ProductTabItem>
              );
            }
            return (
              <ProductTabItem key={index}>
                <ProductTab
                  as="button"
                  style={buttonStyle}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </ProductTab>
              </ProductTabItem>
            );
          })}
      </StyledProductTabs>
      <ProductInfo tabType={productTabs[activeTab].type} product={product} />
    </>
  );
}
