import StyledProductInfo from "./styled";
import ProductCharacteristics from "../product-characteristics/ProductCharacteristics";
import ProductProperties from "../product-properies/ProductProperis";
import ProductDescription from "../product-description/ProductDescription";
import { ProductPriceWeight } from "../product/styled";

export default function ProductInfo({ tabType, product }) {
  return (
    <StyledProductInfo>
      {(() => {
        if (tabType === "description")
          return (
            <>
              <ProductDescription>{product[tabType]}</ProductDescription>
              <ProductPriceWeight>
                {`${product.pricePerWeight.price} / ${product.pricePerWeight.weight}`}
              </ProductPriceWeight>
            </>
          );
        else if (tabType === "characteristics")
          return <ProductCharacteristics characteristics={product[tabType]} />;
        else if (tabType === "properties")
          return <ProductProperties properties={product[tabType]} />;
      })()}
    </StyledProductInfo>
  );
}
