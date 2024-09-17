import {
  StyledProductProperties,
  ProductPropertiesItem,
  ProductPropertiesTitle,
  ProductPropertiesValue,
} from "./styled";

export default function ProductProperties({ properties }) {
  return (
    <StyledProductProperties>
      <ProductPropertiesItem>
        <ProductPropertiesTitle>
          Энергетическая ценность:
        </ProductPropertiesTitle>
        <ProductPropertiesValue>
          {properties.energyValue}
        </ProductPropertiesValue>
      </ProductPropertiesItem>

      <ProductPropertiesItem>
        <ProductPropertiesTitle>Пищевая ценность:</ProductPropertiesTitle>
        <ProductPropertiesValue>
          {properties.nutritionalValue}
        </ProductPropertiesValue>
      </ProductPropertiesItem>
    </StyledProductProperties>
  );
}
