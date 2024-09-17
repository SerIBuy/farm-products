import StyledProductDescription from "./styled";
import ProductCharacteristics from "../product-characteristics/ProductCharacteristics";
import ProductProperties from "../product-properies/ProductProperis";

export default function ProductDescription({ tabType, product }) {
  return (
    <StyledProductDescription>
      {(() => {
        if (tabType === "description") return product[tabType];
        else if (tabType === "characteristics")
          return <ProductCharacteristics characteristics={product[tabType]} />;
        else if (tabType === "properties")
          return <ProductProperties properties={product[tabType]} />;
      })()}
    </StyledProductDescription>
  );
}
